import net from "node:net";
import tls from "node:tls";

type SmtpMailOptions = {
  from: string;
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user?: string;
  pass?: string;
};

type SmtpResponse = {
  code: number;
  lines: string[];
};

class SmtpClient {
  private buffer = "";
  private lines: string[] = [];
  private readonly socket: net.Socket | tls.TLSSocket;

  constructor(socket: net.Socket | tls.TLSSocket) {
    this.socket = socket;
    this.socket.setEncoding("utf8");
    this.socket.on("data", (chunk: string | Buffer) => {
      this.buffer += chunk.toString();
      const parts = this.buffer.split(/\r?\n/);
      this.buffer = parts.pop() ?? "";
      this.lines.push(...parts.filter(Boolean));
    });
  }

  async greet(clientName: string) {
    await this.expect([220]);
    await this.command(`EHLO ${clientName}`, [250]);
  }

  async authenticate(user: string, pass: string) {
    const plainToken = Buffer.from(`\0${user}\0${pass}`, "utf8").toString("base64");

    try {
      await this.command(`AUTH PLAIN ${plainToken}`, [235]);
      return;
    } catch {
      await this.command("AUTH LOGIN", [334]);
      await this.command(Buffer.from(user, "utf8").toString("base64"), [334]);
      await this.command(Buffer.from(pass, "utf8").toString("base64"), [235]);
    }
  }

  async sendMail({ from, to, subject, text, replyTo }: SmtpMailOptions) {
    const envelopeFrom = extractEmailAddress(from);
    const envelopeTo = extractEmailAddress(to);
    const headers = [
      `From: ${from}`,
      `To: ${to}`,
      `Subject: ${encodeHeader(subject)}`,
      `Date: ${new Date().toUTCString()}`,
      "MIME-Version: 1.0",
      'Content-Type: text/plain; charset="UTF-8"',
      "Content-Transfer-Encoding: 8bit",
      replyTo ? `Reply-To: ${replyTo}` : "",
    ]
      .filter(Boolean)
      .join("\r\n");

    const body = normalizeBody(text);

    await this.command(`MAIL FROM:<${envelopeFrom}>`, [250]);
    await this.command(`RCPT TO:<${envelopeTo}>`, [250, 251]);
    await this.command("DATA", [354]);
    await this.command(`${headers}\r\n\r\n${body}\r\n.`, [250]);
    await this.command("QUIT", [221]);
  }

  private write(line: string) {
    this.socket.write(`${line}\r\n`);
  }

  private async command(line: string, expectedCodes: number[]) {
    this.write(line);
    return this.expect(expectedCodes);
  }

  private async expect(expectedCodes: number[]) {
    const response = await this.readResponse();

    if (!expectedCodes.includes(response.code)) {
      throw new Error(
        `SMTP respondeu com ${response.code} quando eram esperados ${expectedCodes.join(", ")}.`,
      );
    }

    return response;
  }

  private async readResponse(): Promise<SmtpResponse> {
    const lines: string[] = [];

    while (true) {
      const line = await this.readLine();
      const match = line.match(/^(\d{3})([ -])(.*)$/);

      if (!match) {
        throw new Error("Resposta SMTP invalida.");
      }

      lines.push(line);

      if (match[2] === " ") {
        return {
          code: Number(match[1]),
          lines,
        };
      }
    }
  }

  private async readLine(): Promise<string> {
    if (this.lines.length > 0) {
      return this.lines.shift() as string;
    }

    return new Promise<string>((resolve, reject) => {
      const onData = () => {
        if (this.lines.length === 0) {
          return;
        }

        cleanup();
        resolve(this.lines.shift() as string);
      };

      const onError = (error: Error) => {
        cleanup();
        reject(error);
      };

      const onClose = () => {
        cleanup();
        reject(new Error("Conexao SMTP encerrada antes da resposta."));
      };

      const cleanup = () => {
        this.socket.off("data", onData);
        this.socket.off("error", onError);
        this.socket.off("close", onClose);
      };

      this.socket.on("data", onData);
      this.socket.on("error", onError);
      this.socket.on("close", onClose);
    });
  }
}

export async function sendSmtpMail(config: SmtpConfig, mail: SmtpMailOptions) {
  const socket = await connectSocket(config);
  const client = new SmtpClient(socket);

  try {
    socket.setTimeout(20_000, () => {
      socket.destroy(new Error("Tempo limite excedido na conexao SMTP."));
    });

    await client.greet("centralfunerariabrasil.com.br");

    if (config.user && config.pass) {
      await client.authenticate(config.user, config.pass);
    }

    await client.sendMail(mail);
  } finally {
    socket.end();
    socket.destroy();
  }
}

function connectSocket(config: SmtpConfig): Promise<net.Socket | tls.TLSSocket> {
  return new Promise((resolve, reject) => {
    const socket = config.secure
      ? tls.connect({
          host: config.host,
          port: config.port,
          servername: config.host,
        })
      : net.connect({
          host: config.host,
          port: config.port,
        });

    const onConnect = () => {
      cleanup();
      resolve(socket);
    };

    const onError = (error: Error) => {
      cleanup();
      reject(error);
    };

    const cleanup = () => {
      socket.off(config.secure ? "secureConnect" : "connect", onConnect);
      socket.off("error", onError);
    };

    socket.once(config.secure ? "secureConnect" : "connect", onConnect);
    socket.once("error", onError);
  });
}

function normalizeBody(text: string) {
  return text
    .replace(/\r?\n/g, "\r\n")
    .replace(/^\./gm, "..");
}

function extractEmailAddress(value: string) {
  const match = value.match(/<([^>]+)>/);
  return (match?.[1] ?? value).trim();
}

function encodeHeader(value: string) {
  const hasNonAscii = /[^\x00-\x7F]/.test(value);

  if (!hasNonAscii) {
    return value;
  }

  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}
