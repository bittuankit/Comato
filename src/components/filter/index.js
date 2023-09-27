import React from "react";
import "./filter.css";
import FilterItem from "./filterItem";

const Filter = ({ filters }) => {
  return (
    <div className="filters">
      {filters.map((e) => {
        return <FilterItem filter={e} key={e.id} />;
      })}
    </div>
  );
};

export default Filter;
