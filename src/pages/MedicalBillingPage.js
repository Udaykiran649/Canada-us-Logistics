
import CTASection from "../components/CTASection";
import {
  Stethoscope,
  FileCheck,
  TrendingUp,
  ShieldCheck,
  Users,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";
import medicalImg from "../assets/services-medical.jpg";
import "../pages/MedicalBillingPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const features = [
  { icon: FileCheck, title: "Claims Management", desc: "Accurate claim submission, follow-up, and appeals to maximize reimbursements." },
  { icon: TrendingUp, title: "Revenue Optimization", desc: "Data-driven strategies to increase revenue and reduce payment delays." },
  { icon: ShieldCheck, title: "HIPAA Compliance", desc: "Full compliance with HIPAA regulations and data security standards." },
  { icon: Users, title: "Credentialing", desc: "Provider enrollment and credentialing with all major insurance networks." },
  { icon: ClipboardList, title: "Denial Management", desc: "Proactive denial prevention and aggressive appeals process." },
  { icon: Stethoscope, title: "Coding Services", desc: "Certified medical coders ensuring accurate ICD-10 and CPT coding." },
];

const MedicalBillingPage = () => {
  return (
    <div className="medical-page">
      <Header />

      {/* Hero */}
      <section className="medical-hero">
        <div className="container">
          <span className="hero-tag">Medical Billing</span>

          <h1 className="hero-title">
            Medical Billing Services You Can Trust
          </h1>

          <p className="hero-desc">
            End-to-end revenue cycle management that maximizes reimbursements
            and streamlines your practice operations.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="medical-content">
        <div className="container medical-grid">

          {/* Image */}
          <div className="image-box">
            <img src={medicalImg} alt="Medical billing" />
          </div>

          {/* Text */}
          <div>
            <h2 className="section-title">
              Maximize Your Practice Revenue
            </h2>

            <p className="section-desc">
              Our medical billing experts handle every aspect of your revenue
              cycle — from patient registration to final payment. We use smart
              technology and proven processes to ensure you capture every dollar
              your practice deserves.
            </p>

            <ul className="feature-list">
              {[
                "Up to 99.5% claims accuracy rate",
                "30%+ average revenue increase",
                "Dedicated billing specialists",
                "Real-time reporting dashboard",
                "All major specialties supported",
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
      <section className="medical-features">
        <div className="container">

          <div className="features-header">
            <h2>Our Billing Services</h2>
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

export default MedicalBillingPage;