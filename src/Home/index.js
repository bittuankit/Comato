import React, { useState } from "react";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Delivery from "../components/delivery";
import Dining from "../components/diningOut";
import Nightlife from "../components/nightlife";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  const getScreen = (tab) => {
    switch (tab) {
      case "Delivery":
        return <Delivery />;
      case "Dining":
        return <Dining />;
      case "Nightlife":
        return <Nightlife />;
      default:
        return <Delivery />;
    }
  };
  return (
    <div>
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {getScreen(activeTab)}
      <Footer />
    </div>
  );
};

export default Home;
