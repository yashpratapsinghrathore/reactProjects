import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function ApRoutes() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Routes>
  </Router>
  );
}

export default ApRoutes;