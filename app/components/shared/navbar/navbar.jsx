"use client";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaGlobe, FaWindowClose } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

import React, { useState } from "react";
import MobileMenu from "./mobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const navlinks = [
    {
      path: "/",
      title: "Product",
    },
    {
      path: "/solution",
      title: "Solutions",
    },
    {
      path: "/resource",
      title: "Resources",
    },
    {
      path: "/enterprice",
      title: "Enterprise",
    },
    {
      path: "/price",
      title: "Pricing",
    },
  ];
  return (
    <header className=" bg-white px-8 py-6 shadow sticky top-0 z-50">
      <div className=" flex items-center justify-between max-w-[1440px] mx-auto">
        <div className=" flex items-center gap-5 text-blackis">
          <img src="./logoT.png" alt="" />
          <div className=" hidden lg:block">
            <div className=" flex items-center gap-4">
              {navlinks.map(({ path, title }) => (
                <p className=" flex items-center gap-1 hover:text-blue duration-300 cursor-pointer">
                  <span>{title}</span>
                  <MdOutlineKeyboardArrowDown />
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className=" hidden lg:block">
          <div className=" flex items-center gap-5 text-blackis">
            <p className=" flex items-center gap-1 hover:text-blue duration-300 cursor-pointer">
              <span>EN</span>
              <FaGlobe />
            </p>
            <p className="  hover:text-blue duration-300 cursor-pointer">
              <span>Contact Sales</span>
            </p>
            <p className="  hover:text-blue duration-300 cursor-pointer">
              <span>Login</span>
            </p>
            <p className=" flex items-center gap-1 bg-blue px-6 py-4 rounded-full text-white hover:bg-blue/85 duration-300 cursor-pointer">
              <span>Sign up free</span>
              <IoIosArrowRoundForward />
            </p>
          </div>
        </div>
        <div className=" lg:hidden" onClick={showDrawer}>
          {open ? <FaWindowClose size={25} /> : <FaBars size={25} />}
        </div>
        <div
          className={` absolute duration-300 ease-out ${
            open ? " right-14 top-0" : "right-14 -top-[15rem]"
          }`}
        >
          <MobileMenu onClose={onClose} open={open} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
