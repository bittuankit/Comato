import React from "react";
import "./deliveryItem.css";

const DeliveryItem = ({ item }) => {
  return (
    <div className="deliveryItem">
      <div className="deliveryItemImage">
        <img src={item.image_url} alt={item.name} />
        <div className="delivery-item-title">{item.title}</div>
      </div>
    </div>
  );
};

export default DeliveryItem;
