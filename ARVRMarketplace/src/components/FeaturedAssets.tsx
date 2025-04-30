import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const assets = [
  {
    id: 1,
    title: "Virtual Try-On Solution",
    category: "Retail",
    thumbnail: "/placeholder.svg",
    creator: "ARDesign Studios",
    price: 249,
    popular: true
  },
  {
    id: 2,
    title: "Interactive Product Showcase",
    category: "E-Commerce",
    thumbnail: "/placeholder.svg",
    creator: "WebAR Creations",
    price: 199,
    popular: false
  },
  {
    id: 3,
    title: "Restaurant Menu Visualizer",
    category: "Hospitality",
    thumbnail: "/placeholder.svg",
    creator: "FoodAR Inc.",
    price: 149,
    popular: true
  },
  {
    id: 4,
    title: "Educational Biology Model Pack",
    category: "Education",
    thumbnail: "/placeholder.svg",
    creator: "EduAR Solutions",
    price: 299,
    free: true,
    popular: false
  },
  {
    id: 5,
    title: "Industrial Machine Manual",
    category: "Manufacturing",
    thumbnail: "/placeholder.svg",
    creator: "TechViz AR",
    price: 499,
    popular: false
  },
  {
    id: 6,
    title: "Face Filter Collection",
    category: "AR Filters",
    thumbnail: "/placeholder.svg",
    creator: "FilterCraft",
    price: 99,
    popular: true
  }
];

const FeaturedAssets = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold">Featured AR Assets</h2>
            <p className="text-gray-600 mt-2">Discover popular and trending augmented reality experiences</p>
          </div>
          <Link to="/marketplace" className="text-arnexus-purple hover:text-arnexus-blue font-medium">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset) => (
            <Link to={`/asset/${asset.id}`} key={asset.id}>
              <Card className="h-full overflow-hidden ar-card-hover group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={asset.thumbnail} 
                    alt={asset.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  {asset.popular && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-arnexus-purple">Popular</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <Badge variant="outline" className="text-xs bg-gray-100 text-gray-800 hover:bg-gray-100">
                      {asset.category}
                    </Badge>
                    <span className="font-bold text-arnexus-blue">
                      {asset.free ? "Free" : `₹${asset.price}`}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-arnexus-purple transition-colors">
                    {asset.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    by {asset.creator}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAssets;
