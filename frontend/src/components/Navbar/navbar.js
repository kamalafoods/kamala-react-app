import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/" className="logo-link">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dbvxvx7jj/image/upload/v1769681414/Kamala_foods_20260120_203618_0000_page-0001_t26t6l.jpg"
            alt="website logo"
          />
        </Link>

        <ul className="nav-menu">
          <li><Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link></li>
          <li><Link className={location.pathname === "/about" ? "active" : ""} to="/about">About</Link></li>
          <li><Link className={location.pathname === "/products" ? "active" : ""} to="/products">Products</Link></li>
          <li><Link className={location.pathname === "/contactus" ? "active" : ""} to="/contactus">Contact</Link></li>
        </ul>

        <div className="hamburger-menu" onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
        </div>
      </div>

      <ul className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
        <li><Link to="/contactus" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}
