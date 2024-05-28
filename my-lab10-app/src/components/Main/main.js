import React from 'react';
import Section from './subblocks/section';
import Article from './subblocks/article';
import Aside from './subblocks/aside';

import News from '../../pages/News/news';
import About from '../../pages/About/about';
import Contact from '../../pages/Contact/contact';
import Products from '../../pages/Products/products';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css';

function Main() {
  return (
    <main className="main">
      <Router>
          <Section />
        <div>
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
          <Aside />
      </Router>
    </main>
  );
}

export default Main;
