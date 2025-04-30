
import React from 'react';
import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import FeaturedAssets from '@/components/FeaturedAssets';
import Features from '@/components/Features';
import LogoCloud from '@/components/LogoCloud';
import CallToAction from '@/components/CallToAction';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LogoCloud />
        <CategorySection />
        <Features />
        <FeaturedAssets />
        <CallToAction />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
