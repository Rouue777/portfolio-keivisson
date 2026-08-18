import { Clapperboard, Play } from "lucide-react";
import Image from "next/image";

import type { PortfolioVideo } from "@/types/portfolio";

type VideoCardProps = {
  video: PortfolioVideo;
  onSelect: (video: PortfolioVideo, trigger: HTMLButtonElement) => void;
};

export function VideoCard({ video, onSelect }: VideoCardProps) {
  const actionLabel = video.youtubeId
    ? `Reproduzir ${video.title}`
    : `Abrir detalhes de ${video.title}`;

  return (
    <article className="group relative h-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-background shadow-lg shadow-black/10 transition-[transform,border-color,box-shadow] group-hover:-translate-y-1 group-hover:border-primary/70 group-hover:shadow-xl group-hover:shadow-primary/10 group-focus-within:-translate-y-1 group-focus-within:border-primary-light group-focus-within:ring-2 group-focus-within:ring-primary-light group-focus-within:ring-offset-2 group-focus-within:ring-offset-background-secondary motion-reduce:transform-none">
        {video.thumbnail ? (
          <Image
            src={video.thumbnail}
            alt={video.description ?? `Thumbnail de ${video.title}`}
            fill
            sizes="(min-width: 1280px) 368px, (min-width: 1024px) calc((100vw - 112px) / 3), (min-width: 640px) calc((100vw - 72px) / 2), calc(100vw - 32px)"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03] group-focus-within:scale-[1.03]"
          />
        ) : (
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_70%_25%,rgba(59,130,246,0.2),transparent_45%)]"
          >
            <span className="absolute inset-x-4 bottom-4 space-y-2 opacity-50">
              <span className="block h-2 w-2/3 rounded-full bg-border" />
              <span className="block h-2 w-1/3 rounded-full bg-primary/50" />
            </span>
            <Clapperboard className="size-10 text-text-muted/60" strokeWidth={1.5} />
          </span>
        )}

        <span className="absolute inset-0 flex items-center justify-center bg-background/20 transition-colors group-hover:bg-background/35 group-focus-within:bg-background/35">
          <span className="flex size-14 items-center justify-center rounded-full border border-primary-light/40 bg-primary text-white shadow-lg shadow-primary/25 transition-transform group-hover:scale-105 group-focus-within:scale-105">
            <Play aria-hidden="true" className="ml-0.5 size-5 fill-current" />
          </span>
        </span>

        {video.duration ? (
          <span className="absolute bottom-3 right-3 rounded bg-background/90 px-2 py-1 text-xs font-semibold text-text">
            {video.duration}
          </span>
        ) : null}
      </div>

      <div className="pt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary-light">
          {video.category}
        </p>
        <h3 className="font-heading text-lg font-semibold leading-snug text-text transition-colors group-hover:text-primary-light group-focus-within:text-primary-light">
          {video.title}
        </h3>
      </div>

      <button
        type="button"
        aria-label={actionLabel}
        className="absolute inset-0 z-10 cursor-pointer rounded-xl focus-visible:outline-none"
        onClick={(event) => onSelect(video, event.currentTarget)}
      />
    </article>
  );
}
