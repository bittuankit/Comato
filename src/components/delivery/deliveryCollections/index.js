import React from "react";
import "./deliveryCollections.css";
import Slider from "react-slick";
import DeliveryItem from "../deliveryItem";
import NextArrow from "../../carousel/nextArrow";
import PrevArrow from "../../carousel/prevArrow";

const deliveryItems = [
  {
    id: 1,
    title: "Dosa",
    image_url:
      "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
  },
  {
    id: 2,
    title: "Idli",
    image_url:
      "	https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
  },
  {
    id: 3,
    title: "Sandwich",
    image_url:
      "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
  },
  {
    id: 4,
    title: "Pizza",
    image_url:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  },
  {
    id: 5,
    title: "Biryani",
    image_url:
      "	https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
  },
  {
    id: 6,
    title: "Cake",
    image_url:
      "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
  },
  {
    id: 7,
    title: "Thali",
    image_url:
      "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
  },
  {
    id: 8,
    title: "South Indian",
    image_url:
      "	https://b.zmtcdn.com/data/o2_assets/e1b5ebed94e25d832f8dea96824537521678798686.png",
  },
  {
    id: 9,
    title: "Paratha",
    image_url:
      "	https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
  },
  {
    id: 10,
    title: "Burger",
    image_url:
      "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
  },
  {
    id: 11,
    title: "Veda",
    image_url:
      "https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const deliveryCollections = () => {
  return (
    <div className="collection-container">
      <h2 className="common-collection-txt">
        Inspiration for your first order
      </h2>
      <div className="image-container">
        <Slider {...settings}>
          {deliveryItems.map((e) => {
            return (
              <div>
                <DeliveryItem item={e} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default deliveryCollections;
