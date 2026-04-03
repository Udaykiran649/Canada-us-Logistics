import crossBorderImg from "../assets/cross-border.jpg";
import "../components/CrossBorder.css";

const statsCross = [
  { value: "50,000+", label: "Shipments Per Year" },
  { value: "200+", label: "Routes Covered" },
  { value: "99.8%", label: "On-Time Rate" },
  { value: "500+", label: "Happy Clients" },
];

const CrossBorder = () => {
  return (
    <section className="stats-sectionCross">

      {/* Background */}
      <div className="stats-bgCross">
        <img src={crossBorderImg} alt="Cross-border shipping" />
        <div className="stats-overlayCross"></div>
      </div>

      {/* Content */}
      <div className="containerCross stats-contentCross">

        <div className="stats-headerCross">
          <h2>Numbers That Speak Trust</h2>
          <p>
            Our track record of excellence drives confidence for businesses across North America.
          </p>
        </div>

        <div className="stats-gridCross">
          {statsCross.map((stat, i) => (
            <div key={i} className="stat-cardCross">
              <div className="stat-valueCross">{stat.value}</div>
              <div className="stat-labelCross">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CrossBorder;