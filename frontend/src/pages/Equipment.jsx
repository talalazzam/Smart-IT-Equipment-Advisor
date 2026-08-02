import React, { useEffect, useState } from "react";
import axios from "axios";
import EquipmentCard from "../components/EquipmentCard";
import "../styles/Equipment.css";

const Equipment = () => {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    loadEquipment();
  }, []);

  const loadEquipment = async () => {
    try {
      const response = await axios.get(
        "https://smart-it-equipment-advisor-2.onrender.com/equipment",
      );
      setEquipment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="equipmentPage">
      <h1>IT Equipment</h1>

      <div className="equipmentGrid">
        {equipment.map((item) => (
          <EquipmentCard
            key={item.id}
            name={item.name}
            category={item.category}
            image={item.image}
            description={[item.description]}
          />
        ))}
      </div>
    </div>
  );
};

export default Equipment;
