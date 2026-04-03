
import CTASection from "../components/CTASection";
import {
  Calculator,
  FileText,
  PieChart,
  Receipt,
  DollarSign,
  BarChart3,
  CheckCircle2,
} from "lucide-react";
import bookkeepingImg from "../assets/services-bookkeeping.jpg";
import "../pages/BookkeepingPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const features = [
  { icon: FileText, title: "Financial Statements", desc: "Monthly P&L, balance sheets, and cash flow statements prepared on time." },
  { icon: Receipt, title: "Accounts Payable/Receivable", desc: "End-to-end management of your payables and receivables." },
  { icon: DollarSign, title: "Payroll Processing", desc: "Accurate payroll processing with tax compliance for Canada and US." },
  { icon: PieChart, title: "Financial Reporting", desc: "Custom dashboards and reports for better business decisions." },
  { icon: Calculator, title: "Tax Preparation", desc: "Year-end tax preparation and filing support for both countries." },
  { icon: BarChart3, title: "Budget Forecasting", desc: "Strategic financial planning and budget analysis services." },
];

const BookkeepingPage = () => {
  return (
    <div className="bookkeeping-page">
      <Header />

      {/* Hero */}
      <section className="bookkeeping-hero">
        <div className="container">
          <span className="hero-tag">Bookkeeping</span>

          <h1 className="hero-title">
            Professional Bookkeeping Solutions
          </h1>

          <p className="hero-desc">
            Keep your finances organized, compliant, and growth-ready with our
            expert bookkeeping services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bookkeeping-content">
        <div className="container bookkeeping-grid">

          {/* Text */}
          <div>
            <h2 className="section-title">
              Your Books, Done Right
            </h2>

            <p className="section-desc">
              We provide accurate, timely, and reliable bookkeeping services
              that give you a clear picture of your financial health. Our team
              handles everything from day-to-day transaction recording to
              complex financial reporting.
            </p>

            <ul className="feature-list">
              {[
                "QuickBooks & Xero certified",
                "Cross-border tax expertise",
                "Monthly reconciliation",
                "Dedicated bookkeeper assigned",
                "Scalable for any business size",
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
            <img src={bookkeepingImg} alt="Bookkeeping services" />
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bookkeeping-features">
        <div className="container">

          <div className="features-header">
            <h2>Our Bookkeeping Services</h2>
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

export default BookkeepingPage;