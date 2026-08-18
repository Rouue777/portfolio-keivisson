import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { siteConfig } from "@/data/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "editor de vídeo",
    "edição de vídeo",
    "edição para YouTube",
    "edição de podcasts",
    "edição para redes sociais",
    "edição de Shorts e Reels",
    "legendas animadas",
    "motion graphics",
    "thumbnails para YouTube",
  ],
  category: "Edição de vídeo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    // URL e imagem serão adicionadas quando siteUrl e socialImage estiverem definidos.
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
    // A imagem social será adicionada quando o material definitivo estiver disponível.
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
