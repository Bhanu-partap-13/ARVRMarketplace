import React from "react";
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExploreShowcase from '@/components/ExploreShowcase';

export default function Explore() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ExploreShowcase />
      </main>
      <Footer />
    </div>
  );
} 