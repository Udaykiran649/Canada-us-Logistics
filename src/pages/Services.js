
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
import { Truck, Stethoscope, Calculator, Plane, ArrowRight } from "lucide-react";
import logisticsImg from "../assets/services-freight.jpg";
import medicalImg from "../assets/services-medical.jpg";
import bookkeepingImg from "../assets/services-bookkeeping.jpg";
import travelImg from "../assets/services-travel.jpg";
import "../pages/Services.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    icon: Truck,
    title: "Logistics & Freight",
    image: logisticsImg,
    link: "/services/logistics",
    desc: "Comprehensive cross-border freight and supply chain solutions between Canada and the United States.",
    features: [
      "Full Truckload (FTL) & Less Than Truckload (LTL)",
      "Customs Brokerage & Compliance",
      "Real-Time Tracking & Visibility",
      "Warehousing & Distribution",
    ],
  },
  {
    icon: Stethoscope,
    title: "Medical Billing",
    image: medicalImg,
    link: "/services/medical-billing",
    desc: "HIPAA-compliant end-to-end medical billing and revenue cycle management services.",
    features: [
      "Claims Submission & Follow-Up",
      "Denial Management & Appeals",
      "Credentialing Services",
      "Real-Time Financial Reporting",
    ],
  },
  {
    icon: Calculator,
    title: "Bookkeeping",
    image: bookkeepingImg,
    link: "/services/bookkeeping",
    desc: "Accurate and timely bookkeeping solutions to keep your finances organized and compliant.",
    features: [
      "Accounts Payable & Receivable",
      "Monthly Financial Statements",
      "Tax Preparation Support",
      "Payroll Processing",
    ],
  },
  {
    icon: Plane,
    title: "Corporate Travel",
    image: travelImg,
    link: "/services/travel",
    desc: "Full-service corporate travel management with exclusive rates and dedicated support.",
    features: [
      "Flight & Hotel Bookings",
      "Visa & Documentation Support",
      "Travel Policy Management",
      "24/7 Emergency Support",
    ],
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <Header />

      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <span className="hero-tag">Our Services</span>

          <h1 className="hero-title">
            Complete Business Solutions
          </h1>

          <p className="hero-desc">
            We offer a full suite of professional services designed to help your
            business operate efficiently across borders.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="container services-wrapper">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-row ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="service-content">
                <div className="service-icon-box">
                  <service.icon className="service-icon" />
                </div>

                <h2 className="service-title">{service.title}</h2>

                <p className="service-desc">{service.desc}</p>

                <ul className="service-list">
                  {service.features.map((f) => (
                    <li key={f}>
                      <span className="dot"></span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to={service.link} className="btn-primary">
                  Learn More <ArrowRight className="arrow" />
                </Link>
              </div>

              {/* Image */}
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;