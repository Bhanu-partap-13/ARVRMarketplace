import React from "react";

export default function AgencyCard({ name, desc, img }) {
  return (
    <div className="bg-[#232837] rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-[#232837] hover:border-arnexus-purple transition-colors group">
      <div className="flex items-center justify-center pt-6">
        <img src={img || "/placeholder.svg"} alt={name} className="object-cover w-24 h-24 rounded-full border-4 border-arnexus-blue shadow-lg group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-1 text-white group-hover:text-arnexus-purple transition-colors">{name}</h3>
          <p className="text-sm text-gray-400 mb-2 min-h-[48px]">{desc}</p>
        </div>
        <button className="mt-2 bg-gradient-to-r from-arnexus-blue to-arnexus-purple text-white rounded-lg px-4 py-2 font-medium hover:opacity-90 transition-opacity">View Portfolio</button>
      </div>
    </div>
  );
} 