import React from "react";
import Link from "next/link";
const NavigationLinks = ["shop", "mens", "womens"];
function DesktopLinks() {
  return (
    <div className="hidden items-center gap-x-4 md:flex">
      {NavigationLinks.map((link, i) => {
        return (
          <Link key={i} href={'/category/'+link}>
            <span className="text-md capitalize text-dark-gray transition hover:text-primary">
              {link}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default DesktopLinks;
