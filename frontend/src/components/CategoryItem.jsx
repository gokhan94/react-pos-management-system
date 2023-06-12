import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <li>
      <a href={`/dashboard/category/${category.category.toLowerCase()}`}>
        {category.image ? (
          <img src={category.image} alt="..." />
        ) : (
          <img src={require("../images/category.png")} alt="..." />
        )}
        <span>{category.category.split("-").join(" ")}</span>
      </a>
    </li>
  );
};

export default CategoryItem;
