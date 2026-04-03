import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, TrendingUp } from "lucide-react";
import heroImg from "../assets/hero-logistics.jpg"; // adjust path if needed
import "./HeroSection.css";

const HeroSection = () => {
  const features = [
    { icon: Shield, label: "HIPAA Compliant", sub: "Secure & Certified" },
    { icon: Globe, label: "Cross-Border Experts", sub: "Canada & USA" },
    { icon: TrendingUp, label: "30%+ Revenue Growth", sub: "For Our Clients" },
  ];

  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-bg">
        <img src={heroImg} alt="Global logistics port" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">

          {/* Badge */}
          <div className="hero-badge">
            <Globe className="icon-small" />
            Trusted Across Canada & The United States
          </div>

          {/* Title */}
          <h1 className="hero-title">
            Seamless Cross-Border{" "}
            <span className="gradient-text">Business Solutions</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            From logistics and freight to medical billing, bookkeeping, and
            corporate travel — we deliver professional services that drive
            growth across North America.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primaryLand">
              Get Started Today
              <ArrowRight className="icon-right" />
            </Link>

            <Link to="/services" className="btn-outline">
              Explore Our Services
            </Link>
          </div>

          {/* Features */}
          <div className="hero-features">
            {features.map((item) => (
              <div key={item.label} className="feature-item">
                <div className="feature-icon">
                  <item.icon className="icon-medium" />
                </div>
                <div>
                  <p className="feature-title">{item.label}</p>
                  <p className="feature-sub">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;