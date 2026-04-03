import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Stethoscope,
  ShoppingCart,
  Building2,
  Truck,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../pages/Industries.css";

const industries = [
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Medical billing and revenue optimization.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Supply chain and logistics solutions.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Warehousing and delivery solutions.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Financial and bookkeeping services.",
  },
  {
    icon: Truck,
    title: "Automotive",
    desc: "Freight for automotive parts.",
  },
  {
    icon: Landmark,
    title: "Finance",
    desc: "Payroll and financial reporting.",
  },
];

const Industries = () => {
  return (
    <div className="industries-page">
      <Header />

      {/* HERO */}
      <section className="hero">
        <h1>Industries We Serve</h1>
        <p>Solutions for multiple industries</p>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="container">
          <h2 className="center">Our Expertise</h2>

          <div className="grid">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={i}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <Icon size={30} className="icon" />
                  <h3>{ind.title}</h3>
                  <p>{ind.desc}</p>

                  <Link to="/contact" className="link">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Don't See Your Industry?</h2>
        <p>Contact us to discuss your needs</p>

        <Link to="/contact" className="btn">
          Contact Us <ArrowRight size={16} />
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;