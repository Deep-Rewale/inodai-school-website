import React from "react";
import ThreadsKnots from "../components/Eventss/ThreadsKnots";
import BuildingEvents from "../components/Eventss/BuildingEvents.JSX";
import AnnualSamrasMela from "../components/Eventss/AnnualSamrasMela";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <div>
      <ThreadsKnots />
      <BuildingEvents />
      <AnnualSamrasMela />
      <Footer />
    </div>
  );
};

export default Events;
