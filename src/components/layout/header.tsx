"use client";

import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { contactChannels, navigationLinks } from "@/data/contact";
import { cn } from "@/lib/utils";

function MenuIcon({ open }: { open: boolean }) {
  return open ? (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

type NavigationLinksProps = {
  activeSection: string;
  mobile?: boolean;
  onNavigate?: () => void;
};

function NavigationLinks({
  activeSection,
  mobile = false,
  onNavigate,
}: NavigationLinksProps) {
  return (
    <ul className={cn("flex", mobile ? "flex-col gap-1" : "items-center gap-1")}>
      {navigationLinks.map(({ label, href, id }) => {
        const isActive = activeSection === id;

        return (
          <li key={id}>
            <a
              href={href}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light",
                isActive ? "text-primary-light" : "text-text-muted",
                mobile && "py-3 text-base",
              )}
              onClick={onNavigate}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 16);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: "-30% 0px -60%", threshold: 0 },
    );

    navigationLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMobileLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const menuButton = menuButtonRef.current;
      const menu = mobileMenuRef.current;
      if (!menuButton || !menu) return;

      const menuItems = Array.from(
        menu.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])",
        ),
      );
      const firstItem = menuItems[0];
      const lastItem = menuItems[menuItems.length - 1];

      if (!firstItem || !lastItem) return;

      if (event.shiftKey && document.activeElement === menuButton) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === menuButton) {
        event.preventDefault();
        firstItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        menuButton.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        (isScrolled || isMenuOpen) &&
          "border-border/80 bg-background/95 shadow-lg shadow-black/10 backdrop-blur-md",
      )}
    >
      <Container className="flex min-h-18 items-center justify-between gap-3 sm:gap-6">
        <a
          href="#inicio"
          aria-label="Keivisson Borges — início"
          className="flex min-w-0 items-center gap-2.5 font-heading font-bold tracking-tight text-text transition-colors hover:text-primary-light"
          onClick={closeMenu}
        >
          <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 text-lg text-primary-light">
            K
          </span>
          <span className="whitespace-nowrap text-sm sm:text-lg">Keivisson Borges</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <NavigationLinks activeSection={activeSection} />
        </nav>

        <Button
          href={contactChannels.whatsapp.href ?? "#contato"}
          target={contactChannels.whatsapp.external ? "_blank" : undefined}
          rel={contactChannels.whatsapp.external ? "noopener noreferrer" : undefined}
          aria-label="Falar no WhatsApp (abre em nova aba)"
          size="sm"
          className="hidden lg:inline-flex"
        >
          Falar no WhatsApp
        </Button>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-text transition-colors hover:border-primary-highlight hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light lg:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <MenuIcon open={isMenuOpen} />
        </button>
      </Container>

      {isMenuOpen ? (
        <div ref={mobileMenuRef} id="mobile-navigation" className="border-t border-border bg-background lg:hidden">
          <Container className="py-4">
            <nav aria-label="Navegação mobile">
              <div ref={(node) => { firstMobileLinkRef.current = node?.querySelector("a") ?? null; }}>
                <NavigationLinks activeSection={activeSection} mobile onNavigate={closeMenu} />
              </div>
            </nav>
            <Button
              href={contactChannels.whatsapp.href ?? "#contato"}
              target={contactChannels.whatsapp.external ? "_blank" : undefined}
              rel={contactChannels.whatsapp.external ? "noopener noreferrer" : undefined}
              aria-label="Falar no WhatsApp (abre em nova aba)"
              className="mt-4 w-full"
              onClick={closeMenu}
            >
              Falar no WhatsApp
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
