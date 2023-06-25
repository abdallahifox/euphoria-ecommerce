"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";
import NavigationDrawer from "./NavigationDrawer";

import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

function NavIcons() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { cartList } = useSelector((state: RootState) => state.cartSlice);
  const { favoriteList } = useSelector(
    (state: RootState) => state.favoriteSlice
  );

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <div className="flex items-center gap-x-2">
      <div className="flex items-center gap-3 md:hidden "></div>
      <Link href="/search" className="md:hidden">
        <div className="relative flex h-6 w-6 items-center justify-center rounded bg-slate-300">
          <Image src="/icons/search.svg" height={20} width={20} alt="heart" />
        </div>
      </Link>
      <Link href="/login">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-slate-300">
          <Image src="/icons/user.svg" height={20} width={20} alt="user" />
        </div>
      </Link>
      <Link href="/fav">
        <div className="relative flex h-6 w-6 items-center justify-center rounded bg-slate-300">
          <Image src="/icons/heart.svg" height={20} width={20} alt="heart" />
          {Object.keys(favoriteList).length > 0 && (
            <>
              <span className="absolute -right-1 -top-1 h-2 w-2 animate-ping rounded-full bg-red-500" />
              <span className="absolute -right-1 -top-1 inline-flex h-2 w-2 rounded-full bg-red-500" />
            </>
          )}
        </div>
      </Link>
      <Link href="/cart">
        <div className="relative flex h-6 w-6 items-center justify-center rounded bg-slate-300">
          <Image
            src="/icons/shopping cart.svg"
            height={20}
            width={20}
            alt="shopping-cart"
          />
          {cartList.length > 0 && (
            <>
              <span className="absolute -right-1 -top-1 h-2 w-2 animate-ping rounded-full bg-red-500" />
              <span className="absolute -right-1 -top-1 inline-flex h-2 w-2 rounded-full bg-red-500" />
            </>
          )}
        </div>
      </Link>
      <div
        className="cursor-pointer md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <AiOutlineMenu size={25} fill="#000" />
      </div>
      <NavigationDrawer isOpen={isOpen} closeDrawer={onCloseDrawer} />
    </div>
  );
}

export default NavIcons;
