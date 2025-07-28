import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DestinationsSection from '@/components/DestinationsSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <FeaturesSection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
