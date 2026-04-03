import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../pages/Quote.css";

const serviceOptions = [
  "Freight & Logistics",
  "Medical Billing",
  "Bookkeeping",
  "Corporate Travel",
  "Custom Package",
];

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    details: "",
    urgency: "standard",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Quote Request Submitted! We'll contact you soon.");

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      details: "",
      urgency: "standard",
    });
  };

  return (
    <div className="quote-page">
      <Header />

      {/* HERO */}
      <section className="hero">
        <h1>Get a Free Quote</h1>
        <p>Tell us your requirements</p>
      </section>

      {/* MAIN */}
      <section className="section">
        <div className="container grid-3">
          
          {/* LEFT SIDE */}
          <motion.div
            className="sidebar"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3>Why Request a Quote?</h3>

            <div className="benefits">
              {[
                "Free proposal",
                "Custom solutions",
                "Best pricing",
                "24hr response",
                "Dedicated manager",
              ].map((item, i) => (
                <div key={i} className="benefit">
                  <CheckCircle size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="call-box">
              <h4>Need Urgent Help?</h4>
              <p>Call us now</p>
              <a href="tel:+18001234567">+1 (800) 123-4567</a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            className="form-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3>Request Quote</h3>

            <form onSubmit={handleSubmit}>
              <div className="grid-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />

                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <select
                required
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
              >
                <option value="">Select Service</option>
                {serviceOptions.map((s, i) => (
                  <option key={i}>{s}</option>
                ))}
              </select>

              <div className="radio-group">
                {["standard", "urgent", "critical"].map((u) => (
                  <label key={u}>
                    <input
                      type="radio"
                      name="urgency"
                      value={u}
                      checked={formData.urgency === u}
                      onChange={() =>
                        setFormData({ ...formData, urgency: u })
                      }
                    />
                    {u}
                  </label>
                ))}
              </div>

              <textarea
                placeholder="Project Details"
                required
                value={formData.details}
                onChange={(e) =>
                  setFormData({ ...formData, details: e.target.value })
                }
              />

              <button type="submit">
                <Send size={16} /> Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quote;