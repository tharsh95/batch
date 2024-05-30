"use client";
import { Menu, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import ThemeSwitch from "../ThemeSwitch";

const Nav = () => {
  
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <nav className="p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold"></div>
        <div className="md:hidden">
          <button className="" onClick={toggle}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li className="py-2">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="py-2">
            <Link href="/">Works</Link>
          </li>
          <li className="py-2">
            <Link href="/">Contact</Link>
          </li>
          <li className="py-3">
            <ThemeSwitch />
          </li>
        </ul>
      </div>
      {open && (
        <>
          <ul className="md:hidden flex-col  ">
            <li className="py-2">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="py-2">
              <Link href="/">Works</Link>
            </li>
            <li className="py-2">
              <Link href="/">Contact</Link>
            </li>
            <li className="py-2">
              <ThemeSwitch />
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Nav;
