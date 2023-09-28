import React from "react";
import "./brandItems.css";

const BrandsItem = ({ item }) => {
  return (
    <div className="brandsItem">
      <div className="brandsItemImage">
        <img src={item.image_url} alt={item.name} />
        <div className="brands-item-title">{item.title}</div>
        <p>{item.time}</p>
      </div>
    </div>
  );
};

export default BrandsItem;
