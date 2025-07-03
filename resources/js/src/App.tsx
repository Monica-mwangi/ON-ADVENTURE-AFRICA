import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header'; // ✅ Import Header component
import AboutUs from './components/AboutUsPage';
import Destinations from './components/Destination';

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'On Adventure Africa';
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />}/>
            <Route path="/destinations" element={<Destinations />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
