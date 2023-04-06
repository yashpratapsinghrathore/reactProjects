import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import AppNavbar from './AppNavbar';

function AppRoutes() {
  return (
    <>
    <AppNavbar />
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
  </Router>
  </>
  );
}

export default AppRoutes;