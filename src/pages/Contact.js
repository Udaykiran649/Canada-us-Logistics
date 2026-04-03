import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Contact.css";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (800) 123-4567",
    href: "tel:+18001234567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@canuslogistics.com",
    href: "mailto:info@canuslogistics.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Trade Center Blvd, Toronto, ON",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon – Fri: 8:00 AM – 6:00 PM",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent! We'll contact you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <Header />

      {/* HERO */}
      <section className="heroCont">
        <h1>Contact Us</h1>
        <p>Get in touch with our team</p>
      </section>

      {/* MAIN */}
      <section className="section">
        <div className="container grid-3">
          {/* LEFT INFO */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2>Get In Touch</h2>
            <p>Reach out through any of the channels below.</p>

            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div className="info-box" key={i}>
                  <Icon size={20} />
                  <div>
                    <h4>{info.title}</h4>
                    {info.href ? (
                      <a href={info.href}>{info.value}</a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* FORM */}
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3>Send Message</h3>

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
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />

                <input
                  type="text"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>

              <textarea
                placeholder="Your Message"
                rows="5"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <button type="submit">
                <Send size={16} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <section className="map">
        <MapPin size={40} />
        <p>Toronto, Canada</p>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;