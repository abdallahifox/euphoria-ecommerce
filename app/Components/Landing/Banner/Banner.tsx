import React from "react";

function Banner() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className=" py-6 px-2 flex h-full items-center justify-center rounded bg-cover bg-center bg-[url('/tree.png')]">
        <div className="flex flex-col items-start">
          <h1 className="mb-3 text-3xl uppercase text-white">
            we made your every day <br />
            fashoin better!
          </h1>
          <p className="text-md tracking-tight text-white">
            In our journey to improve everyday fashion , <br /> euphoria
            presents EVERYDAY wear range -<br /> Comfortable & Affordable
            fashion 24/7
          </p>
          <button className="mt-10 rounded bg-light-gray px-4 py-2 text-black transition hover:bg-dark-gray hover:text-white">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex h-full items-start">
        <img src="/banner.png" alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
