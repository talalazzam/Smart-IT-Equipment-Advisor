import React from "react";

const Environments = () => {
  return (
    <div className="pageContainer">
      <h1>Recommended Environments</h1>

      <p>We recommend different IT equipment based on your environment.</p>

      <div className="infoGrid">
        <div className="infoCard">
          <h2>🏠 Home</h2>
          <p>Ideal for personal internet access, storage and Wi-Fi.</p>
        </div>

        <div className="infoCard">
          <h2>🏢 Small Office</h2>
          <p>Suitable for small businesses with multiple users.</p>
        </div>

        <div className="infoCard">
          <h2>🏭 Company</h2>
          <p>Enterprise networking, servers and security solutions.</p>
        </div>

        <div className="infoCard">
          <h2>🖥️ Data Center</h2>
          <p>High-performance servers, storage and power systems.</p>
        </div>
      </div>
    </div>
  );
};

export default Environments;
