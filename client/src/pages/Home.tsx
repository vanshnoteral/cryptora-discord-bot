import { useState } from 'react';
import IntroScreen from '@/components/IntroScreen';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ModulesSection from '@/components/ModulesSection';
import FeaturesSection from '@/components/FeaturesSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleEnterSite = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <IntroScreen onEnter={handleEnterSite} />;
  }

  return (
    <div className="dark bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ModulesSection />
      <FeaturesSection />
      <TeamSection />
      <Footer />
    </div>
  );
}