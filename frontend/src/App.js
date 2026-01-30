
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import About from './pages/About/about';
import ContactUs from './pages/ContactUs/contact';
import Products from './pages/Products/products';
import NotFound from './pages/NotFound/notfound';

import './App.css'

export default function App(){
  return (
    <BrowserRouter>
      < Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
