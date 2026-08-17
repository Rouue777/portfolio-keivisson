import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { brandName, contactChannels, navigationLinks } from "@/data/contact";

const socialLinks = [contactChannels.instagram].filter(
  (channel): channel is typeof channel & { href: string } => Boolean(channel.href),
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-10 sm:py-12">
      <Reveal>
        <Container>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
          <div className="max-w-md">
            <a href="#inicio" aria-label={`${brandName} — início`} className="inline-flex items-center gap-2.5 font-heading text-lg font-bold text-text transition-colors hover:text-primary-light">
              <span aria-hidden="true" className="flex size-9 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-primary-light">K</span>
              <span>{brandName}</span>
            </a>
            <p className="mt-3 text-sm leading-6 text-text-muted">
              Edição de vídeo para conteúdos que buscam clareza, ritmo e atenção.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-text-muted md:justify-end">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="transition-colors hover:text-text">{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border/70 pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {brandName}. Todos os direitos reservados.</p>
          {socialLinks.length > 0 ? (
            <ul className="flex flex-wrap gap-4">
              {socialLinks.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    aria-label={`${channel.label}: ${channel.value} (abre em nova aba)`}
                    className="transition-colors hover:text-text"
                  >
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        </Container>
      </Reveal>
    </footer>
  );
}
