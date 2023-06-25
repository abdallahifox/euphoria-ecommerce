"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const NavigationLinks = ["shop", "men", "woman"];

type open = {
  isOpen: boolean;
  closeDrawer: () => void;
};

function NavigationDrawer({ isOpen, closeDrawer }: open) {
  return (
    <div
      className={`${
        !isOpen
          ? "-translate-x-[240px]"
          : "translate-x-[0px] transition duration-300 ease-in-out"
      } z-51 fixed left-0 top-0 h-full w-[240px] bg-white p-2 shadow-lg`}
    >
      <div className="mt-4 flex flex-col items-start">
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <Image src="/Logo.png" width={100} height={100} alt="logo" />
          </Link>
          <AiOutlineClose
            size={20}
            role="button"
            onClick={() => closeDrawer()}
          />
        </div>
        <br />
        <div className="flex h-[2px] w-full bg-black/50" />
      </div>

      <div className="mt-5 flex flex-col items-start gap-y-5">
        {NavigationLinks.map((link, i) => {
          return (
            <Link key={i} href={link} onClick={() => closeDrawer()}>
              <span className="text-md capitalize text-dark-gray transition hover:text-primary">
                {link}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavigationDrawer;
