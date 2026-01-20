
import React from 'react';
import { Vehicle } from '../types';

const SALE_VEHICLES: Vehicle[] = [
  { id: 's1', year: 2014, make: 'BMW', model: '328i', price: 6500, status: 'Available', image: 'https://picsum.photos/seed/bmw3/600/400', description: 'Clean title, minor cosmetic damage. Runs great.' },
  { id: 's2', year: 2016, make: 'Dodge', model: 'Challenger', price: 12000, status: 'Available', image: 'https://picsum.photos/seed/challenger/600/400', description: 'Rebuilt title. Performance mods installed.' },
  { id: 's3', year: 2010, make: 'Toyota', model: 'Tacoma', price: 8900, status: 'Available', image: 'https://picsum.photos/seed/tacoma/600/400', description: 'High mileage but dealer maintained. Work ready.' },
];

const CarsForSale: React.FC = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-black mb-4 italic uppercase">Rebuildables & <span className="text-sc-purple">Cars For Sale</span></h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">Affordable vehicles for projects or daily driving. All vehicles sold as-is.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SALE_VEHICLES.map((v) => (
            <div key={v.id} className="bg-white text-black rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <img src={v.image} alt={v.model} className="w-full h-56 object-cover" />
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black italic">{v.year} {v.make} {v.model}</h3>
                  <span className="text-2xl font-bold text-sc-purple">${v.price?.toLocaleString()}</span>
                </div>
                <p className="text-gray-600 mb-8">{v.description}</p>
                <div className="mt-auto">
                  <button className="w-full border-2 border-sc-purple text-sc-purple py-3 rounded-full font-bold uppercase hover:bg-sc-purple hover:text-white transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsForSale;
