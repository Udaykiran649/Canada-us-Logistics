import { Link } from "react-router-dom";
import { Truck, Stethoscope, Calculator, Plane, ArrowRight } from "lucide-react";
import logisticsImg from "../assets/services-freight.jpg";
import medicalImg from "../assets/services-medical.jpg";
import bookkeepingImg from "../assets/services-bookkeeping.jpg";
import travelImg from "../assets/services-travel.jpg";
import "./ServicesOverview.css";

const services = [
  {
    icon: Truck,
    title: "Logistics & Freight",
    description:
      "End-to-end cross-border freight solutions between Canada and the US. FTL, LTL, customs brokerage, and supply chain management.",
    image: logisticsImg,
    link: "/services/logistics",
  },
  {
    icon: Stethoscope,
    title: "Medical Billing",
    description:
      "HIPAA-compliant medical billing services that maximize reimbursements, reduce denials, and streamline your revenue cycle.",
    image: medicalImg,
    link: "/services/medical-billing",
  },
  {
    icon: Calculator,
    title: "Bookkeeping",
    description:
      "Accurate, reliable bookkeeping and accounting solutions to keep your finances organized and your business growing.",
    image: bookkeepingImg,
    link: "/services/bookkeeping",
  },
  {
    icon: Plane,
    title: "Corporate Travel",
    description:
      "Full-service corporate travel management with exclusive rates, 24/7 support, and seamless booking experiences.",
    image: travelImg,
    link: "/services/travel",
  },
];

const ServicesOverview = () => {
  return (
    <section className="services">
      <div className="container">

        {/* Header */}
        <div className="services-header">
          <span className="services-tag">What We Do</span>

          <h2 className="services-title">
            Comprehensive Business Solutions
          </h2>

          <p className="services-subtitle">
            Four core services, one trusted partner. We handle the complexity so
            you can focus on growth.
          </p>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="service-card"
            >
              {/* Image */}
              <div className="service-image">
                <img src={service.image} alt={service.title} />

                <div className="overlay"></div>

                <div className="icon-box">
                  <service.icon className="icon" />
                </div>
              </div>

              {/* Content */}
              <h3 className="service-title">{service.title}</h3>

              <p className="service-desc">{service.description}</p>

              <div className="service-link">
                Learn More
                <ArrowRight className="arrow" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;