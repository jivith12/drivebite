import React from "react";
export default function CategoryBar({ categories, selected, onSelect }) {
  return (
    <div className="category-bar">
      {categories.map(category => (
        <button key={category} className={selected === category ? "category active" : "category"} onClick={() => onSelect(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}