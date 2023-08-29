import React from "react";

function Filter({ onCategoryChange }) {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <div className="filter">
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="food">Food</option>
        <option value="electronics">Electronics</option>
        {/* Add more categories as needed */}
      </select>
    </div>
    );
}

export default Filter;