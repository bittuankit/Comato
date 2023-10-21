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
      <div className="food-wrapper">
        {data.map((e) => {
          return (
            <>
              <div key={e._id}>
                <div className="food-box">
                  <img src={e.img} alt={e.name} />
                  <div className="box">
                    <h6>{e.name}</h6>
                    <span className="rating">
                      {(Math.random() * 5).toFixed(1)}
                      <i class="fa-solid fa-star"></i>
                    </span>
                  </div>
                  <div className="box">
                    <p>{e.CategoryName}</p>
                    <p>
                      <span className="price">
                        &#8377;{e.options[0].half ? e.options[0].half : 150}
                      </span>{" "}
                      / half
                    </p>
                  </div>
                  <div className="time">
                    <span>{Math.floor(Math.random() * 30)} min</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FoodData;
