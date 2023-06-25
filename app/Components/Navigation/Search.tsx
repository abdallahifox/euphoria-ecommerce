import React from "react";
import Image from "next/image";
function Search() {
  return (
    <div className="relative hidden md:flex flex-row items-center">
      <input
        type="text"
        className="w-[267px] py-3 px-5 rounded bg-light-gray indent-5  text-lable focus:border-none focus:outline-none "
        placeholder="Search"
      />
      <div className="absolute left-2 top-3">
        <Image
          src="/icons/search.svg"
          width={15}
          height={20}
          alt="search-icon"
        />
      </div>
    </div>
  );
}

export default Search;
