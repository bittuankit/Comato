import React from "react";
import "./diningOut.css";
import Filter from "../filter";
import DiningCollections from "../diningCollections";
import DiningData from "../diningCollections/diningData";

const diningFilter = [
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
    name: "Outdoor Seating",
  },
  {
    id: 4,
    name: "Serves Alcohol",
  },
  {
    id: 5,
    name: "Open Now",
  },
];

const Dining = () => {
  return (
    <>
      <DiningCollections />
      <Filter filters={diningFilter} />
      <DiningData />
    </>
  );
};

export default Dining;
