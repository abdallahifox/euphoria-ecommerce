import Image from "next/image";
import Link from "next/link";
import React from "react";

interface cardPropsTypes {
  upperTitle: string;
  title: string;
  discount: number;
  link: string;
  imgURL?: string;
  classes: string;
}

function Card({
  upperTitle,
  title,
  discount,
  link,
  imgURL,
  classes,
}: cardPropsTypes) {
  return (
    <div
      className={`flex flex-row justify-between gap-x-4 rounded p-4 ${classes}`}
    >
      <div className="mb-3">
        <p className="mb-3 text-white">{upperTitle}</p>
        <h1 className="mb-3 text-2xl text-light-gray">{title}</h1>
        <p className="mb-3 text-md text-light-gray">Up to {discount} Off</p>
        <Link href={link} className="mt-6 text-white underline">
          {" "}
          Explore Items
        </Link>
      </div>

      <div className={`h-full w-full ${imgURL} bg-cover bg-center bg-no-repeat object-cover hidden md:block`} />
    </div>
  );
}

export default Card;
