import React from "react";
import Hero from "../../components/Hero";
import Main from "../../components/Main";

const Home = () => {
  return (
    <div>
      <Hero autoPlay="true" infinite="true" deviceType="desktop" />
      <Main />
    </div>
  );
};

export default Home;
