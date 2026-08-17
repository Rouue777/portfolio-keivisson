import { ArrowDown, Clapperboard, MessageCircle, MonitorPlay } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { contactChannels } from "@/data/contact";

const editingTools = [
  "Adobe Premiere Pro",
  "DaVinci Resolve",
  "CapCut",
] as const;

function EditorPlaceholder() {
  return (
    // Composição provisória: substituir por imagem ou vídeo real em uma etapa futura.
    <div
      aria-hidden="true"
      className="relative mx-auto w-full max-w-xl lg:ml-auto"
    >
      <div className="absolute inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" />

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-text-muted/30" />
            <span className="size-2.5 rounded-full bg-text-muted/30" />
            <span className="size-2.5 rounded-full bg-primary" />
          </div>
          <span className="h-1.5 w-20 rounded-full bg-border" />
        </div>

        <div className="p-3 sm:p-5">
          <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-background-secondary">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.22),transparent_45%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-14 items-center justify-center rounded-full border border-primary-light/40 bg-primary/15 text-primary-light">
                <MonitorPlay className="size-6" />
              </span>
            </div>
            <span className="absolute bottom-3 left-3 h-1.5 w-24 rounded-full bg-text/25" />
            <span className="absolute bottom-3 right-3 rounded bg-background/70 px-2 py-1 text-[10px] text-text-muted">
              00:24:16
            </span>
          </div>

          <div className="mt-4 rounded-lg border border-border bg-background p-3">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="size-2 rounded-full bg-primary-light" />
                <span className="h-2 w-12 rounded-full bg-border" />
              </div>
              <span className="h-2 w-16 rounded-full bg-border" />
            </div>

            <div className="relative space-y-2 border-l border-primary-light/60 pl-2">
              <div className="flex gap-1.5">
                <span className="h-5 w-2/5 rounded bg-primary" />
                <span className="h-5 w-1/4 rounded bg-primary-highlight/70" />
                <span className="h-5 flex-1 rounded bg-primary/40" />
              </div>
              <div className="flex gap-1.5">
                <span className="h-4 w-1/5 rounded bg-primary-light/30" />
                <span className="h-4 w-1/2 rounded bg-primary-highlight/40" />
              </div>
              <div className="flex gap-1.5">
                <span className="h-3 w-1/3 rounded bg-text-muted/20" />
                <span className="h-3 flex-1 rounded bg-text-muted/15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="scroll-mt-20 overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:flex lg:min-h-screen lg:items-center lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-20">
          <div className="min-w-0">
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary-light">
                <Clapperboard aria-hidden="true" className="size-4" />
                Editor de vídeo
              </p>
            </Reveal>

            <Reveal delay={0.04}>
              <h1
                id="hero-title"
                className="max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                Transformo ideias em vídeos que{" "}
                <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                  prendem atenção.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="mt-6 max-w-2xl text-base leading-7 text-text-muted sm:text-lg sm:leading-8">
                Edição estratégica para YouTube, podcasts e redes sociais, unindo
                ritmo, clareza e criatividade para transformar conteúdos em
                experiências envolventes.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="#portfolio"
                size="lg"
                icon={<ArrowDown className="size-5" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Ver portfólio
              </Button>
              <Button
                href={contactChannels.whatsapp.href ?? "#contato"}
                target={contactChannels.whatsapp.external ? "_blank" : undefined}
                rel={contactChannels.whatsapp.external ? "noopener noreferrer" : undefined}
                aria-label="Falar no WhatsApp (abre em nova aba)"
                variant="secondary"
                size="lg"
                icon={<MessageCircle className="size-5" />}
                className="w-full sm:w-auto"
              >
                Falar no WhatsApp
              </Button>
            </Reveal>

            <Reveal delay={0.16} className="mt-10 border-t border-border/70 pt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                Ferramentas utilizadas
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted">
                {editingTools.map((tool) => (
                  <li key={tool} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-primary-light" />
                    {tool}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <EditorPlaceholder />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
