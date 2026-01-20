
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl font-black mb-8 leading-tight italic">30 Years of <span className="text-sc-purple">Quality Salvage</span></h1>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Space Coast Salvage was founded with a simple mission: to provide Brevard County with a reliable, honest source for recycled auto parts and professional vehicle disposal. 
            </p>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Our 10-acre yard in Rockledge houses thousands of vehicles, ranging from late-model luxury cars to vintage trucks. Every vehicle we process is drained of fluids and hazardous materials in accordance with strict environmental standards.
            </p>
            <div className="flex space-x-8 mt-10">
              <div>
                <span className="block text-4xl font-black text-sc-purple">15k+</span>
                <span className="text-sm uppercase text-gray-500 font-bold">Parts in stock</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-sc-purple">1995</span>
                <span className="text-sm uppercase text-gray-500 font-bold">Established</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-sc-purple">5 Star</span>
                <span className="text-sm uppercase text-gray-500 font-bold">Rating</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-sc-purple/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000" 
              className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" 
              alt="Salvage Yard" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
