"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "../components/Button";
import { NAV_lINKS } from "../constants/index";

const Navbar = () => {
  const pathNmae = usePathname();
  const [isActiveNav, setIsActiveNave] = useState(false);

  return (
    <nav
      className={`max-container padding-container flexBetween py-3  ${
        isActiveNav ? "activeNavbar" : ""
      }`}
    >
      <ul className={`hidden lg:flex ${isActiveNav ? "activeNavLink" : ""}`}>
        {NAV_lINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`medium-16 w-full text-center py-[5px] px-[14px] rounded-full transition-all hover:bg-violet-2 ${
              pathNmae === link.href ? "bg-violet-2" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={124} height={50} />
      </Link>

      <div className={`hidden lg:flex ${isActiveNav ? "activeNavButton" : ""}`}>
        <Button
          type="button"
          title="Login/Register"
          icon="/user.svg"
          variant="btn_white"
        />
        <Button
          type="button"
          title="Add Listing"
          icon="/home.svg"
          variant="btn_blue"
        />
      </div>
      <Image
        src={isActiveNav ? "/close.svg" : "/menu.svg"}
        alt="menu"
        width={24}
        height={isActiveNav ? 24 : 22}
        className="block cursor-pointer lg:hidden"
        onClick={() => setIsActiveNave(!isActiveNav)}
      />
    </nav>
  );
};

export default Navbar;
