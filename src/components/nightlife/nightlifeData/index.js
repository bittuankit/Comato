import React from "react";
import "./nightlifeData.css";
import FoodData from "../../../data/foodData";

const NightlifeData = () => {
  return (
    <>
      <div className="offerImg">
        <img
          src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
          alt="offer-img"
        />
      </div>
      <FoodData />
    </>
  );
};

export default NightlifeData;
