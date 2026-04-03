import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
// import "./NotFound.css";
import "./Quote.css";
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="notfound">
      <div className="notfound-box">
        <h1>404</h1>
        <p>Oops! Page not found</p>

        <Link to="/" className="home-link">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;