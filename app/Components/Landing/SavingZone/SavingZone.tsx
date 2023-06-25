import React from "react";
import Link from "next/link";

function SavingZone() {
  return (
    <div>
      <h1 className="relative text-3xl text-dark-gray">
        <span className="text-bold absolute -left-4 text-primary ">|</span>
        Big Saving Zone
      </h1>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link href="/">
          <img src="/Saving2.png" alt="Saving2" className="object-contain w-full h-full"/>
        </Link>
        <Link href="/">
          <img src="/Saving1.png" alt="Saving1" className="object-contain w-full h-full"/>
        </Link>
        <Link href="/">
          <img src="/Saving4.png" alt="Saving4" className="object-contain w-full h-full"/>
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/">
          <img src="/Saving3.png" alt="Saving3" className="object-contain w-full h-full"/>
        </Link>
        <Link href="/">
          <img src="/Saving5.png" alt="Saving5" className="object-contain w-full h-full"/>
        </Link>
      </div>
    </div>
  );
}

export default SavingZone;
