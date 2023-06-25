import React from "react";
import SingleBox from "../SingleBox";
import { Products } from "@/app/Helpers/Constant";

const womensCategories = Products.filter(prod => prod.category === 'womens').splice(0,4)
function WomanCategory() {
  return (
    <div>
      <h1 className="relative text-3xl text-dark-gray">
        <span className="text-bold absolute -left-4 text-primary ">|</span>
        Categoires For Women
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {womensCategories.map(prod => {
          return (

            <SingleBox explore={true} icon={true} imgURL={prod.image} title="Shirts"  id={prod.id}/>
          )
        })}
      </div>
    </div>
  );
}

export default WomanCategory;
