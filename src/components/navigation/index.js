import React from "react";
import "./navigation.css";

const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    bg: "#FCEEC0",
    inactive_img:
      "	https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    active_txt_clr: "#EF4F5F",
  },
  {
    id: 2,
    name: "Dining",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    bg: "#E5F3F3",
    inactive_img:
      "	https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    active_txt_clr: "#EF4F5F",
  },
  {
    id: 3,
    name: "Nightlife",
    active_img:
      "	https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    bg: "#E5F3F3",
    inactive_img:
      "	https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    active_txt_clr: "#EF4F5F",
  },
];

const Navigation = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabWrapper">
      {tabs.map((e) => {
        return (
          <div
            onClick={() => {
              setActiveTab(e.name);
            }}
            className={`tab-items center ${
              activeTab === e.name && "active-tab"
            }`}
          >
            <div
              className="tab-image-container center"
              style={{
                backgroundColor: `${activeTab === e.name ? e.bg : " "}`,
              }}
            >
              <img
                src={activeTab === e.name ? e.active_img : e.inactive_img}
                alt={e.name}
                className="tab-image"
              />
            </div>
            <h3
              style={{
                color: `${activeTab === e.name ? e.active_txt_clr : "#696969"}`,
              }}
            >
              {e.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Navigation;
