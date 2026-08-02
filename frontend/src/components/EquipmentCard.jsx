import React from "react";
import "../styles/EquipmentCard.css";

const EquipmentCard = ({ name, category, description, image }) => {
  return (
    <div className="equipmentCard">
      <img
        src={`https://smart-it-equipment-advisor-2.onrender.comuploads/${image}`}
        alt={name}
        className="equipmentImage"
        onError={(e) => {
          e.target.src = "https://placehold.co/300x200?text=No+Image";
        }}
      />

      <h2>{name}</h2>

      <h4>Category: {category}</h4>

      <ul>
        {Array.isArray(description) ? (
          description.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>{description}</li>
        )}
      </ul>
    </div>
  );
};

export default EquipmentCard;
