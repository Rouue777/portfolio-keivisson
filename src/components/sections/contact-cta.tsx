import { MessageCircle, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { contactChannels } from "@/data/contact";

export function ContactCta() {
  const whatsapp = contactChannels.whatsapp;

  return (
    <section aria-labelledby="contact-cta-title" className="py-24 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-2xl border border-primary/30 bg-card px-6 py-12 text-center shadow-xl shadow-primary/5 sm:px-10 sm:py-16 lg:px-16">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_48%)]" />
          <Video aria-hidden="true" className="absolute -right-6 -top-6 size-32 rotate-6 text-primary/5 sm:size-40" strokeWidth={1} />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-light">
              Vamos conversar
            </p>
            <h2 id="contact-cta-title" className="mt-3 font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
              Pronto para elevar o nível dos seus vídeos?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
              Conte sua ideia e descubra como uma edição mais dinâmica e profissional pode valorizar o seu conteúdo.
            </p>

            {whatsapp.href ? (
              <Button
                href={whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp (abre em nova aba)"
                size="lg"
                icon={<MessageCircle className="size-5" />}
                className="mt-8"
              >
                Falar no WhatsApp
              </Button>
            ) : (
              <div className="mt-8">
                <Button disabled size="lg" icon={<MessageCircle className="size-5" />} aria-describedby="contact-cta-status">
                  Contato em breve
                </Button>
                <p id="contact-cta-status" className="mt-3 text-sm text-text-muted">
                  O canal de WhatsApp ainda não foi configurado.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
