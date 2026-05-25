# Central Funerária Brasil

Projeto institucional em Next.js para a **Central Funerária Brasil**, com foco em performance, visual sóbrio, conteúdo humanizado e formulários que direcionam o atendimento para o WhatsApp.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Lucide React para ícones

## Estrutura principal

- `src/app`: páginas, layout, metadata, sitemap e robots
- `src/components`: componentes reutilizáveis da interface
- `src/data`: dados institucionais, navegação e serviços
- `src/lib`: utilitários, incluindo geração de link para WhatsApp
- `public/images`: caminhos preparados para imagens futuras

## Instalação

```bash
npm install
```

## Ambiente local

```bash
npm run dev
```

Abra:

```bash
http://localhost:3000
```

## Build de produção

```bash
npm run build
npm run start
```

## Substituição de imagens

Os caminhos já estão preparados em `public/images/README.md`. Enquanto os arquivos reais não existem, o layout usa placeholders visuais com gradiente.

## Publicação com PM2 e Nginx

### 1. Preparar o servidor

Instale no servidor:

- Node.js LTS
- npm
- PM2
- Nginx

Exemplo:

```bash
npm install -g pm2
```

### 2. Enviar o projeto

Publique os arquivos do projeto em uma pasta como:

```bash
/var/www/centralfunerariabrasil
```

### 3. Instalar dependências e gerar build

Dentro da pasta do projeto:

```bash
npm install
npm run build
```

### 4. Subir com PM2

Use a porta `3000`:

```bash
pm2 start npm --name centralfunerariabrasil -- start
pm2 save
pm2 startup
```

Se quiser definir porta explicitamente:

```bash
PORT=3000 pm2 start npm --name centralfunerariabrasil -- start
```

### 5. Configurar Nginx como proxy reverso

Exemplo de bloco para o domínio:

```nginx
server {
    listen 80;
    server_name centralfunerariabrasil.com.br www.centralfunerariabrasil.com.br;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Depois valide e reinicie:

```bash
nginx -t
systemctl reload nginx
```

### 6. HTTPS

Depois que o domínio apontar para o servidor, gere SSL com Certbot:

```bash
certbot --nginx -d centralfunerariabrasil.com.br -d www.centralfunerariabrasil.com.br
```

## Publicação usando aaPanel

### 1. Criar o site no painel

- Adicione o domínio `centralfunerariabrasil.com.br`
- Aponte a raiz para a pasta do projeto

### 2. Instalar dependências

No terminal do aaPanel:

```bash
cd /www/wwwroot/centralfunerariabrasil
npm install
npm run build
```

### 3. Gerenciar com PM2

No gerenciador Node/PM2 ou no terminal:

```bash
pm2 start npm --name centralfunerariabrasil -- start
pm2 save
```

### 4. Configurar proxy reverso

No vhost do Nginx do site, configure proxy para:

```text
http://127.0.0.1:3000
```

Se o aaPanel oferecer o campo de proxy reverso na interface, basta apontar para a porta `3000`.

## Observações

- O projeto é estático no sentido institucional, mas roda em runtime Next.js padrão.
- Não há backend, banco de dados, painel administrativo ou login.
- Os formulários apenas montam a mensagem e abrem o WhatsApp.
