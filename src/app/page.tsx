import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PressLogos from "@/components/PressLogos";
import Features from "@/components/Features";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import FinancingSection from "@/components/FinancingSection";
import CTASection from "@/components/CTASection";
import PlatformFeatures from "@/components/PlatformFeatures";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PressLogos />
      <Features />
      <ProjectsShowcase />
      <FinancingSection />
      <CTASection />
      <PlatformFeatures />
      <PartnersSection />
      <Footer />
    </main>
  );
}
