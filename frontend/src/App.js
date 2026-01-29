
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar.js';
import Footer from './components/Footer/footer.js';
import Home from './pages/Home/home.js';
import About from './pages/About/about.js';
import ContactUs from './pages/ContactUs/contact.js';
import Products from './pages/Products/products.js';
import NotFound from './pages/NotFound/notfound.js';

import './App.css'

export default function App(){
  return (
    <Router>
      < Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
