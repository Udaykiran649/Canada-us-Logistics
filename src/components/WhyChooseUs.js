import { Shield, Zap, HeartHandshake, Globe, CheckCircle2 } from "lucide-react";
import teamImg from "../assets/about-team.jpg";
import "./WhyChooseUs.css";

const reasons = [
  {
    icon: Shield,
    title: "Trusted & Compliant",
    desc: "HIPAA-certified, fully insured, and committed to the highest industry standards.",
  },
  {
    icon: Zap,
    title: "Technology-Driven",
    desc: "Modern tools and real-time dashboards to keep you informed every step of the way.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    desc: "A dedicated account manager and 24/7 support team for every client.",
  },
  {
    icon: Globe,
    title: "Cross-Border Expertise",
    desc: "Deep knowledge of Canada-US regulations, customs, and business practices.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why">
      <div className="container why-grid">

        {/* Left Content */}
        <div className="why-content">
          <span className="why-tag">Why Choose Us</span>

          <h2 className="why-title">
            Professional. Reliable. Results-Driven.
          </h2>

          <p className="why-desc">
            We combine deep industry expertise with cutting-edge technology to
            deliver solutions that make a real impact on your bottom line.
          </p>

          <div className="why-list">
            {reasons.map((reason) => (
              <div key={reason.title} className="why-item">

                <div className="why-icon-box">
                  <reason.icon className="why-icon" />
                </div>

                <div>
                  <h4 className="why-item-title">{reason.title}</h4>
                  <p className="why-item-desc">{reason.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="why-image-wrapper">
          <img src={teamImg} alt="Our professional team" className="why-image" />

          {/* Floating Card */}
          <div className="why-badge">
            <CheckCircle2 className="badge-icon" />
            <div>
              <p className="badge-title">100+ Partners</p>
              <p className="badge-sub">Across Canada & USA</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;