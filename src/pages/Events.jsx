import React from "react";
import ThreadsKnots from "../components/Events components/ThreadsKnots";
import BuildingEvents from "../components/Events components/BuildingEvents.JSX";
import AnnualSamrasMela from "../components/Events components/AnnualSamrasMela";
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
