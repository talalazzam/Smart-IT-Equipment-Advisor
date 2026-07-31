import React from "react";

const Recommendations = () => {
  return (
    <div className="pageContainer">
      <h1>IT Equipment Recommendations</h1>

      <p>
        We recommend different IT equipment based on the environment you want to
        build.
      </p>

      <div className="infoGrid">
        <div className="infoCard">
          <h2>🏠 Home</h2>
          <p>
            Recommended equipment:
            <br />
            • Router
            <br />
            • Wireless Access Point
            <br />• NAS Storage
          </p>
        </div>

        <div className="infoCard">
          <h2>🏢 Small Office</h2>
          <p>
            Recommended equipment:
            <br />
            • Router
            <br />
            • Network Switch
            <br />
            • Firewall
            <br />• NAS Storage
          </p>
        </div>

        <div className="infoCard">
          <h2>🏭 Company</h2>
          <p>
            Recommended equipment:
            <br />
            • Firewall
            <br />
            • Network Switch
            <br />
            • Rack Server
            <br />• UPS
          </p>
        </div>

        <div className="infoCard">
          <h2>🖥️ Data Center</h2>
          <p>
            Recommended equipment:
            <br />
            • Rack Server
            <br />
            • Network Switch
            <br />
            • NAS Storage
            <br />• UPS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
