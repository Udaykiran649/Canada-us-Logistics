import { Star } from "lucide-react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Family Practice, Ontario",
    text: "Canada–US Logistics transformed our billing process. Revenue increased by 28% in just six months, and claim denials dropped dramatically.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "CEO, CrossBorder Imports",
    text: "Their logistics team handles our cross-border freight flawlessly. Real-time tracking, customs expertise, and always on time. Highly recommended.",
    rating: 5,
  },
  {
    name: "Linda Park",
    role: "CFO, TechNova Solutions",
    text: "The bookkeeping service is exceptional. Clean records, timely reports, and their team feels like an extension of our own finance department.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="container">

        {/* Header */}
        <div className="testimonials-header">
          <span className="testimonials-tag">Testimonials</span>

          <h2 className="testimonials-title">
            What Our Clients Say
          </h2>
        </div>

        {/* Cards */}
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">

              {/* Stars */}
              <div className="stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>

              {/* Text */}
              <p className="testimonial-text">
                "{t.text}"
              </p>

              {/* User */}
              <div className="testimonial-user">
                <p className="user-name">{t.name}</p>
                <p className="user-role">{t.role}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;