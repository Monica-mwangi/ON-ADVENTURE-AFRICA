import React from 'react';
import { Globe, Clock, Landmark, Gavel } from 'lucide-react';

const FeaturedDestinations = () => {
  return (
    <section className="text-center py-18 px-4 bg-white flex flex-col justify-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
       <h4 className="text-sm text-gray-500 uppercase tracking-wide mb-2">WELCOME TO</h4>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">ON ADVENTURE AFRICA</h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        On Adventure Africa is a tour operator and destination management company that prides itself in providing the ultimate and personalised service for special tailor-made Africn Travel experience. We ensure that your journey
        includes the finest hotels/lodges or tented camps that suits your needs and budget always. We are owner run and backed by multi language guides and a network of trusted establishments, safari operators and transport companies

      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
  <Globe className="w-10 h-10 text-green-900 mb-2" />
  <h3 className="text-lg font-semibold text-gray-800 mb-1">Best Tour Selection</h3>
  <p className="text-sm text-gray-600 max-w-xs">
    Book a suitable tour pacakage and get to discover
  </p>
</div>

        <div className="flex flex-col items-center">
          <Clock className="w-10 h-10 text-green-900 mb-2" />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Easy & Quick Bookings</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            We make it easy and convenient to book packages
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Gavel className="w-10 h-10 text-green-900 mb-2" />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Profesional Safari Guides</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            Our Guides are well-known for their incredible knowledge, and unmatched level of proffesionalism
          </p>
        </div>
         <div className="flex flex-col items-center">
          <Landmark className="w-10 h-10 text-green-900 mb-2" />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">24/7 Customer Support</h3>
          <p className="text-sm text-gray-600 max-w-xs">
            We are here to serve our clients 24/7 which gives you peace of mind
          </p>
        </div>
      </div>
    </section>
  );

 
};

export default FeaturedDestinations;