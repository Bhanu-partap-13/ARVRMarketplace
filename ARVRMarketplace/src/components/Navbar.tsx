import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X, User } from 'lucide-react';

const categories = [
  {
    id: "ar-filters",
    name: "AR Filters",
  },
  {
    id: "retail-and-consumer",
    name: "Retail and Consumer",
  },
  {
    id: "tourism-and-hospitality",
    name: "Tourism & Hospitality",
  },
  {
    id: "automation",
    name: "Automation",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
  },
  {
    id: "professional-and-event-solutions",
    name: "Professional & Event Solutions",
  },
  {
    id: "e-commerce",
    name: "E-Commerce",
  },
  {
    id: "healthcare-and-medical",
    name: "Healthcare & Medical",
  },
  {
    id: "education-and-training",
    name: "Education & Training",
  },
  {
    id: "agriculture-and-farming",
    name: "Agriculture & Farming",
  },
  {
    id: "advertising-and-marketing",
    name: "Advertising & Marketing",
  },
  {
    id: "additional-solutions",
    name: "Additional Solutions",
  }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-arnexus-blue to-arnexus-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">RL</span>
                </div>
                <span className="text-xl font-bold text-arnexus-blue">Reality Loops</span>
              </div>
            </Link>
            
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              <Link to="/explore" className="text-gray-700 hover:text-arnexus-purple px-3 py-2 font-medium">Explore</Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-700 hover:text-arnexus-purple px-3 py-2 font-medium flex items-center">
                    Browse Categories <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.id} className="cursor-pointer">
                      <Link to={`/category/${category.id}`} className="w-full">
                        {category.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/marketplace" className="text-gray-700 hover:text-arnexus-purple px-3 py-2 font-medium">Marketplace</Link>
              <Link to="/designer" className="text-gray-700 hover:text-arnexus-purple px-3 py-2 font-medium">AR Designer</Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-arnexus-purple text-arnexus-purple" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button className="bg-arnexus-purple hover:bg-arnexus-purple/90 text-white" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-arnexus-purple"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-50">
          <div className="pt-2 pb-3 space-y-1 px-4">
            <Link 
              to="/explore" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-arnexus-purple hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Explore
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-arnexus-purple hover:bg-gray-50 rounded-md flex items-center justify-between">
                  Browse Categories
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.id} className="cursor-pointer">
                    <Link 
                      to={`/category/${category.id}`} 
                      className="w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              to="/marketplace" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-arnexus-purple hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Marketplace
            </Link>
            
            <Link 
              to="/designer" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-arnexus-purple hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              AR Designer
            </Link>
          </div>
          
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <User className="h-8 w-8 text-gray-400" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Guest User</div>
              </div>
            </div>
            
            <div className="mt-3 space-y-1 px-5">
              <Link 
                to="/login" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-arnexus-purple hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-arnexus-purple hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
