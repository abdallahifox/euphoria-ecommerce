import React from "react";
import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
    <Link href="/">
      <Image src="/Logo.png" width={100} height={100} alt="Logo" />
    </Link>
  );
}

export default Logo;
