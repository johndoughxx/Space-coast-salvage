
import React from 'react';
import { Vehicle } from '../types';

const MOCK_INVENTORY: Vehicle[] = [
  { id: '1', year: 2018, make: 'Ford', model: 'F-150', status: 'Available', image: 'https://picsum.photos/seed/f150/600/400', description: 'Front end damage, engine good.' },
  { id: '2', year: 2015, make: 'Honda', model: 'Civic', status: 'Dismantled', image: 'https://picsum.photos/seed/civic/600/400', description: 'Rear impact, most interior parts available.' },
  { id: '3', year: 2020, make: 'Toyota', model: 'Camry', status: 'Available', image: 'https://picsum.photos/seed/camry/600/400', description: 'Water damage, parts only.' },
  { id: '4', year: 2012, make: 'Chevrolet', model: 'Silverado', status: 'Available', image: 'https://picsum.photos/seed/silverado/600/400', description: 'Transmission issues, body panels excellent.' },
  { id: '5', year: 2017, make: 'Nissan', model: 'Altima', status: 'Sold', image: 'https://picsum.photos/seed/altima/600/400', description: 'Side impact, doors damaged.' },
  { id: '6', year: 2019, make: 'Jeep', model: 'Wrangler', status: 'Available', image: 'https://picsum.photos/seed/wrangler/600/400', description: 'Rollover, suspension components intact.' },
];

const Inventory: React.FC = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-5xl font-black italic uppercase text-sc-purple mb-4">Vehicle Inventory</h1>
          <p className="text-gray-400 text-xl">Browse our current yard arrivals for parts and restoration.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_INVENTORY.map((v) => (
            <div key={v.id} className="bg-gray-900 border border-white/10 rounded-xl overflow-hidden group hover:border-sc-purple transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={v.image} 
                  alt={`${v.year} ${v.make} ${v.model}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase ${
                  v.status === 'Available' ? 'bg-green-600' : v.status === 'Sold' ? 'bg-red-600' : 'bg-gray-600'
                }`}>
                  {v.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{v.year} {v.make} {v.model}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{v.description}</p>
                <button className="w-full bg-sc-purple py-3 rounded-lg font-bold uppercase text-sm hover:bg-white hover:text-black transition-colors">
                  Inquire Parts
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
