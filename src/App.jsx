import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NuevoVideo from './components/NuevoVideo';

function App() {
    
  return (
    <Router>
      <Content />
      <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/NuevoVideo" element={ <NuevoVideo /> } />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
