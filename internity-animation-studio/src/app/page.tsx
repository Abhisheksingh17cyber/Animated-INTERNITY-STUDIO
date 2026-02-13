import {
  HeroSection,
  ServicesSection,
  PortfolioSection,
  AboutSection,
  ContactSection,
  Footer,
} from '@/sections';
import { BeeCatchingGame } from '@/components';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <BeeCatchingGame />
      <ContactSection />
      <Footer />
    </>
  );
}

