export type PortfolioVideo = {
  id: string;
  title: string;
  category: "YouTube";
  thumbnail: string | null;
  youtubeId: string | null;
  duration?: string | null;
  description?: string;
};
