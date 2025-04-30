
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-r from-arnexus-blue/90 to-arnexus-purple/70 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Create, Discover, and Deploy WebAR Experiences
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              The ultimate marketplace for augmented reality assets, creators, and solutions. Build immersive experiences without coding.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-arnexus-cyan hover:bg-arnexus-cyan/90 text-arnexus-blue font-bold" asChild>
                <Link to="/explore">Explore Platform</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-arnexus-cyan hover:bg-white/20" asChild>
                <Link to="/designer">No Code Designing Tools</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative">
              <div className="w-64 h-64 absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 bg-arnexus-cyan/30 rounded-full blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl animate-float">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="aspect-square bg-gradient-to-br from-white/5 to-white/10 rounded-lg flex items-center justify-center p-4">
                      <div className="w-full h-full bg-gradient-to-br from-arnexus-cyan to-arnexus-purple rounded-md animate-glow"></div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-2 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="h-2 w-1/2 bg-white/30 rounded-full"></div>
                  <div className="mt-2 h-2 w-3/4 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
