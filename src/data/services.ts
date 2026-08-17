import type { Service } from "@/types/service";

export const services: readonly Service[] = [
  {
    id: "youtube",
    title: "Edição para YouTube",
    description:
      "Vídeos completos com ritmo, cortes precisos e narrativa envolvente para manter a atenção do público.",
    icon: "video",
    featured: true,
  },
  {
    id: "podcast",
    title: "Cortes para Podcast",
    description:
      "Seleção dos melhores momentos e adaptação de episódios para conteúdos mais rápidos e compartilháveis.",
    icon: "podcast",
  },
  {
    id: "shorts",
    title: "Shorts, Reels e TikTok",
    description:
      "Vídeos verticais dinâmicos, preparados para consumo rápido e diferentes plataformas sociais.",
    icon: "smartphone",
  },
  {
    id: "legendas",
    title: "Legendas animadas",
    description:
      "Legendas claras e sincronizadas que reforçam a mensagem e tornam o conteúdo mais acessível.",
    icon: "captions",
  },
  {
    id: "motion",
    title: "Motion graphics e efeitos",
    description:
      "Elementos gráficos, transições e efeitos utilizados com equilíbrio para valorizar a comunicação.",
    icon: "sparkles",
  },
  {
    id: "thumbnails",
    title: "Criação de thumbnails",
    description:
      "Capas pensadas para comunicar o tema do vídeo e despertar interesse sem comprometer sua identidade.",
    icon: "image",
  },
];
