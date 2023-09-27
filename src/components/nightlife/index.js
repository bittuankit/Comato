import React from "react";
import "./nightlife.css";
import Filter from "../filter";

const nightlifeFilter = [
  {
    id: 1,
    name: "Filters",
    icon: <i class="fa-solid fa-bars delivery-bar"></i>,
  },
  {
    id: 2,
    name: "Gold",
  },
  {
    id: 3,
    name: "Distance",
  },
  {
    id: 4,
    name: "Rating: 4.0+",
  },
  {
    id: 5,
    name: "Pubs & Bars",
  },
];

const Nightlife = () => {
  return (
    <div>
      <Filter filters={nightlifeFilter} />
    </div>
  );
};

export default Nightlife;
