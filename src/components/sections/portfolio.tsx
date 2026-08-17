import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { portfolioVideos } from "@/data/portfolio";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="scroll-mt-20 bg-background-secondary py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="portfolio-title"
            eyebrow="Portfólio"
            title="Trabalhos recentes"
            description="Uma seleção de projetos editados para YouTube, com foco em ritmo, clareza e retenção."
          />
        </Reveal>
        <PortfolioGallery videos={portfolioVideos} />
      </Container>
    </section>
  );
}
