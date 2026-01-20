
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* The requested Black and White landscape background */}
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ 
            backgroundImage: `url('https://static.wixstatic.com/media/893c83_70206103099942a98f480927806b7ba9~mv2.jpg/v1/fill/w_1899,h_818,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/893c83_70206103099942a98f480927806b7ba9~mv2.jpg')`,
          }}
        >
          {/* Dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block px-4 py-1 border border-sc-purple text-sc-purple text-xs font-black uppercase tracking-[0.3em] mb-6 rounded">
            Established 1995 • Rockledge, FL
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none">
            SPACE <span className="text-sc-purple italic">COAST</span><br/>SALVAGE
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium leading-tight">
            Premium Auto Parts & Professional Vehicle Recycling.<br/>
            <span className="text-sm uppercase tracking-widest text-gray-400">Located at 6500 Korbin Ave</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/inventory"
              className="w-full sm:w-auto bg-sc-purple text-white hover:bg-white hover:text-black px-10 py-4 rounded-sm font-black uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 inline-block"
            >
              Search Inventory
            </Link>
            <Link 
              to="/contact"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-10 py-4 rounded-sm font-black uppercase tracking-widest transition-all duration-300 inline-block"
            >
              Sell Your Car
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Highlight Section */}
      <section className="bg-white text-black py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black text-sc-purple">10+ ACRES</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Of Inventory</div>
          </div>
          <div>
            <div className="text-3xl font-black text-sc-purple">30 YEARS</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500">In Business</div>
          </div>
          <div>
            <div className="text-3xl font-black text-sc-purple">TOP $ PAID</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500">For Junk Cars</div>
          </div>
          <div>
            <div className="text-3xl font-black text-sc-purple">FREE PICKUP</div>
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500">In Brevard County</div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-24 purple-gradient">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase italic">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-8 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg">
              <div className="text-5xl mb-6 text-sc-purple">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Pre-pulled Parts</h3>
              <p className="text-gray-300 leading-relaxed">
                Looking for a specific component? Our team pulls high-demand parts daily, testing and cleaning them so they are ready for immediate install.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg">
              <div className="text-5xl mb-6 text-sc-purple">
                <i className="fas fa-car-crash"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">U-Pull Inventory</h3>
              <p className="text-gray-300 leading-relaxed">
                Bring your own tools and save big. Browse our massive yard organized by make and model to find exactly what you need at the lowest prices.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <Link 
              to="/inventory"
              className="bg-white text-black px-8 py-4 rounded-sm font-black uppercase text-sm hover:bg-sc-purple hover:text-white transition-all tracking-widest"
            >
              Browse The Yard
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8 uppercase italic">Brevard's Leading Salvage Yard</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Space Coast Salvage is dedicated to providing exceptional services for junk vehicles including efficient removal, 
            environmentally friendly disposal, and fair deals. Our specialization ranges from salvaging usable parts to 
            recycling metal and other materials. What sets us apart is our commitment to eco-friendly practices and fair transactions.
          </p>
          <div className="flex justify-center space-x-6">
            <i className="fab fa-facebook text-3xl text-gray-500 hover:text-sc-purple transition-colors cursor-pointer"></i>
            <i className="fab fa-instagram text-3xl text-gray-500 hover:text-sc-purple transition-colors cursor-pointer"></i>
            <i className="fab fa-google text-3xl text-gray-500 hover:text-sc-purple transition-colors cursor-pointer"></i>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
