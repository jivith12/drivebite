import React, { useState } from "react";
import { X } from "lucide-react";

export default function CustomizationModal({ item, onClose, onAdd }) {
  const [choice, setChoice] = useState("Original");

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" onMouseDown={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X /></button>
        <img src={item.image} alt={item.name} />
        <div className="modal-content">
          <p className="eyebrow">{item.category}</p>
          <h2>{item.name}</h2>
          <p>{item.description}</p>

          <h4>Customize your meal</h4>
          <div className="customization-options">
            <button className={choice === "Original" ? "selected" : ""} onClick={() => setChoice("Original")}>Original</button>
            {item.customizations.map(option => (
              <button key={option} className={choice === option ? "selected" : ""} onClick={() => setChoice(option)}>{option}</button>
            ))}
          </div>

          <button className="full-add-button" onClick={() => onAdd(item, choice)}>Add to Cart · ₹{item.price}</button>
        </div>
      </div>
    </div>
  );
}