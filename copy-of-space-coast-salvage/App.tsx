
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import CarsForSale from './pages/CarsForSale';
import Wheels from './pages/Wheels';
import About from './pages/About';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vehicle Inventory', path: '/inventory' },
    { name: 'Cars For Sale', path: '/cars' },
    { name: 'Wheels', path: '/wheels' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Reviews', path: '/reviews' },
  ];

  return (
    <nav className="bg-black border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter">
                SPACE<span className="text-sc-purple italic">COAST</span>
              </span>
              <span className="text-[10px] tracking-[0.4em] font-bold text-gray-400 mt-[-4px]">SALVAGE</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? 'text-sc-purple'
                      : 'text-gray-300 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-bold uppercase transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-bold uppercase text-gray-300 hover:text-white hover:bg-gray-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-black border-t border-white/10 py-12 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-black mb-4">SPACE<span className="text-sc-purple italic">COAST</span></h3>
          <p className="text-gray-400 text-sm">
            Professional auto salvage and recycling services in Brevard County. Quality parts, fair prices.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-sc-purple">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/inventory" className="hover:text-white">Vehicle Inventory</Link></li>
            <li><Link to="/cars" className="hover:text-white">Cars for Sale</Link></li>
            <li><Link to="/wheels" className="hover:text-white">Wheels for Sale</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-sc-purple">Location</h4>
          <p className="text-gray-400 text-sm mb-2">6500 Korbin Ave,<br />Rockledge, FL 32955</p>
          <p className="text-gray-400 text-sm">321-632-XXXX</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 mt-12 pt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Space Coast Salvage. All rights reserved.
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/cars" element={<CarsForSale />} />
            <Route path="/wheels" element={<Wheels />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
