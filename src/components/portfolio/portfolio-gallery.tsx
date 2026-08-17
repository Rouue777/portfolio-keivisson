"use client";

import { useCallback, useRef, useState } from "react";

import { VideoCard } from "@/components/portfolio/video-card";
import { VideoModal } from "@/components/portfolio/video-modal";
import { Reveal } from "@/components/ui/reveal";
import type { PortfolioVideo } from "@/types/portfolio";

type PortfolioGalleryProps = {
  videos: readonly PortfolioVideo[];
};

export function PortfolioGallery({ videos }: PortfolioGalleryProps) {
  const [selectedVideo, setSelectedVideo] = useState<PortfolioVideo | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  function openVideo(video: PortfolioVideo, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setSelectedVideo(video);
  }

  const closeVideo = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  const restoreTriggerFocus = useCallback(() => {
    triggerRef.current?.focus();
  }, []);

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {videos.map((video, index) => (
          <Reveal key={video.id} delay={Math.min(index * 0.05, 0.25)} className="h-full">
            <VideoCard video={video} onSelect={openVideo} />
          </Reveal>
        ))}
      </div>
      <VideoModal video={selectedVideo} onClose={closeVideo} onExitComplete={restoreTriggerFocus} />
    </>
  );
}
