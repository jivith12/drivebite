import React from "react";
import FoodCard from "./FoodCard";

export default function Menu({ items, onCustomize, onAdd }) {
  if (!items.length) {
    return (
      <div className="empty-menu">
        <div>🍔</div>
        <h3>No food found</h3>
        <p>Try another search or category.</p>
      </div>
    );
  }

  return (
    <div className="food-grid">
      {items.map((item) => (
        <FoodCard
          key={item.id}
          item={item}
          onCustomize={onCustomize}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}