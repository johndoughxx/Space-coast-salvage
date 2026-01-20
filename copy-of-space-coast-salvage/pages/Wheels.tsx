
import React from 'react';
import { Wheel } from '../types';

const WHEELS: Wheel[] = [
  { id: 'w1', size: '20"', brand: 'OEM Ford Raptor', price: 800, image: 'https://picsum.photos/seed/wheel1/400/400' },
  { id: 'w2', size: '18"', brand: 'Vossen CV3 Style', price: 600, image: 'https://picsum.photos/seed/wheel2/400/400' },
  { id: 'w3', size: '17"', brand: 'Jeep Rubicon OEM', price: 500, image: 'https://picsum.photos/seed/wheel3/400/400' },
  { id: 'w4', size: '22"', brand: 'Fuel Assault', price: 1200, image: 'https://picsum.photos/seed/wheel4/400/400' },
];

const Wheels: React.FC = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-black uppercase mb-12 border-l-8 border-sc-purple pl-6">Wheels & Tires</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {WHEELS.map((w) => (
            <div key={w.id} className="bg-gray-900 rounded-lg overflow-hidden border border-white/5 hover:border-sc-purple transition-all">
              <img src={w.image} alt={w.brand} className="w-full aspect-square object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{w.brand}</h3>
                <p className="text-gray-400 text-sm mb-3">Size: {w.size} (Set of 4)</p>
                <p className="text-xl font-black text-sc-purple">${w.price}</p>
                <button className="mt-4 w-full bg-white text-black text-xs font-bold py-2 rounded hover:bg-sc-purple hover:text-white transition-colors uppercase">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wheels;
