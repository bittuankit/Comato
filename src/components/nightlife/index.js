import React from "react";
import "./nightlife.css";
import Filter from "../filter";
import NightlifeCollections from "../nightlifeCollections";
import NightlifeData from "./nightlifeData";

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
      <NightlifeCollections />
      <Filter filters={nightlifeFilter} />
      <NightlifeData />
    </div>
  );
};

export default Nightlife;
