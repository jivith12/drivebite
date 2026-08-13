import React from "react";
import { Plus, SlidersHorizontal } from "lucide-react";

export default function FoodCard({ item, onCustomize, onAdd }) {
  return (
    <article className="food-card">
      <div className="food-image-wrap">
        <img
          src={item.image}
          alt={item.name}
          className="food-image"
        />

        {item.popular && (
          <span className="popular-tag">🔥 Popular</span>
        )}
      </div>

      <div className="food-info">
        <div className="food-title-row">
          <h3>{item.name}</h3>
          <strong>₹{item.price}</strong>
        </div>

        <p>{item.description}</p>

        <div className="food-actions">
          <button
            className="customize-button"
            onClick={() => onCustomize(item)}
          >
            <SlidersHorizontal size={16} />
            Customize
          </button>

          <button
            className="add-button"
            onClick={() => onAdd(item, "Original")}
          >
            <Plus size={18} />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}