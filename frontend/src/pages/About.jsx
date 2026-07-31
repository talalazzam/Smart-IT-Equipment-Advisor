import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="pageContainer">
      <h1>About Smart IT Equipment Advisor</h1>

      <p>
        Smart IT Equipment Advisor is a React web application designed to help
        users choose the right IT equipment based on their environment and
        business needs.
      </p>

      <div className="infoGrid">
        <div className="infoCard">
          <h2>🎯 Our Mission</h2>
          <p>
            Help users select the most suitable IT equipment for homes, offices,
            companies, and data centers.
          </p>
        </div>

        <div className="infoCard">
          <h2>💻 What We Offer</h2>
          <p>
            Recommendations for routers, switches, servers, storage devices,
            firewalls, access points, and UPS systems.
          </p>
        </div>

        <div className="infoCard">
          <h2>🌍 Who Can Use It?</h2>
          <p>
            Home users, students, small businesses, companies, and IT
            professionals looking for suitable equipment.
          </p>
        </div>

        <div className="infoCard">
          <h2>🚀 Project Goal</h2>
          <p>
            Make choosing IT equipment easier by providing organized
            recommendations based on different environments and equipment
            categories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
