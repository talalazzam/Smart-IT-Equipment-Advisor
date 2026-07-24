import React, { useState } from "react";
import EquipmentCard from "../components/EquipmentCard";

import router from "../assets/equipment/router.png";
import switchImg from "../assets/equipment/switch.png";
import firewall from "../assets/equipment/firewall.png";
import accessPoint from "../assets/equipment/accesspoint.png";
import rackServer from "../assets/equipment/rackserver.png";
import ups from "../assets/equipment/ups.png";
import nas from "../assets/equipment/nas.png";

const Equipment = () => {
  const equipment = [
    {
      name: "Router",
      category: "Networking",
      image: router,
      description: [
        "Internet Connection",
        "Ports: 4 LAN, 1 WAN",
        "Wi-Fi: Dual-Band",
        "Features: DHCP, NAT, VPN",
        "Power: 12V DC",
        "Use: Home & Small Office",
      ],
    },

    {
      name: "Network Switch",
      category: "Networking",
      image: switchImg,
      description: [
        "24 Gigabit Ports",
        "PoE: Supported",
        "Features: VLAN, QoS",
        "Type: Layer 2 Switch",
        "Power: 35W",
        "Use: Offices & Companies",
      ],
    },

    {
      name: "Firewall",
      category: "Security",
      image: firewall,
      description: [
        "Cyber Protection",
        "Ports: Gigabit WAN/LAN",
        "VPN: IPSec & SSL",
        "Security: IPS & Malware Filter",
        "Power: 30W",
        "Use: Companies & Data Centers",
      ],
    },

    {
      name: "Wireless Access Point",
      category: "Networking",
      image: accessPoint,
      description: [
        "Wi-Fi 6 (802.11ax)",
        "Port: 1 Gigabit Ethernet",
        "PoE: Supported",
        "Coverage: Up to 250m²",
        "Power: 15W",
        "Use: Homes & Offices",
      ],
    },

    {
      name: "Rack Server",
      category: "Servers",
      image: rackServer,
      description: [
        "CPU: Intel Xeon",
        "Memory: Up to 512GB ECC",
        "Storage: SSD/HDD Bays",
        "Network: Dual 10Gb",
        "Power: Redundant PSU",
        "Use: Companies & Data Centers",
      ],
    },

    {
      name: "NAS Storage",
      category: "Storage",
      image: nas,
      description: [
        "Storage: Up to 80TB",
        "Drive Bays: 4",
        "RAID: 0,1,5,6,10",
        "Network: Dual Gigabit",
        "Power: 60W",
        "Use: Home & Business",
      ],
    },

    {
      name: "UPS",
      category: "Power",
      image: ups,
      description: [
        "Capacity: 1500VA",
        "Output: 8 Outlets",
        "Battery: 15–25 Minutes",
        "Protection: AVR & Surge",
        "Input: AC 230V",
        "Use: Servers & Network",
      ],
    },
  ];

  return (
    <div className="equipment">
      <h1>IT Equipment</h1>

      <p>Browse the recommended IT equipment for different environments.</p>

      <div className="equipmentCards">
        {equipment.map((item) => (
          <EquipmentCard
            key={item.id}
            name={item.name}
            category={item.category}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Equipment;
