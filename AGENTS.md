# Instruções do Projeto

## Visão geral

Este projeto é uma landing page de portfólio para **Keivisson Borges**, editor de vídeo.

O objetivo é apresentar serviços, exibir trabalhos de YouTube e levar visitantes ao contato pelo WhatsApp.

A página será única, responsiva, acessível, otimizada para SEO e focada em conversão.

## Stack

- Next.js com App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Framer Motion
- clsx
- tailwind-merge

## Regras gerais

- Use TypeScript estrito. Nunca use `any`.
- Use componentes pequenos, reutilizáveis e com responsabilidade clara.
- Use Server Components por padrão.
- Adicione `"use client"` apenas quando houver interatividade real, como modal, menu mobile ou animações.
- Não instale dependências novas sem explicar a necessidade.
- Não modifique arquivos que não sejam relacionados à tarefa solicitada.
- Use o alias `@/` para imports internos.
- Use `next/image` para imagens locais.
- Use `next/font` para fontes.
- Não use bibliotecas de UI completas. Construa os componentes com Tailwind CSS.
- Mantenha dados de conteúdo separados da interface.

## Direção visual

Estilo: dark tech, audiovisual e premium.

Cores:

```txt
Fundo principal: #070B14
Fundo secundário: #0B1220
Fundo dos cards: #101A2D
Borda: #1E2C45

Azul principal: #2563EB
Azul destaque: #3B82F6
Azul claro: #60A5FA

Texto principal: #F8FAFC
Texto secundário: #94A3B8
Tipografia:
Títulos: Manrope
Textos: Inter
Regras visuais:
Layout mobile-first.
Largura máxima do conteúdo: 1200px.
Espaçamento vertical entre seções: 96px a 128px em desktop.
Cards escuros, bordas discretas e cantos arredondados.
Azul usado somente como destaque, CTA, foco e detalhes.
Animações devem ser leves, rápidas e não prejudicar desempenho.
Respeitar prefers-reduced-motion.
Estrutura da página
A página possui as seguintes seções:
Header fixo
Logo/nome: Keivisson Borges
Links âncora: Início, Portfólio, Serviços, Sobre, Contato
Botão de CTA para WhatsApp
Menu mobile acessível

Hero
Selo: Editor de Vídeo
Título: “Transformo ideias em vídeos que prendem atenção.”
Texto de apoio sobre edição para YouTube, podcasts e redes sociais
CTA primário: Ver portfólio
CTA secundário: Falar no WhatsApp
Área reservada para imagem ou vídeo de destaque
Área opcional para prova social

Portfólio
Exibir seis vídeos inicialmente
Apenas vídeos de YouTube
Cards com thumbnail 16:9, título e categoria
Ícone de play aparece no hover
Clique abre modal dentro da página
Não carregar iframes do YouTube antes do usuário clicar

Serviços
Edição para YouTube
Cortes para Podcast
Shorts, Reels e TikTok
Legendas animadas
Motion graphics e efeitos
Criação de thumbnails

Sobre
Texto provisório, profissional e focado em resultado
Área reservada para foto
Ferramentas: Adobe Premiere Pro, DaVinci Resolve e CapCut

CTA final
Título convidando ao contato
Botão para WhatsApp

Footer
WhatsApp, e-mail e Instagram
Direitos autorais

Arquitetura sugerida
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── portfolio.tsx
│   │   ├── services.tsx
│   │   ├── about.tsx
│   │   ├── contact-cta.tsx
│   │   └── contact.tsx
│   ├── portfolio/
│   │   ├── video-card.tsx
│   │   └── video-modal.tsx
│   └── ui/
│       ├── button.tsx
│       ├── container.tsx
│       └── section-heading.tsx
│
├── data/
│   └── portfolio.ts
│
├── lib/
│   └── utils.ts
│
└── types/
    └── portfolio.ts
Portfólio
Cada vídeo deve seguir este tipo:
type PortfolioVideo = {
  id: string;
  title: string;
  category: "YouTube";
  thumbnail: string;
  youtubeId: string;
};
As thumbnails devem ficar em:
public/images/portfolio/
Modal de vídeo
O modal deve:
Abrir ao clicar em um card;
Ter fundo escuro com desfoque;
Mostrar vídeo do YouTube em 16:9;
Fechar pelo botão, clique fora e tecla Escape;
Prender o foco enquanto estiver aberto;
Restaurar o foco no card acionado ao fechar;
Desmontar o iframe ao fechar para interromper o vídeo.
Acessibilidade
Usar HTML semântico.
Manter somente um h1.
Usar alt adequado em imagens.
Todos os botões precisam de rótulos claros.
Garantir navegação por teclado.
Garantir foco visível.
Manter contraste adequado.
Modal deve incluir atributos ARIA adequados.
SEO e desempenho
Configurar metadata no layout.tsx.
Criar título e descrição focados no serviço.
Usar imagens otimizadas.
Evitar JavaScript desnecessário.
Evitar animações excessivas.
Priorizar ótima experiência mobile.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
