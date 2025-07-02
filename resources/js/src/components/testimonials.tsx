import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Jane Wambui",
    review: "The trip exceeded my expectations. From the moment I landed in Nairobi to the game drives in the Maasai Mara, everything was seamless. I’ve never seen such amazing wildlife and the guides were phenomenal. I’m already planning my next tour!",
    rating: 5
  },
  {
    name: "John Otieno",
    review: "This was my first safari experience and I was blown away! The accommodation was comfortable, the food was excellent, and every detail was taken care of. The entire team was professional and warm. Highly recommend!",
    rating: 4
  },
  {
    name: "Fatma Abdalla",
    review: "Absolutely loved the cultural experiences included in our itinerary. The visit to a Maasai village was a highlight for me. Everything was well coordinated and personalized. Felt very safe and cared for throughout the trip.",
    rating: 5
  },
];

const Testimonials = () => {
  return (
    <section
      className="min-h-screen w-full px-6 py-16 text-white bg-cover bg-center"
      style={{
        fontFamily: 'Montserrat, sans-serif',
        backgroundImage: `url('/images/lion.jpg')`,
      }}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h4 className="text-sm text-gray-200 uppercase tracking-wide mb-2">TESTIMONIALS</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Customer Reviews</h1>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Regardless of your situation, we can help you exit your comfort zone like we've done for many others. Hear what they have to say:
        </p>
      </div>

      {/* Static Grid of Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#827c38] bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg h-[400px] flex flex-col justify-between"
          >
            <div>
              <h4 className="text-white text-lg font-semibold mb-2">{item.name}</h4>
              <p className="text-sm text-gray-100 italic leading-relaxed">{item.review}</p>
            </div>
            <div className="flex mt-4 text-yellow-400">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" stroke="none" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
