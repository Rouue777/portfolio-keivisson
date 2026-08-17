export type ServiceIcon =
  | "video"
  | "podcast"
  | "smartphone"
  | "captions"
  | "sparkles"
  | "image";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
  featured?: boolean;
};
