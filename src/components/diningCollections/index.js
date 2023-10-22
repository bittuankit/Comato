import React from "react";
import "./diningCollections.css";
import ColletionItem from "./collectionItem";
import Slider from "react-slick";
import NextArrow from "../carousel/nextArrow";
import PrevArrow from "../carousel/prevArrow";

const collectionsData = [
  {
    id: 1,
    image_url:
      "https://mimosakitchenandbath.com/wp-content/uploads/2020/10/photo-1578474846511-04ba529f0b88-600x900.jpg",
  },
  {
    id: 2,
    image_url:
      "https://th.bing.com/th/id/R.d280b8114e9e80c09e199f2a4056e3b0?rik=Ycmjou6rbws%2fFg&riu=http%3a%2f%2fnextrestaurants.com%2fwp-content%2fuploads%2f2018%2f09%2fRestaurant-Nightlife-Scene-Tips.png&ehk=7zmk4Zoxev3mXi044ac2%2fHh3vZeXpf3i0FRSX0lAJBA%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    image_url:
      "https://stksteakhouse.com/wp-content/uploads/2018/10/STK_LV_Bistro.jpg",
  },
  {
    id: 4,
    image_url:
      "https://www.fodors.com/wp-content/uploads/2019/08/14_NYCBestNightlife__St.MazieBarSupperClub_15.-HCH_1918.jpg",
  },
  {
    id: 5,
    image_url: "https://wallpaperaccess.com/full/3014596.jpg",
  },
  {
    id: 6,
    image_url:
      "https://www.gannett-cdn.com/-mm-/21f80f9fc7c3bef00c98f76b881bfff3a1361eb0/c=446-0-4436-3000&r=x513&c=680x510/local/-/media/2016/08/24/Phoenix/Phoenix/636076570476740357-different-pointe-of-view.jpg",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const DiningCollections = () => {
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

export default DiningCollections;
