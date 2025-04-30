
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-12 bg-arnexus-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest AR news, tutorials, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow" 
              required
            />
            <Button type="submit" className="bg-arnexus-purple hover:bg-arnexus-purple/90 text-white">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from ARNexus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
