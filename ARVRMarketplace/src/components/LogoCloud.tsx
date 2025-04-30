
import React from 'react';

const LogoCloud = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-8 uppercase tracking-wider">
          Reality Loops - Trusted by innovative companies worldwide
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="col-span-1 flex justify-center items-center">
              <div className="h-12 w-full bg-gray-200 rounded-md opacity-60 flex items-center justify-center">
                <span className="text-gray-500 font-medium">LOGO {i}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
