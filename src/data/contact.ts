export type ContactChannel = {
  label: string;
  value: string | null;
  href: string | null;
  external: boolean;
};

export const brandName = "Keivisson Borges";

export const navigationLinks = [
  { label: "Início", href: "#inicio", id: "inicio" },
  { label: "Portfólio", href: "#portfolio", id: "portfolio" },
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Contato", href: "#contato", id: "contato" },
] as const;

export const contactChannels: Record<
  "whatsapp" | "email" | "instagram",
  ContactChannel
> = {
  whatsapp: {
    label: "WhatsApp",
    value: "(71) 99309-0095",
    href: "https://wa.me/5571993090095",
    external: true,
  },
  email: {
    label: "E-mail",
    value: "keivissonbusiness@gmail.com",
    href: "mailto:keivissonbusiness@gmail.com",
    external: false,
  },
  instagram: {
    label: "Instagram",
    value: "@keivisson___",
    href: "https://www.instagram.com/keivisson___/",
    external: true,
  },
};
