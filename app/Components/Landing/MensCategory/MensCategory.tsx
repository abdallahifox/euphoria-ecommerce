import React from "react";
import SingleBox from "../SingleBox";

import { Products } from "@/app/Helpers/Constant";

const mensCategories = Products.filter(prod => prod.category === 'mens').splice(0,2)

function MensCategory() {
  return (
    <div>
      <h1 className="relative text-3xl text-dark-gray">
        <span className="text-bold absolute -left-4 text-primary ">|</span>
        Categoires For Mens
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {mensCategories.map(prod => {
          return (

            <SingleBox explore={true} icon={true} imgURL={prod.image} title="Shirts"  id={prod.id}/>
          )
        })}
      </div>
    </div>
  );
}

export default MensCategory;
