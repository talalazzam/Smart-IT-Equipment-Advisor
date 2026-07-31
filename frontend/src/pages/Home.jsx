import React, { useEffect, useState } from "react";
import axios from "axios";
import EquipmentCard from "../components/EquipmentCard";
import "../styles/Home.css";

const Home = () => {
  const [equipment, setEquipment] = useState([]);
  const [selectedEnvironment, setSelectedEnvironment] = useState("");

  useEffect(() => {
    loadEquipment();
  }, []);

  const loadEquipment = async () => {
    try {
      const response = await axios.get("http://localhost:5000/equipment");
      setEquipment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const recommendations = {
    Home: ["Router", "Wireless Access Point", "NAS Storage"],

    "Small Office": [
      "Router",
      "Network Switch",
      "Wireless Access Point",
      "Firewall",
      "NAS Storage",
    ],

    Company: ["Firewall", "Network Switch", "Rack Server", "UPS"],

    "Data Center": ["Rack Server", "Network Switch", "NAS Storage", "UPS"],
  };

  const recommendedEquipment =
    selectedEnvironment === ""
      ? []
      : equipment.filter((item) =>
          recommendations[selectedEnvironment].includes(item.name),
        );

  return (
    <div className="homePage">
      {/* Hero Section */}
      <section className="heroSection">
        <h1>Smart IT Equipment Advisor</h1>

        <p>
          Select your environment to receive the best IT equipment
          recommendations for your infrastructure.
        </p>
      </section>

      {/* Environment Buttons */}
      <section className="environmentSection">
        <button
          className={`environmentButton ${
            selectedEnvironment === "Home" ? "active" : ""
          }`}
          onClick={() => setSelectedEnvironment("Home")}
        >
          🏠 Home
        </button>

        <button
          className={`environmentButton ${
            selectedEnvironment === "Small Office" ? "active" : ""
          }`}
          onClick={() => setSelectedEnvironment("Small Office")}
        >
          🏢 Small Office
        </button>

        <button
          className={`environmentButton ${
            selectedEnvironment === "Company" ? "active" : ""
          }`}
          onClick={() => setSelectedEnvironment("Company")}
        >
          🏭 Company
        </button>

        <button
          className={`environmentButton ${
            selectedEnvironment === "Data Center" ? "active" : ""
          }`}
          onClick={() => setSelectedEnvironment("Data Center")}
        >
          🖥️ Data Center
        </button>
      </section>

      {/* Recommendations */}
      {selectedEnvironment !== "" && (
        <section className="recommendationSection">
          <h2>Recommended Equipment for {selectedEnvironment}</h2>

          <div className="equipmentGrid">
            {recommendedEquipment.map((item) => (
              <EquipmentCard
                key={item.id}
                name={item.name}
                category={item.category}
                description={[item.description]}
                image={item.image}
              />
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="featuresSection">
        <h2>Why Choose Smart IT Equipment Advisor?</h2>

        <div className="featureCard">
          <div className="featureIcon">🌐</div>

          <div className="featureContent">
            <h3>Network Equipment</h3>

            <p>
              Discover routers, network switches, wireless access points, and
              firewalls that provide secure, reliable, and high-speed
              connectivity for every type of network.
            </p>
          </div>
        </div>

        <div className="featureCard">
          <div className="featureIcon">🖥️</div>

          <div className="featureContent">
            <h3>Server & Storage</h3>

            <p>
              Explore rack servers and NAS storage solutions that deliver
              centralized storage, data backup, and enterprise-level
              performance.
            </p>
          </div>
        </div>

        <div className="featureCard">
          <div className="featureIcon">🏢</div>

          <div className="featureContent">
            <h3>Environment Recommendations</h3>

            <p>
              Receive equipment recommendations specifically designed for Home,
              Small Office, Company, and Data Center environments.
            </p>
          </div>
        </div>

        <div className="featureCard">
          <div className="featureIcon">⚡</div>

          <div className="featureContent">
            <h3>Power & Protection</h3>

            <p>
              Learn about UPS systems and security devices that help protect
              your infrastructure and reduce downtime caused by power failures.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
