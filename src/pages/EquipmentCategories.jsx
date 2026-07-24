import React from "react";

const EquipmentCategories = () => {
  return (
    <div className="pageContainer">
      <h1>Equipment Categories</h1>

      <p>Browse the available IT equipment categories.</p>

      <div className="infoGrid">
        <div className="infoCard">
          <h2>Networking</h2>
          <p>Routers, switches and wireless access points.</p>
        </div>

        <div className="infoCard">
          <h2>Security</h2>
          <p>Firewalls and network protection devices.</p>
        </div>

        <div className="infoCard">
          <h2>Servers</h2>
          <p>Rack servers for hosting applications and services.</p>
        </div>

        <div className="infoCard">
          <h2>Storage</h2>
          <p>NAS devices for centralized storage and backup.</p>
        </div>

        <div className="infoCard">
          <h2>Power</h2>
          <p>UPS devices for backup power during outages.</p>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCategories;
