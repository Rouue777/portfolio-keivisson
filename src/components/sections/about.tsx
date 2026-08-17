import { ArrowRight, Clapperboard, PanelsTopLeft, Scissors } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const aboutContent = {
  eyebrow: "Sobre",
  title: "Edição que valoriza cada detalhe da sua mensagem.",
  paragraphs: [
    "Sou Keivisson Borges, editor de vídeo focado em transformar materiais brutos em conteúdos mais claros, dinâmicos e envolventes.",
    "Cada projeto é trabalhado com atenção ao ritmo, à narrativa e à identidade visual, buscando entregar uma experiência profissional e alinhada ao objetivo de cada conteúdo.",
  ],
} as const;

const editingTools = [
  { name: "Adobe Premiere Pro", Icon: Clapperboard },
  { name: "DaVinci Resolve", Icon: PanelsTopLeft },
  { name: "CapCut", Icon: Scissors },
] as const;

function PortraitPlaceholder() {
  return (
    // Substituir este conteúdo decorativo por next/image com fill quando a foto real estiver disponível.
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-md lg:mx-0"
    >
      <div className="absolute inset-8 -z-10 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card sm:aspect-[4/5] lg:max-h-[36rem]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(96,165,250,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(59,130,246,0.22),transparent_42%)]" />

        <div className="absolute inset-x-5 top-5 flex items-center justify-between">
          <span className="h-1.5 w-20 rounded-full bg-primary/40" />
          <span className="size-2 rounded-full bg-primary-light" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex size-32 items-center justify-center rounded-2xl border border-primary/30 bg-background/70 shadow-xl shadow-primary/10 sm:size-40">
            <Clapperboard className="size-12 text-primary-light/80 sm:size-14" strokeWidth={1.25} />
            <span className="absolute -bottom-3 -right-3 size-12 rounded-xl border border-border bg-card" />
          </div>
        </div>

        <div className="absolute inset-x-5 bottom-5 rounded-lg border border-border bg-background/80 p-3 backdrop-blur-sm">
          <div className="flex gap-1.5">
            <span className="h-2 w-2/5 rounded-full bg-primary" />
            <span className="h-2 w-1/4 rounded-full bg-primary-highlight/60" />
            <span className="h-2 flex-1 rounded-full bg-border" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="scroll-mt-20 bg-background-secondary py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
          <Reveal className="order-2 lg:order-1">
            <PortraitPlaceholder />
          </Reveal>

          <Reveal delay={0.08} className="order-1 min-w-0 lg:order-2">
            <SectionHeading
              id="about-title"
              eyebrow={aboutContent.eyebrow}
              title={aboutContent.title}
            />

            <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                Ferramentas
              </p>
              <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {editingTools.map(({ name, Icon }) => (
                  <li
                    key={name}
                    className="flex min-h-16 items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary-light">
                      <Icon aria-hidden="true" className="size-4" strokeWidth={1.75} />
                    </span>
                    <span className="text-sm font-medium leading-5 text-text">
                      {name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              href="#contato"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="size-5" />}
              iconPosition="right"
              className="mt-8 w-full sm:w-auto"
            >
              Vamos conversar
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
