"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
function NoCart() {
  const pathname = usePathname();
  return (
    <div className="grid place-items-center">
      <div className="flex items-center justify-center">
        {pathname !== "/fav" && (
          <img
            src="/cart.png"
            alt="no-cart"
            className="w-full object-contain"
          />
        )}
        {pathname === "/fav" && (
          <img
            src="/nofav.png"
            alt="no-cart"
            className="w-full object-contain"
          />
        )}
      </div>
      <div className="felx items-center justify-center text-3xl text-dark-gray">
        {" "}
        No {pathname !== "/fav" && "Cart Items"} Available
      </div>
      {pathname === "/fav" && (
        <div className="felx items-center justify-center">
          <h2 className="text-center text-4xl text-dark-gray">
            Your wishlist is empty.
          </h2>{" "}
          <p className="text-center text-sm text-gray">
            You don’t have any products in the wishlist yet. You will find a lot
            of interesting products on our Shop page.
          </p>
        </div>
      )}
      <button className="mt-4 rounded bg-primary px-8 py-4 text-white hover:bg-dark-gray">
        <Link href="/category/shop">Go To Shopping</Link>
      </button>
    </div>
  );
}

export default NoCart;
