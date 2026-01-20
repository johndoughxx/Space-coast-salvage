
import React from 'react';
import { Review } from '../types';

const REVIEWS: Review[] = [
  { id: 'r1', author: 'Mike Thompson', rating: 5, date: '2 days ago', comment: 'Found an exact matching door for my truck. Price was better than any online salvage place and the staff was super helpful pulling it for me.' },
  { id: 'r2', author: 'Sarah Jenkins', rating: 5, date: '1 week ago', comment: 'Sold my old totaled sedan to them. They gave me the best price in the Space Coast area and picked it up same day. Very professional.' },
  { id: 'r3', author: 'Carlos Rodriguez', rating: 4, date: '1 month ago', comment: 'Huge yard with tons of inventory. If you need it, they probably have it. Just bring your own tools if you want to save even more.' },
  { id: 'r4', author: 'David L.', rating: 5, date: '2 months ago', comment: 'Great prices on used tires. Saved me hundreds versus buying new for my work van.' },
];

const Reviews: React.FC = () => {
  return (
    <div className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-black uppercase italic mb-4">Customer <span className="text-sc-purple">Reviews</span></h1>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="font-bold">4.8 Average Rating</span>
            </div>
          </div>
          <button className="mt-6 md:mt-0 bg-white text-black px-6 py-2 rounded font-bold hover:bg-sc-purple hover:text-white transition-colors">
            Leave a Review
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {REVIEWS.map((r) => (
            <div key={r.id} className="bg-gray-900/50 p-8 rounded-2xl border border-white/5 relative overflow-hidden">
              <i className="fas fa-quote-right absolute -right-4 -bottom-4 text-8xl text-sc-purple/10"></i>
              <div className="flex items-center space-x-1 text-sc-purple mb-4">
                {[...Array(r.rating)].map((_, i) => <i key={i} className="fas fa-star text-sm"></i>)}
              </div>
              <p className="text-gray-300 text-lg italic leading-relaxed mb-6">"{r.comment}"</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">{r.author}</span>
                <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
