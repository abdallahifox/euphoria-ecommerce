import React from "react";
import {
  Banner,
  Brands,
  Card,
  Feedback,
  Hero,
  LimeLight,
  MensCategory,
  NewArrival,
  SavingZone,
  WomanCategory,
} from "./Components";

function Home() {
  return (
    <>
      <Hero />
      <div className="appContainer mt-16">
        <div className="grid grid-rows-2 gap-4 sm:grid-cols-2 sm:grid-rows-1">
          <Card
            upperTitle="Low Price"
            title="High Conziness"
            discount={50}
            imgURL="bg-card1"
            link="/"
            classes="bg-gradient-to-r from-yellow-600 to-yellow-400"
          />
          <Card
            upperTitle="Beyoung Present"
            title="Brezzy Summer Style"
            imgURL="bg-card2"
            discount={50}
            link="/"
            classes="bg-gradient-to-r from-purple-600 to-purple-400"
          />
        </div>
      </div>
      <div className="appContainer mt-16">
        <NewArrival />
      </div>
      <div className="appContainer mt-16">
        <SavingZone />
      </div>
      <div className="appContainer mt-16">
        <Banner />
      </div>
      <div className="appContainer mt-16">
        <MensCategory />
      </div>
      <div className="appContainer mt-16">
        <WomanCategory />
      </div>
      <div className="appContainer mt-16">
        <Brands />
      </div>
      <div className="appContainer mt-16">
        <LimeLight />
      </div>
      <div className="appContainer mt-16 hidden md:block">
        <Feedback />
      </div>
    </>
  );
}

export default Home;
