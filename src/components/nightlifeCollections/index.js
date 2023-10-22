import React from "react";
import "./nightlifeCollections.css";
import Slider from "react-slick";
import NextArrow from "../carousel/nextArrow";
import PrevArrow from "../carousel/prevArrow";
import ColletionItem from "./CollectionItem";

const collectionsData = [
  {
    id: 1,
    image_url:
      "https://mimosakitchenandbath.com/wp-content/uploads/2020/10/photo-1578474846511-04ba529f0b88-600x900.jpg",
  },
  {
    id: 2,
    image_url:
      "https://th.bing.com/th/id/R.60e5ea5091b2a85105d21c5ca4e9eee2?rik=bFuklXkSntGTcg&riu=http%3a%2f%2fwww.breckenridgegetaway.com%2fwp-content%2fuploads%2f2017%2f11%2fBest-Bars-and-Nightlife-Spots-in-Breckenridge-1-846x564.jpg&ehk=NQYSuIWt5%2bog1lo4ClCjKLNCFbaNwgm3UbUUY0qq1Ew%3d&risl=&pid=ImgRaw&r=0",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const NightlifeCollections = () => {
  return (
    <div>
      <div className="collection">
        <h1>Collections</h1>
        <div className="collection-wrapper">
          <div className="collections-header">
            <p>
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Bengaluru, based on trends
            </p>
            <a className="collection-link" href="#">
              All collections in Bengaluru
              <i class="fa-solid fa-caret-right"></i>
            </a>
          </div>
          <div className="images-wrapper">
            <Slider {...settings}>
              {collectionsData.map((e) => {
                return (
                  <div key={e.id}>
                    <ColletionItem item={e} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightlifeCollections;
