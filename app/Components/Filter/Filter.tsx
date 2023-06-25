"use client";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const filterArray = [
  "top",
  "printed t-shirts",
  "kurti",
  "boxers",
  "full sleeve",
  "joggers",
  "payjamas",
  "jeans",
];
const filterArrayPrice = ["100-200", "300-600", "700-1200"];
function FilterComponent() {
  const [showFilter, setShowFilter] = useState(true);
  const [showFilterPrice, setShowFilterPrice] = useState(true);
  return (
    <>
      <div
        className="flex w-full cursor-pointer items-center justify-between p-4 hover:bg-slate-200/75"
        onClick={() => setShowFilter((prev) => !prev)}
      >
        <p className="text-md text-gray">Filter</p>
        <AiOutlineArrowRight
          size={20}
          fill="#000"
          className={`mr-3 ${showFilter ? "rotate-90" : "rotate-0"}`}
          role="button"
        />
      </div>
      <div
        className={`flex md:flex-col flex-wrap mx-auto gap-y-3 gap-x-2 p-4 filter transition ${
          showFilter ? "block " : "hidden"
        }`}
      >
        {filterArray.map((category, i) => {
          return (
            <a
              role="button"
              key={i}
              className="text-md capitalize text-gray"
              href={`#${category}`}
            >
              {category}
            </a>
          );
        })}
      </div>
      <div
        className="flex w-full cursor-pointer items-center justify-between p-4 hover:bg-slate-200/75"
        onClick={() => setShowFilterPrice((prev) => !prev)}
      >
        <p className="text-md text-gray">Price</p>
        <AiOutlineArrowRight
          size={20}
          fill="#000"
          className={`mr-3 ${showFilterPrice ? "rotate-90" : "rotate-0"}`}
          role="button"
        />
      </div>
      <div
        className={`flex flex-wrap gap-x-2 md:flex-col gap-y-3 p-4 filter transition ${
          showFilterPrice ? "block " : "hidden"
        }`}
      >
        {filterArrayPrice.map((price, i) => {
          return (
            <a
              role="button"
              key={i}
              className="text-md capitalize text-gray"
              href={`#${price}`}
            >
              EGP {price}
            </a>
          );
        })}
      </div>
    </>
  );
}

export default FilterComponent;
