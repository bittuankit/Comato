import axios from "axios";
import React, { useState, useEffect } from "react";
import "./foodData.css";

const FoodData = () => {
  const URL = "https://foodzie-server.vercel.app/api/foodData";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(URL).then((res) => {
      setData(res.data.food_items);
    });
  }, []);
  return (
    <>
      <h1>Best Food in Bengaluru</h1>
      <h1>
        {data.map((e) => {
          return (
            <>
              <div className="food-wrapper">
                <div key={e._id} className="food-box">
                  <img src={e.img} alt={e.name} />
                  <h6>{e.name}</h6>
                </div>
              </div>
            </>
          );
        })}
      </h1>
    </>
  );
};

export default FoodData;
