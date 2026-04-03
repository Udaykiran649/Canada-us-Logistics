import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import "./Header.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Logistics", path: "/services/logistics" },
  { label: "Medical Billing", path: "/services/medical-billing" },
  { label: "Bookkeeping", path: "/services/bookkeeping" },
  { label: "Travel", path: "/services/travel" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-left">
            <a href="tel:+18104878969" className="topbar-link">
              <Phone className="icon-small" />
              +1 (810) 487-8969
            </a>

            <a href="mailto:info@canadauslogistics.com" className="topbar-link hide-mobile">
              <Mail className="icon-small" />
              info@canadauslogistics.com
            </a>
          </div>

          <div className="topbar-right">
            <span className="hide-tablet">Mon–Fri: 9AM – 6PM EST</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-content">

          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-box">CU</div>
            <div>
              <span className="logo-title">CANADA–US</span>
              <span className="logo-sub">Logistics</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="nav-cta">
            <Link to="/contact" className="btn-primaryhead">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
             {/* Close Icon */}
  <div className="mobile-header">
    <button
      className="close-btn"
      onClick={() => setIsOpen(false)}
    >
      <X />
    </button>
  </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`mobile-link ${
                  location.pathname === link.path ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="btn-primaryhead mobile-btn"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;