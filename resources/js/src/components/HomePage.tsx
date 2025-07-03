import React from 'react';
// import Header from './Header';
import Hero from './Hero';
import FeaturedDestinations from './FeaturedDestinations';
import About from './About';
import SafariSection from './SafariSection';
import CoastSection from './CoastSection';
import TravelGuide from './TravelGuide';
import Tailor from './Tailor';
import Testimonials from './testimonials';
import Footer from './Footer';
import Email from './Email';
// import AboutUs from './AboutUsPage';

function App() {
  return (
    <div className="font-sans">
      {/* <Header /> */}
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
      {/* <AboutUs /> */}
    </div>
  );
}

export default App;