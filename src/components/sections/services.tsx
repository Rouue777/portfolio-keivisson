import {
  Captions,
  ImageIcon,
  Podcast,
  Smartphone,
  Sparkles,
  Video,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import type { ServiceIcon } from "@/types/service";

const serviceIcons: Record<ServiceIcon, LucideIcon> = {
  video: Video,
  podcast: Podcast,
  smartphone: Smartphone,
  captions: Captions,
  sparkles: Sparkles,
  image: ImageIcon,
};

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="services-title"
      className="scroll-mt-20 py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="Serviços"
            title="Como posso ajudar seu conteúdo"
            description="Soluções de edição pensadas para transformar materiais brutos em conteúdos claros, dinâmicos e profissionais."
          />
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];

            return (
              <li key={service.id} className="h-full">
                <Reveal delay={Math.min(index * 0.05, 0.25)} className="h-full">
                  <article
                  className={cn(
                    "group relative h-full overflow-hidden rounded-xl border bg-card p-6 transition-[transform,border-color,box-shadow] hover:-translate-y-1 hover:border-primary/70 hover:shadow-xl hover:shadow-primary/10 motion-reduce:transform-none sm:p-7",
                    service.featured
                      ? "border-primary/50"
                      : "border-border",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  />

                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary-light transition-colors group-hover:border-primary/50 group-hover:bg-primary/15">
                      <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
                    </span>

                    {service.featured ? (
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary-light">
                        Principal
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-semibold text-text">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-text-muted sm:text-base sm:leading-7">
                    {service.description}
                  </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
