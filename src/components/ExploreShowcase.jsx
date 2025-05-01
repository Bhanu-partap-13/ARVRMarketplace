import React, { useState } from "react";
import ProductCard from "./ProductCard";
import CreatorCard from "./CreatorCard";
import AgencyCard from "./AgencyCard";

// Online images for demo (Unsplash, Pexels, etc.)
const imgUrls = {
  "ar-filters": [
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1611162617474-5b4e831b1c0d?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400&q=80"
  ],
  "retail-and-consumer": [
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=400&q=80"
  ],
  "tourism-and-hospitality": [
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80"
  ],
  "automation": [
    "https://images.unsplash.com/photo-1581094794329-c8112f8f1f1a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112f8f1f1a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112f8f1f1a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112f8f1f1a?auto=format&fit=crop&w=400&q=80"
  ],
  "manufacturing": [
    "https://images.unsplash.com/photo-1581094794329-c8112f8f1f1a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112f8f1f1a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112f8f1f1a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112f8f1f1a?auto=format&fit=crop&w=400&q=80"
  ],
  "professional-and-event-solutions": [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80"
  ],
  "e-commerce": [
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=400&q=80"
  ],
  "healthcare-and-medical": [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80"
  ],
  "education-and-training": [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80"
  ],
  "agriculture-and-farming": [
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=400&q=80"
  ],
  "advertising-and-marketing": [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80"
  ],
  "additional-solutions": [
    "https://images.unsplash.com/photo-1581094794329-c8112f8f1f1a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112f8f1f1a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112f8f1f1a?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112f8f1f1a?auto=format&fit=crop&w=400&q=80"
  ]
};

// Helper function to get next image for a category
const getNextImg = (category) => {
  if (!imgIdx[category]) imgIdx[category] = 0;
  const img = imgUrls[category][imgIdx[category]];
  imgIdx[category] = (imgIdx[category] + 1) % imgUrls[category].length;
  return img;
};

// Initialize image index counter
const imgIdx = {};

// Category-specific mock data with online images
const productsByCategory = {
  "ar-filters": [
    { title: "Face Morph Filter", creator: "Priya Sharma", price: 19.99, img: getNextImg("ar-filters"), description: "Fun morphing face effects for Instagram/Snapchat." },
    { title: "Virtual Makeup Try-On", creator: "Kevin Brooks", price: 24.99, img: getNextImg("ar-filters"), description: "Realistic virtual makeup experience." },
    { title: "Fantasy Animal Mask", creator: "Lina Chen", price: 29.99, img: getNextImg("ar-filters"), description: "Transform faces into fantasy creatures." },
    { title: "Mood Color Filters", creator: "Omar Al-Khatib", price: 14.99, img: getNextImg("ar-filters"), description: "AR filters that change colors based on facial expressions." },
  ],
  "retail-and-consumer": [
    { title: "Virtual Try-On Glasses App", creator: "Alex Morgan", price: 49.99, img: getNextImg("retail-and-consumer"), description: "Try on glasses virtually in real time." },
    { title: "AR Shopping Catalog", creator: "Sophie Patel", price: 39.99, img: getNextImg("retail-and-consumer"), description: "Browse and interact with products in AR." },
    { title: "Smart Mirror for Clothing", creator: "Daniel Cho", price: 59.99, img: getNextImg("retail-and-consumer"), description: "See how clothes fit using AR mirrors." },
    { title: "Interactive Product Packaging", creator: "Maria Lopez", price: 29.99, img: getNextImg("retail-and-consumer"), description: "Engage with packaging through AR experiences." },
  ],
  "tourism-and-hospitality": [
    { title: "Virtual City Tour Experience", creator: "Rohan Mehta", price: 34.99, img: getNextImg("tourism-and-hospitality"), description: "Explore cities virtually with AR guidance." },
    { title: "Interactive Hotel Room Preview", creator: "Isabella Ruiz", price: 29.99, img: getNextImg("tourism-and-hospitality"), description: "Preview hotel rooms in AR before booking." },
    { title: "Museum AR Guide", creator: "Liam O'Connor", price: 24.99, img: getNextImg("tourism-and-hospitality"), description: "Interactive museum tours with AR overlays." },
    { title: "Historical Landmark Time-Travel Filter", creator: "Chloe Tan", price: 44.99, img: getNextImg("tourism-and-hospitality"), description: "See landmarks through history with AR." },
  ],
  "automation": [
    { title: "Smart Warehouse Navigation System", creator: "Ryan Kapoor", price: 59.99, img: getNextImg("automation"), description: "AR navigation for warehouses." },
    { title: "AR Machine Repair Assistant", creator: "Anika Schultz", price: 49.99, img: getNextImg("automation"), description: "Step-by-step AR repair instructions." },
    { title: "Remote AR Monitoring System", creator: "David Lee", price: 69.99, img: getNextImg("automation"), description: "Monitor automation remotely with AR." },
    { title: "Robotic Arm Simulation Trainer", creator: "Fatima Zahra", price: 39.99, img: getNextImg("automation"), description: "Train with AR robotic arm simulations." },
  ],
  "manufacturing": [
    { title: "AR Assembly Instructions", creator: "Carlos Rivera", price: 34.99, img: getNextImg("manufacturing"), description: "Step-by-step AR assembly guides." },
    { title: "Quality Check AR Overlay", creator: "Meena Singh", price: 29.99, img: getNextImg("manufacturing"), description: "AR overlays for quality checks." },
    { title: "3D Product Prototyping Viewer", creator: "Ethan Walker", price: 44.99, img: getNextImg("manufacturing"), description: "View prototypes in 3D AR." },
    { title: "Factory Safety Training AR", creator: "Natasha Brown", price: 39.99, img: getNextImg("manufacturing"), description: "AR safety training for workers." },
  ],
  "professional-and-event-solutions": [
    { title: "Virtual Trade Show Booth", creator: "Julia Hart", price: 49.99, img: getNextImg("professional-and-event-solutions"), description: "Host virtual booths at trade shows." },
    { title: "AR Business Card", creator: "Ahmed Khan", price: 24.99, img: getNextImg("professional-and-event-solutions"), description: "Share business cards with AR." },
    { title: "Remote Team Collaboration AR", creator: "Sophia Williams", price: 34.99, img: getNextImg("professional-and-event-solutions"), description: "Collaborate remotely in AR." },
    { title: "AR Event Navigation System", creator: "Mark Evans", price: 44.99, img: getNextImg("professional-and-event-solutions"), description: "Navigate events with AR maps." },
  ],
  "e-commerce": [
    { title: "AR Virtual Showroom", creator: "Samuel Adams", price: 59.99, img: getNextImg("e-commerce"), description: "Showroom for products in AR." },
    { title: "Product 3D Visualization Tool", creator: "Emily Nair", price: 39.99, img: getNextImg("e-commerce"), description: "Visualize products in 3D AR." },
    { title: "Try Before You Buy AR", creator: "Hiro Tanaka", price: 49.99, img: getNextImg("e-commerce"), description: "Try products virtually before buying." },
    { title: "Virtual Fitting Room", creator: "Isabella Gomez", price: 44.99, img: getNextImg("e-commerce"), description: "Try on clothes virtually in AR." },
  ],
  "healthcare-and-medical": [
    { title: "Surgical AR Assistant", creator: "Dr. Anita Bose", price: 99.99, img: getNextImg("healthcare-and-medical"), description: "AR assistant for surgeries." },
    { title: "Anatomy Learning AR App", creator: "Jason Lee", price: 49.99, img: getNextImg("healthcare-and-medical"), description: "Learn anatomy with AR." },
    { title: "Patient Rehabilitation AR", creator: "Maria Petrova", price: 59.99, img: getNextImg("healthcare-and-medical"), description: "Rehabilitation exercises in AR." },
    { title: "Medical Equipment Training AR", creator: "Omar Hasan", price: 39.99, img: getNextImg("healthcare-and-medical"), description: "Train on medical equipment in AR." },
  ],
  "education-and-training": [
    { title: "Interactive Science Lab AR", creator: "Rahul Das", price: 34.99, img: getNextImg("education-and-training"), description: "Science labs in AR for students." },
    { title: "Virtual History Classroom", creator: "Emily Smith", price: 29.99, img: getNextImg("education-and-training"), description: "History lessons in AR." },
    { title: "Mathematics AR Puzzle Game", creator: "Isabella Zhou", price: 24.99, img: getNextImg("education-and-training"), description: "Math puzzles in AR." },
    { title: "Skill Training Simulator", creator: "Ahmed El-Tayeb", price: 39.99, img: getNextImg("education-and-training"), description: "Vocational skill training in AR." },
  ],
  "agriculture-and-farming": [
    { title: "Crop Growth Monitoring AR App", creator: "John Farmer", price: 39.99, img: getNextImg("agriculture-and-farming"), description: "Monitor crop growth with AR." },
    { title: "Farm Equipment Maintenance Guide", creator: "Priyanka Verma", price: 29.99, img: getNextImg("agriculture-and-farming"), description: "Maintain farm equipment with AR." },
    { title: "Smart Irrigation System AR", creator: "Ethan Brooks", price: 49.99, img: getNextImg("agriculture-and-farming"), description: "Smart irrigation with AR." },
    { title: "Livestock Health AR Scanner", creator: "Ayesha Siddiqui", price: 34.99, img: getNextImg("agriculture-and-farming"), description: "Scan livestock health in AR." },
  ],
  "advertising-and-marketing": [
    { title: "Interactive AR Billboard", creator: "Lucas Carter", price: 44.99, img: getNextImg("advertising-and-marketing"), description: "Billboards with interactive AR." },
    { title: "Social Media AR Campaigns", creator: "Mia Fernandez", price: 29.99, img: getNextImg("advertising-and-marketing"), description: "Run AR campaigns on social media." },
    { title: "Product Launch AR Experience", creator: "Ryan Zhang", price: 59.99, img: getNextImg("advertising-and-marketing"), description: "Launch products with AR experiences." },
    { title: "Gamified Brand Engagement Filter", creator: "Sofia Costa", price: 34.99, img: getNextImg("advertising-and-marketing"), description: "Engage users with AR filters." },
  ],
  "additional-solutions": [
    { title: "Custom AR App Development", creator: "Ravi Krishnan", price: 99.99, img: getNextImg("additional-solutions"), description: "Custom AR app development services." },
    { title: "Cross-Platform AR Integration Tool", creator: "Elena Kostas", price: 79.99, img: getNextImg("additional-solutions"), description: "Integrate AR across platforms." },
    { title: "Enterprise AR Dashboard", creator: "Antonio Ruiz", price: 89.99, img: getNextImg("additional-solutions"), description: "Enterprise dashboard for AR analytics." },
    { title: "IoT-Enabled AR System", creator: "Nisha Kapoor", price: 109.99, img: getNextImg("additional-solutions"), description: "IoT and AR integration system." },
  ],
};

// Repeat for creators and agencies
const creatorsByCategory = Object.fromEntries(
  Object.entries(productsByCategory).map(([cat, arr]) => [
    cat,
    arr.map((p, i) => ({
      name: p.creator || `Creator ${i + 1}`,
      desc: `Bio for ${p.creator || `Creator ${i + 1}`}`,
      img: getNextImg(cat),
    })),
  ])
);
const agenciesByCategory = Object.fromEntries(
  Object.entries(productsByCategory).map(([cat, arr]) => [
    cat,
    arr.map((p, i) => ({
      name: `Agency ${i + 1}`,
      desc: `Agency for ${cat.replace(/-/g, ' ')}`,
      img: getNextImg(cat),
    })),
  ])
);

const TABS = [
  { key: "products", label: "Products" },
  { key: "creators", label: "Creators" },
  { key: "agencies", label: "Agencies/Companies" },
];

export default function ExploreShowcase({ categoryId }) {
  const [activeTab, setActiveTab] = useState("products");

  // Get data for the selected category, or empty array if not found
  const products = categoryId ? (productsByCategory[categoryId] || []) : [];
  const creators = categoryId ? (creatorsByCategory[categoryId] || []) : [];
  const agencies = categoryId ? (agenciesByCategory[categoryId] || []) : [];

  return (
    <section className="py-12 bg-[#181C23] min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Title */}
        <h2 className="text-3xl font-bold mb-8 text-black">Category: {categoryId.replace(/-/g, ' ')}</h2>
        
        {/* Tab buttons are always visible */}
        <div className="flex justify-center gap-4 mb-8 sticky top-0 z-10 bg-[#181C23] bg-opacity-95 py-4" style={{backdropFilter: 'blur(2px)'}}>
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 focus:outline-none text-black text-lg bg-white ${
                activeTab === tab.key
                  ? "shadow-lg"
                  : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="relative min-h-[400px]">
          <div
            key={activeTab}
            className="transition-all duration-500 ease-in-out animate-fadein"
          >
            {activeTab === "products" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((p, i) => (
                  <ProductCard key={i} {...p} />
                ))}
                {products.length === 0 && (
                  <div className="col-span-full text-center text-gray-400 py-12">No products found for this category.</div>
                )}
              </div>
            )}
            {activeTab === "creators" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {creators.map((c, i) => (
                  <CreatorCard key={i} {...c} />
                ))}
                {creators.length === 0 && (
                  <div className="col-span-full text-center text-gray-400 py-12">No creators found for this category.</div>
                )}
              </div>
            )}
            {activeTab === "agencies" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {agencies.map((a, i) => (
                  <AgencyCard key={i} {...a} />
                ))}
                {agencies.length === 0 && (
                  <div className="col-span-full text-center text-gray-400 py-12">No agencies found for this category.</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Add this to your global CSS or Tailwind config:
// @keyframes fadein { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }
// .animate-fadein { animation: fadein 0.5s; } 