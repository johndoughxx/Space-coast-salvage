
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-5xl font-black mb-8 uppercase italic">Get In <span className="text-sc-purple">Touch</span></h1>
            <p className="text-gray-400 mb-10 text-lg">Looking for a specific part? Want to sell your junk car? Send us a message or visit us today.</p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-sc-purple p-3 rounded-lg"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-400">6500 Korbin Ave, Rockledge, FL 32955</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-sc-purple p-3 rounded-lg"><i className="fas fa-phone"></i></div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-400">321-632-XXXX</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-sc-purple p-3 rounded-lg"><i className="fas fa-clock"></i></div>
                <div>
                  <h3 className="font-bold">Business Hours</h3>
                  <p className="text-gray-400">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-400">Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 w-full bg-gray-900 rounded-2xl flex items-center justify-center border border-white/10 overflow-hidden">
               {/* Map Placeholder */}
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.336495111242!2d-80.73347962386266!3d28.28827997585507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7275811c76949%3A0x600b3e57f3521b45!2s6500%20Korbin%20Ave%2C%20Rockledge%2C%20FL%2032955!5e0!3m2!1sen!2sus!4v1715424831294!5m2!1sen!2sus" 
                className="w-full h-full grayscale invert opacity-70"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl text-black">
            <h2 className="text-3xl font-black mb-8 uppercase italic">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase mb-2">First Name</label>
                  <input type="text" className="w-full p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-sc-purple" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2">Last Name</label>
                  <input type="text" className="w-full p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-sc-purple" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-2">Email Address</label>
                <input type="email" className="w-full p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-sc-purple" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-2">Subject</label>
                <select className="w-full p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-sc-purple">
                  <option>Part Request</option>
                  <option>Sell My Car</option>
                  <option>Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-2">Message</label>
                <textarea rows={4} className="w-full p-3 bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-sc-purple" placeholder="Tell us what you're looking for..."></textarea>
              </div>
              <button className="w-full bg-sc-purple text-white py-4 rounded-xl font-bold uppercase hover:bg-black transition-all">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
