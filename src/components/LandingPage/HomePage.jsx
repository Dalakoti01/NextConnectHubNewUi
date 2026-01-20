import ClientLogos from "../ClientLogos";
import FAQ from "../FAQ";
import Hero from "../Hero/Hero";
import PricingCards from "../PricingCards";
import ProcessDiagram from "../ProcessDiagram";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Testimonials from "../Testimonials";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      <Header />

      <main>
        <Hero />
        <ClientLogos />
        <Testimonials />
        <ProcessDiagram />
        <PricingCards />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
