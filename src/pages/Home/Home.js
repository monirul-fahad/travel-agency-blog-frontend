import React from "react";
import Footer from "../../common/Footer";
import Hero from "../../components/Hero";
import Main from "../../components/Main";

const Home = () => {
  return (
    <div>
      <Hero autoPlay="true" infinite="true" deviceType="desktop" />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
