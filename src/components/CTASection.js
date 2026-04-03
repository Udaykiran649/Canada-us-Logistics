import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Ready to Grow Your Business?
        </h2>

        <p className="cta-description">
          Partner with Canada–US Logistics and experience professional, reliable,
          and results-driven services tailored to your needs.
        </p>

        <div className="cta-buttons">
          <Link to="/contact" className="btn-primary">
            Get a Free Consultation
            <ArrowRight className="icon-right" />
          </Link>

          <a href="tel:+18104878969" className="btn-outline">
            <Phone className="icon-left" />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;