import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="brand-header">
              <div className="brand-logo">CU</div>
              <div>
                <span className="brand-title">CANADA–US</span>
                <span className="brand-subtitle">Logistics</span>
              </div>
            </div>

            <p className="footer-text">
              Your trusted partner for cross-border logistics, medical billing,
              bookkeeping, and corporate travel solutions across Canada and the
              United States.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><Link to="/services/logistics">Logistics & Freight</Link></li>
              <li><Link to="/services/medical-billing">Medical Billing</Link></li>
              <li><Link to="/services/bookkeeping">Bookkeeping</Link></li>
              <li><Link to="/services/travel">Corporate Travel</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/contact">Careers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <Phone className="icon" />
                <a href="tel:+18104878969">+1 (810) 487-8969</a>
              </li>
              <li>
                <Mail className="icon" />
                <a href="mailto:info@canadauslogistics.com">
                  info@canadauslogistics.com
                </a>
              </li>
              <li>
                <MapPin className="icon" />
                <span>Toronto, ON, Canada</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>
            &copy; {new Date().getFullYear()} Canada–US Logistics. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;