import React from "react";

function Brands() {
  return (
    <div className="rounded bg-dark-gray py-4">
      <div className="text-center">
        <h1 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-6xl">
          Top Brand Deal
        </h1>
        <p className="text-xl text-white">
          Up To <span className="text-yellow-500">60%</span> Off On Brands
        </p>
      </div>

      <div className="mx-auto max-w-4xl py-4">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">
          <img src="/Brand1.png" alt="Brand-1" />
          <img src="/Brand2.png" alt="Brand-2" />
          <img src="/Brand3.png" alt="Brand-3" />
          <img src="/Brand4.png" alt="Brand-4" />
          <img src="/Brand5.png" alt="Brand-5" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
