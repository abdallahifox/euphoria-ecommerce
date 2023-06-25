import React from "react";
import SingleBox from "../SingleBox";
import { Products } from "@/app/Helpers/Constant";

const womensCategories = Products.filter(prod => prod.category === 'womens').splice(5)

function LimeLight() {
  return (
    <div>
      <h1 className="relative text-3xl text-dark-gray">
        <span className="text-bold absolute -left-4 text-primary ">|</span>
        In The Limelight
      </h1>

      <div className="gird cols-1 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
      {womensCategories.map(prod => {
          return (

            <SingleBox explore={false} icon={false} imgURL={prod.image} title={prod.title}  id={prod.id} brand={prod.brand} price={prod.price.toString()} heart={true}/>
          )
        })}
      </div>
    </div>
  );
}

export default LimeLight;
