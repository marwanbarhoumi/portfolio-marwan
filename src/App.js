import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./style/Home.css"; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
      <Router>
        <Navbar />
        <div className="container-py-3">
         

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
