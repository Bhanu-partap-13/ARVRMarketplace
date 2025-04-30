
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "No-Code AR Designer",
    description: "Create professional AR experiences without any coding knowledge through our intuitive drag-and-drop interface.",
    icon: "🎨"
  },
  {
    title: "Marketplace Integration",
    description: "Find and purchase high-quality 3D models, filters, and complete AR solutions from verified creators.",
    icon: "🛒"
  },
  {
    title: "Powerful API Access",
    description: "Integrate AR experiences directly into your website or app with our simple and well-documented API.",
    icon: "🔌"
  },
  {
    title: "Enterprise Solutions",
    description: "Custom AR solutions for businesses of all sizes with specialized support and premium features.",
    icon: "🏢"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful AR Platform Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, deploy, and monetize augmented reality experiences in one unified platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-arnexus-blue/10 to-arnexus-purple/10 mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-arnexus-blue">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
