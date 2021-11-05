import React from "react";
import "../../App.scss";
import CardsContainer from "../CardsContainer";
import HomeContainer from "../HomeContainer";
import FormContainer from "../FormContainer";

function Home() {
  return (
    <>
      <div className="home-wrapper">
        <HomeContainer />
        <CardsContainer />
        <FormContainer />
      </div>
    </>
  );
}

export default Home;
