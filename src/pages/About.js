import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Award, Users } from "lucide-react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../pages/About.css";

import teamImg from "../assets/about-team.jpg";
import warehouseImg from "../assets/services-warehouse.jpg";
import CrossBorder from "../components/CrossBorder";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    desc: "Delivering exceptional cross-border solutions that empower businesses to grow without boundaries.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Complete visibility into every process, from shipment tracking to financial reporting.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Committed to the highest standards of service, compliance, and operational efficiency.",
  },
  {
    icon: Users,
    title: "Partnership",
    desc: "We treat every client as a long-term partner, not just a transaction.",
  },
];

const About = () => {
  return (
    <div className="about-page">
      <Header />

      {/* HERO */}
      <section className="heroAbout">
        <h1>About Us</h1>
        <p>Over 15 years of cross-border expertise serving businesses.</p>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container grid-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="tag">Our Story</span>

            <h2>
              Bridging Two Nations,<br />One Solution at a Time
            </h2>

            <p>
              Founded with a vision to simplify cross-border business operations,
              we have grown into a full-service provider.
            </p>

            <ul className="list">
              <li><CheckCircle size={18} /> Licensed freight operations</li>
              <li><CheckCircle size={18} /> Medical billing processes</li>
              <li><CheckCircle size={18} /> Bookkeeping services</li>
              <li><CheckCircle size={18} /> Travel management</li>
            </ul>
          </motion.div>

          <motion.img
            src={teamImg}
            alt="Team"
            className="image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          />
        </div>
      </section>

      {/* STATS */}
    <CrossBorder/>

      {/* VALUES */}
      <section className="section light">
        <div className="container">
          <h2 className="center">Our Values</h2>

          <div className="values-grid">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <Icon size={28} />
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FACILITY */}
      <section className="section">
        <div className="container grid-2">
          <img src={warehouseImg} alt="Warehouse" className="image" />

          <div>
            <span className="tag">Infrastructure</span>
            <h2>State-of-the-Art Facilities</h2>
            <p>
              Our warehouses ensure fast clearance and minimal delays.
            </p>
            <p>
              Combined with technology, we deliver reliable logistics.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;