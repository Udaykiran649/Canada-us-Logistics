
import CTASection from "../components/CTASection";
import {
  Plane,
  Hotel,
  CreditCard,
  Globe,
  Headphones,
  FileText,
  CheckCircle2,
} from "lucide-react";
import travelImg from "../assets/services-travel.jpg";
import "../pages/TravelPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const features = [
  { icon: Plane, title: "Flight Bookings", desc: "Access to exclusive corporate rates on domestic and international flights." },
  { icon: Hotel, title: "Hotel Reservations", desc: "Negotiated rates at premium hotels worldwide for your business travelers." },
  { icon: CreditCard, title: "Expense Management", desc: "Integrated expense tracking and reporting for travel budgets." },
  { icon: Globe, title: "Visa & Documentation", desc: "Complete visa processing and travel documentation support." },
  { icon: Headphones, title: "24/7 Travel Support", desc: "Round-the-clock assistance for any travel emergencies or changes." },
  { icon: FileText, title: "Travel Policy", desc: "Custom travel policy creation and compliance management." },
];

const TravelPage = () => {
  return (
    <div className="travel-page">
      <Header />

      {/* Hero */}
      <section className="travel-hero">
        <div className="container">
          <span className="hero-tag">Corporate Travel</span>

          <h1 className="hero-title">
            Corporate Travel Management
          </h1>

          <p className="hero-desc">
            Streamline your business travel with exclusive rates, dedicated
            support, and seamless booking experiences.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="travel-content">
        <div className="container travel-grid">

          {/* Image */}
          <div className="image-box">
            <img src={travelImg} alt="Corporate travel" />
          </div>

          {/* Text */}
          <div>
            <h2 className="section-title">
              Travel Made Simple
            </h2>

            <p className="section-desc">
              Our corporate travel division provides end-to-end travel
              management for businesses of all sizes. From booking to expense
              reporting, we handle everything so your team can focus on what
              matters.
            </p>

            <ul className="feature-list">
              {[
                "Exclusive corporate discount rates",
                "Online booking platform",
                "Travel analytics & reporting",
                "Group travel management",
                "Duty of care compliance",
              ].map((item) => (
                <li key={item}>
                  <CheckCircle2 className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="travel-features">
        <div className="container">

          <div className="features-header">
            <h2>Our Travel Services</h2>
          </div>

          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">

                <div className="feature-icon-box">
                  <f.icon className="feature-icon" />
                </div>

                <h3>{f.title}</h3>

                <p>{f.desc}</p>

              </div>
            ))}
          </div>

        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default TravelPage;