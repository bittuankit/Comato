import React from "react";
import "./delivery.css";
import Filter from "../filter";
import DeliveryCollections from "./deliveryCollections";
import Brands from "./brands";

const deliveryFilter = [
  {
    id: 1,
    name: "Filters",
    icon: <i class="fa-solid fa-bars delivery-bar"></i>,
  },
  {
    id: 2,
    name: "Rating: 4.0+",
  },
  {
    id: 3,
    name: "Pure Veg",
  },
  {
    id: 4,
    name: "Cuisines",
    icon: <i class="fa-solid fa-caret-down delivery-caret"></i>,
  },
];

const Delivery = () => {
  return (
    <div>
      <Filter filters={deliveryFilter} />
      <DeliveryCollections />
      <Brands />
    </div>
  );
};

export default Delivery;
