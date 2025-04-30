import React from "react";

export default function ProductCard({ title, creator, price, img, description }) {
  return (
    <div className="bg-[#232837] rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-[#232837] hover:border-arnexus-purple transition-colors group">
      <div className="aspect-[4/3] bg-[#181C23] flex items-center justify-center overflow-hidden">
        <img src={img} alt={title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-arnexus-purple transition-colors">{title}</h3>
          {description && <p className="text-sm text-gray-400 mb-2">{description}</p>}
          <p className="text-sm text-gray-400 mb-2">by {creator}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-arnexus-blue text-base">₹{price}</span>
          <button className="text-gray-400 hover:text-arnexus-purple transition-colors">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
} 