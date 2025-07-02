import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import About from './components/About';
import SafariSection from './components/SafariSection';
import CoastSection from './components/CoastSection';
import TravelGuide from './components/TravelGuide';
import Tailor from './components/Tailor';
import Testimonials from './components/testimonials';
import Footer from './components/Footer';
import Email from './components/Email';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <FeaturedDestinations />
      <About />
      <SafariSection />
      <CoastSection />
      <TravelGuide />
      <Tailor/>
      <Testimonials/>
      <Email/>
      <Footer />
    </div>
  );
}

export default App;