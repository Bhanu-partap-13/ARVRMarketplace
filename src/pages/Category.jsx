import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExploreShowcase from '@/components/ExploreShowcase';

export default function Category() {
  const { categoryId } = useParams();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-white mb-6 capitalize">Category: {categoryId?.replace(/-/g, ' ')}</h1>
        </div>
        <ExploreShowcase categoryId={categoryId} />
      </main>
      <Footer />
    </div>
  );
} 