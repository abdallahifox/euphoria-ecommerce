"use client";
import React from "react";

//Components
import DesktopLinks from "./DesktopLinks";
import Logo from "./Logo";
import Search from "./Search";
import NavIcons from "./NavIcons";

function Navigation() {
  return (
    <header className="py-4 sticky z-20 top-0 bg-white shadow-md">
      <nav className="appContainer flex flex-row items-center justify-between gap-x-2">
        {/* Logo */}
        <Logo />
        {/* Links Desktop */}
        <DesktopLinks />
        {/* Search Bar */}
        <Search />
        {/* Icons */}
        <NavIcons />
      </nav>
    </header>
  );
}

export default Navigation;
