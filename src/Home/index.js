import React, { useState } from "react";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Delivery from "../components/delivery";
import Daining from "../components/diningOut";
import Nightlife from "../components/nightlife";

const Home = () => {
  const [screen, setScreen] = useState("Delivery");

  const getScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;
      case "Dining Out":
        return <Daining />;
      case "Nightlife":
        return <Nightlife />;
      default:
        break;
    }
  };
  return (
    <div>
      <Header />
      <Navigation screen={screen} setScreen={setScreen} />
      {getScreen(screen)}
      <Footer />
    </div>
  );
};

export default Home;
