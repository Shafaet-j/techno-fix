import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

import React from "react";

const Navbar = () => {
  return (
    <header className=" bg-white px-8 py-6 shadow">
      <div className=" flex items-center justify-between">
        <div className=" flex items-center gap-5 text-blackis">
          <img src="./logoT.png" alt="" />
          <p className=" flex items-center gap-1 hover:text-blue duration-300 cursor-pointer">
            <span>Product</span>
            <MdOutlineKeyboardArrowDown />
          </p>
          <p className=" flex items-center gap-1 hover:text-blue duration-300 cursor-pointer">
            <span>Solutions</span>
            <MdOutlineKeyboardArrowDown />
          </p>
          <p className=" flex items-center gap-1 hover:text-blue duration-300 cursor-pointer">
            <span>Resources</span>
            <MdOutlineKeyboardArrowDown />
          </p>
          <p className=" flex items-center gap-1 hover:text-blue duration-300 cursor-pointer">
            <span>Enterprise</span>
          </p>
          <p className=" flex items-center gap-1 hover:text-blue duration-300 cursor-pointer">
            <span>Pricing</span>
          </p>
        </div>
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
    </header>
  );
};

export default Navbar;
