import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Video, X } from "lucide-react";
import { useEffect, useRef } from "react";

import type { PortfolioVideo } from "@/types/portfolio";

type VideoModalProps = {
  video: PortfolioVideo | null;
  onClose: () => void;
  onExitComplete: () => void;
};

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export function VideoModal({ video, onClose, onExitComplete }: VideoModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!video) return;

    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialog) return;

      const elements = Array.from(
        dialog.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const first = elements[0];
      const last = elements[elements.length - 1];

      if (!first || !last) {
        event.preventDefault();
        dialog.focus();
        return;
      }

      if (!dialog.contains(document.activeElement)) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, onClose]);

  const descriptionId = video && (video.description || !video.youtubeId)
    ? "video-modal-description"
    : undefined;

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {video ? (
        <motion.div
          key={video.id}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
          role="presentation"
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
            aria-describedby={descriptionId}
            tabIndex={-1}
            className="w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/50"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
            }
            onMouseDown={(event) => event.stopPropagation()}
          >
        <header className="flex items-start justify-between gap-4 border-b border-border px-4 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-light">
              {video.category}
            </p>
            <h2
              id="video-modal-title"
              className="truncate font-heading text-lg font-semibold text-text sm:text-xl"
            >
              {video.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Fechar vídeo"
            className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border text-text-muted transition-colors hover:border-primary-highlight hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
            onClick={onClose}
          >
            <X aria-hidden="true" className="size-5" />
          </button>
        </header>

        <div className="bg-background p-3 sm:p-5">
          {video.youtubeId ? (
            <div className="aspect-video overflow-hidden rounded-lg bg-black">
              <iframe
                className="size-full border-0"
                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="flex aspect-video flex-col items-center justify-center rounded-lg border border-border bg-background-secondary px-6 text-center">
              <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary-light">
                <Video aria-hidden="true" className="size-6" />
              </span>
              <p
                id="video-modal-description"
                className="text-sm text-text-muted sm:text-base"
              >
                Vídeo será adicionado em breve.
              </p>
            </div>
          )}

          {video.description && video.youtubeId ? (
            <p
              id="video-modal-description"
              className="mt-4 text-sm leading-6 text-text-muted"
            >
              {video.description}
            </p>
          ) : null}
        </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
