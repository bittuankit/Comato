import React from "react";
import "./collectionItem.css";

const ColletionItem = ({ item }) => {
  return (
    <div>
      <div className="item-wrapper">
        <img src={item.image_url} alt="collections-image" />
      </div>
    </div>
  );
};

export default ColletionItem;
