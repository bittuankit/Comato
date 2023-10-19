import React from "react";
import Slider from "react-slick";
import NextArrow from "../../carousel/nextArrow";
import PrevArrow from "../../carousel/prevArrow";
import BrandsItem from "./brandsItem";
import "./brands.css";

const brandsItem = [
  {
    id: 1,
    title: "Meghana Foods",
    image_url:
      "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
    time: "41 min",
  },
  {
    id: 2,
    title: "Domino's Pizza",
    image_url:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp",
    time: "30 min",
  },
  {
    id: 3,
    title: "Empire Restaurant",
    image_url:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
    time: "31 min",
  },
  {
    id: 4,
    title: "Truffles",
    image_url:
      "https://b.zmtcdn.com/data/brand_creatives/logos/239f872f52291fe253a37cc8dd16188f_1663838300.png?output-format=webp",
    time: "27 min",
  },
  {
    id: 5,
    title: "Burger King",
    image_url:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
    time: "27 min",
  },
  {
    id: 6,
    title: "California Burrito",
    image_url:
      "https://b.zmtcdn.com/data/brand_creatives/logos/b9ffb4c181468da1f2b0eebd9ba70415_1643780686.png?output-format=webp",
    time: "26 min",
  },
  {
    id: 7,
    title: "McDonald's",
    image_url:
      "https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983621.png?output-format=webp",
    time: "28 min",
  },
  {
    id: 8,
    title: "KFC",
    image_url:
      "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
    time: "45 min",
  },
  {
    id: 9,
    title: "Fresh Menu",
    image_url:
      "	https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png?output-format=webp",
    time: "28 min",
  },
  {
    id: 10,
    title: "A2B - Adyar Ananda Bhavan",
    image_url:
      "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505477.png?output-format=webp",
    time: "30 min",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Brands = () => {
  return (
    <div className="brands-container">
      <h2 className="common-collection-txt">Top brands for you</h2>
      <div className="image-container">
        <Slider {...settings}>
          {brandsItem.map((e) => {
            return (
              <div key={e.id}>
                <BrandsItem item={e} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
