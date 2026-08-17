import { AtSign, Mail, MessageCircle, type LucideIcon } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { contactChannels, type ContactChannel } from "@/data/contact";

const channels: Array<ContactChannel & { Icon: LucideIcon }> = [
  { ...contactChannels.whatsapp, Icon: MessageCircle },
  { ...contactChannels.email, Icon: Mail },
  { ...contactChannels.instagram, Icon: AtSign },
];

function ContactContent({ channel }: { channel: ContactChannel & { Icon: LucideIcon } }) {
  const { Icon, label, value } = channel;

  return (
    <>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary-light">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <span className="min-w-0">
        <span className="block font-heading text-base font-semibold text-text">{label}</span>
        <span className="mt-1 block break-words text-sm text-text-muted">{value ?? "Em breve"}</span>
      </span>
    </>
  );
}

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contact-title" className="scroll-mt-20 bg-background-secondary py-24 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow="Contato"
            title="Vamos transformar sua ideia em vídeo"
            description="Escolha o canal que preferir para iniciar uma conversa sobre seu próximo conteúdo."
          />
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {channels.map((channel, index) => (
            <li key={channel.label}>
              <Reveal delay={index * 0.05}>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    aria-label={channel.external ? `${channel.label}: ${channel.value} (abre em nova aba)` : undefined}
                    className="flex min-h-24 items-center gap-4 rounded-xl border border-border bg-card p-5 transition-[border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light motion-reduce:transform-none"
                  >
                    <ContactContent channel={channel} />
                  </a>
                ) : (
                  <div className="flex min-h-24 items-center gap-4 rounded-xl border border-border bg-card p-5" aria-label={`${channel.label}: em breve`}>
                    <ContactContent channel={channel} />
                  </div>
                )}
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
