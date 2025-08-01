import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/safari.jpg')"
  }}
>
  {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
</div>


      {/* Content */}
      <div className="relative z-10 text-center mt-[100px] text-white container-max">
        <h1 className="text-5xl md:text-7xl mb-6 leading-tight text-shadow-lg">
          Feel Free To Discover Most 
          <span className="block text-brand text-shadow-lg">Engaging Places</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium leading-relaxed font-bold text-shadow-lg">
         Best Places For Your Next Travel Are Here Check Them Out 
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {
            <button type="button" className="bg-brand hover:bg-brand/90 text-white text-sm font-medium px-6 py-3 rounded-full transition">
  START A TRIP
</button>

          }
          {/* <button className="btn-primary group">
            Explore Destinations
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button> */}
          {/* <button className="btn-outline group">
            <Play className="mr-2 h-5 w-5" />
            Watch Video
          </button> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;