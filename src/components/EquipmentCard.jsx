import React from "react";

const EquipmentCard = ({ name, category, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="equipmentImage" />

      <h2>{name}</h2>

      <h4>Category: {category}</h4>

      <ul className="equipmentDescription">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EquipmentCard;
