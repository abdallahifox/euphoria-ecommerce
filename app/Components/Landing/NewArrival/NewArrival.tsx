import React from "react";
import SingleBox from "../SingleBox";

function NewArrival() {
  return (
    <div>
      <h1 className="relative text-3xl text-dark-gray">
        <span className="text-bold absolute -left-4 text-primary ">|</span>
        New Arrival
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <SingleBox explore={false} icon={false} imgURL="/Arrival1.png" title="Knitted Joggers" id={5}/>
        <SingleBox explore={false} icon={false} imgURL="/Arrival2.png" title="Full Sleeve" id={6}/>
        <SingleBox explore={false} icon={false} imgURL="/Arrival3.png" title="Active T-shirts" id={10}/>
        <SingleBox explore={false} icon={false} imgURL="/Arrival4.png" title="Urbon Shirts" id={14}/>
      </div>
    </div>
  );
}

export default NewArrival;
