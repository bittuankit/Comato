import React from "react";
import Header from "../components/header";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      {/* screen change  */}
      <Footer />
    </div>
  );
};

export default Home;
