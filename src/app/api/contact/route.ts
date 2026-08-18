import { NextResponse } from "next/server";

import { contact } from "@/data/contact";
import { createContactEmailBody } from "@/lib/contact";
import { sendSmtpMail } from "@/lib/smtp";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  whatsapp: string;
  email?: string;
  city?: string;
  state?: string;
  serviceType: string;
  notes?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<ContactPayload>;
    const validationError = validatePayload(payload);

    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 });
    }

    const smtpHost = process.env.CENTRALFUNERARIA_SMTP_HOST;
    const smtpPort = Number(process.env.CENTRALFUNERARIA_SMTP_PORT ?? 465);
    const smtpSecure = parseBoolean(process.env.CENTRALFUNERARIA_SMTP_SECURE, true);
    const smtpUser = process.env.CENTRALFUNERARIA_SMTP_USER;
    const smtpPass = process.env.CENTRALFUNERARIA_SMTP_PASS;
    const smtpFrom =
      process.env.CENTRALFUNERARIA_SMTP_FROM ??
      `Central Funerária Brasil <${contact.email}>`;
    const recipient = process.env.CENTRALFUNERARIA_CONTACT_RECIPIENT ?? contact.email;

    if (!smtpHost || Number.isNaN(smtpPort) || !smtpFrom || !recipient) {
      return NextResponse.json(
        { message: "Configuração de e-mail incompleta no servidor." },
        { status: 500 },
      );
    }

    await sendSmtpMail(
      {
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        user: smtpUser,
        pass: smtpPass,
      },
      {
        from: smtpFrom,
        to: recipient,
        subject: `Nova solicitação pelo site - ${payload.serviceType}`,
        text: buildEmailBody(payload as ContactPayload),
      },
    );

    return NextResponse.json({
      message: "Recebemos sua solicitação e encaminhamos para nossa equipe por e-mail.",
    });
  } catch (error) {
    console.error("Erro ao enviar contato:", error);

    return NextResponse.json(
      { message: "Não foi possível enviar agora. Tente novamente em instantes." },
      { status: 500 },
    );
  }
}

function validatePayload(payload: Partial<ContactPayload>) {
  if (!payload.name?.trim()) return "Informe seu nome.";
  if (!payload.whatsapp?.trim()) return "Informe seu WhatsApp.";
  if (!payload.serviceType?.trim()) return "Selecione o tipo de atendimento.";

  return null;
}

function parseBoolean(value: string | undefined, fallback: boolean) {
  if (value === undefined) {
    return fallback;
  }

  return value.toLowerCase() === "true";
}

function buildEmailBody(payload: ContactPayload) {
  return createContactEmailBody({
    name: payload.name,
    whatsapp: payload.whatsapp,
    email: payload.email?.trim() || "-",
    city: payload.city?.trim() || "-",
    state: payload.state?.trim() || "-",
    serviceType: payload.serviceType,
    notes: payload.notes?.trim() || "-",
  });
}
