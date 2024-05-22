import React, { useState } from "react";
import "./_categoriesBar.scss";

const CategoriesBar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="categoriesBar">
      {categories.map(({ id, snippet: { title, channelId } }) => (
        <span
          onClick={() => setSelectedCategory(id)}
          key={id}
          className={selectedCategory === id ? "active" : ""}
        >
          {title}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
