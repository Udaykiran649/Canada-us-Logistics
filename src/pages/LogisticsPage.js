
import CTASection from "../components/CTASection";
import {
  Truck,
  Globe,
  BarChart3,
  ShieldCheck,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import logisticsImg from "../assets/service-logistics-BWKKMw0f.jpg";
import "./LogisticsPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const features = [
  { icon: Truck, title: "FTL & LTL Shipping", desc: "Full and partial truckload solutions optimized for your cargo needs." },
  { icon: Globe, title: "Customs Brokerage", desc: "Expert handling of cross-border customs documentation and compliance." },
  { icon: BarChart3, title: "Supply Chain Analytics", desc: "Real-time data and insights to optimize your supply chain performance." },
  { icon: ShieldCheck, title: "Cargo Insurance", desc: "Comprehensive insurance coverage for all shipments across borders." },
  { icon: Clock, title: "Express Delivery", desc: "Time-critical shipping options for urgent cross-border deliveries." },
  { icon: MapPin, title: "Warehousing", desc: "Strategic warehouse locations in Canada and the US for distribution." },
];

const LogisticsPage = () => {
  return (
    <div className="logistics-page">
      <Header/>

      {/* Hero */}
      <section className="logistics-hero">
        <div className="container">
          <span className="hero-tag">Logistics & Freight</span>

          <h1 className="hero-title">
            Cross-Border Freight Solutions
          </h1>

          <p className="hero-desc">
            Seamless, reliable, and cost-effective logistics between Canada and
            the United States. Modern technology meets deep industry expertise.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="logistics-content">
        <div className="container logistics-grid">

          {/* Text */}
          <div>
            <h2 className="section-title">
              Moving Your Business Forward
            </h2>

            <p className="section-desc">
              Our logistics division specializes in Canada-US freight management,
              offering comprehensive solutions from pickup to final delivery. We
              handle customs, compliance, and everything in between.
            </p>

            <ul className="feature-list">
              {[
                "Real-time shipment tracking",
                "Dedicated account managers",
                "Competitive cross-border rates",
                "Temperature-controlled options",
                "Hazmat certified carriers",
              ].map((item) => (
                <li key={item}>
                  <CheckCircle2 className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="image-box">
            <img src={logisticsImg} alt="Logistics operations" />
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="logistics-features">
        <div className="container">

          <div className="features-header">
            <h2>Our Logistics Services</h2>
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

export default LogisticsPage;