
import React from "react"

import "./navbar.css"

const Navbar = () => {
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

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li><Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link></li>
          <li><Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>About</Link></li>
          <li><Link to="/services" className={`nav-link ${location.pathname === "/products" ? "active" : ""}`}>Products</Link></li>
          <li><Link to="/projects" className={`nav-link ${location.pathname === "" ? "active" : ""}`}></Link></li>
          <li><Link to="/contactus" className={`nav-link ${location.pathname === "/contactus" ? "active" : ""}`}>ContactUs</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={28} /> : <GiHamburgerMenu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <ul className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" className={`mobile-link ${location.pathname === "/" ? "active" : ""}`} onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" className={`mobile-link ${location.pathname === "/about" ? "active" : ""}`} onClick={closeMenu}>About</Link></li>
        <li><Link to="/services" className={`mobile-link ${location.pathname === "/products" ? "active" : ""}`} onClick={closeMenu}>Products</Link></li>
        <li><Link to="/projects" className={`mobile-link ${location.pathname === "/" ? "active" : ""}`} onClick={closeMenu}></Link></li>
        <li><Link to="/contactus" className={`mobile-link ${location.pathname === "/contactus" ? "active" : ""}`} onClick={closeMenu}>ContactUs</Link></li>
      </ul>
    </nav>
    )
}
export default Navbar