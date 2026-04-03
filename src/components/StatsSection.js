import { TrendingUp, Users, Award, Clock } from "lucide-react";
import "./StatsSection.css";

const stats = [
  { icon: TrendingUp, value: "30%+", label: "Average Revenue Growth", sub: "For our billing clients" },
  { icon: Users, value: "500+", label: "Satisfied Clients", sub: "Across North America" },
  { icon: Award, value: "99.5%", label: "Claims Accuracy", sub: "Industry-leading rate" },
  { icon: Clock, value: "24/7", label: "Support Available", sub: "Always here for you" },
];

const StatsSection = () => {
  return (
    <section className="statsLand">
      <div className="containerLand">
        <div className="stats-gridLand">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-cardLand">

              <div className="stat-icon-boxLand">
                <stat.icon className="stat-iconLand" />
              </div>

              <p className="stat-valueLand">{stat.value}</p>

              <p className="stat-labelLand">{stat.label}</p>

              <p className="stat-subLand">{stat.sub}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;