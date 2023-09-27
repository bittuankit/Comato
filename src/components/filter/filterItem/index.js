import React from "react";
import "./filterItem.css";

const FilterItem = ({ filter }) => {
  return (
    <div className="filter-item">
      {filter.icon && filter.icon}
      <div className="filter-name">{filter.name}</div>
    </div>
  );
};

export default FilterItem;
