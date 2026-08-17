import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { About } from "@/components/sections/about";
import { ContactCta } from "@/components/sections/contact-cta";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Portfolio } from "@/components/sections/portfolio";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-lg bg-primary px-4 py-3 font-semibold text-white shadow-lg transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo-principal" tabIndex={-1} className="scroll-mt-20">
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <ContactCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
