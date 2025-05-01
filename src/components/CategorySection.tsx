import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  {
    id: "ar-filters",
    name: "AR Filters",
    description: "Face filters and effects for social media and marketing",
    icon: "🎭",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "retail-and-consumer",
    name: "Retail and Consumer",
    description: "Virtual try-on and product visualization experiences",
    icon: "🛍️",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "tourism-and-hospitality",
    name: "Tourism & Hospitality",
    description: "Interactive guides and immersive location experiences",
    icon: "🗺️",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "automation",
    name: "Automation",
    description: "Process visualization and instruction overlay solutions",
    icon: "⚙️",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Assembly guidance and maintenance support tools",
    icon: "🏭",
    color: "from-red-500 to-rose-500",
  },
  {
    id: "professional-and-event-solutions",
    name: "Professional & Event Solutions",
    description: "Interactive displays and engagement solutions",
    icon: "🎪",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    id: "e-commerce",
    name: "E-Commerce",
    description: "Virtual showrooms and product visualization",
    icon: "🛒",
    color: "from-yellow-500 to-amber-500",
  },
  {
    id: "healthcare-and-medical",
    name: "Healthcare & Medical",
    description: "Medical training and visualization tools",
    icon: "🏥",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "education-and-training",
    name: "Education & Training",
    description: "Interactive learning and training experiences",
    icon: "📚",
    color: "from-green-500 to-teal-500",
  },
  {
    id: "agriculture-and-farming",
    name: "Agriculture & Farming",
    description: "Crop monitoring and equipment maintenance",
    icon: "🌾",
    color: "from-yellow-500 to-green-500",
  },
  {
    id: "advertising-and-marketing",
    name: "Advertising & Marketing",
    description: "Interactive campaigns and brand experiences",
    icon: "📢",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "additional-solutions",
    name: "Additional Solutions",
    description: "Custom AR solutions for unique needs",
    icon: "✨",
    color: "from-purple-500 to-pink-500",
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">Explore AR Categories</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Discover AR solutions for every industry. From face filters to industrial applications, find the perfect augmented reality assets for your needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <Card className="h-full ar-card-hover group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-arnexus-purple transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-arnexus-purple font-medium">
                    View Solutions
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center text-arnexus-purple hover:text-arnexus-blue font-medium">
                View All Categories
                <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mx-auto">
              <DropdownMenuItem asChild>
                <Link to="/category/e-commerce">E-Commerce</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/category/healthcare-&-medical">Healthcare & Medical</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/category/education-&-training">Education & Training</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/category/agriculture-&-farming">Agriculture & Farming</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/category/advertising-&-marketing">Advertising & Marketing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/category/additional-solutions">Additional Solutions</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
