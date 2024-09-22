import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Resume from './pages/Resume/Resume';
import PersonalProjects from './pages/Projects/Projects';
import ContactMe from './pages/ContactMe/ContactMe';
import Navbar from './components/Nav/navbar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<PersonalProjects />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
