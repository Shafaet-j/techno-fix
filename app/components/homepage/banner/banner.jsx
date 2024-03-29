"use client";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section className=" flex items-center py-16 px-5">
      <div className="max-w-[1140px] mx-auto lg:flex lg:gap-16">
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between mb-10 lg:mb-0 gap-5"
        >
          <h1 className=" text-3xl lg:text-5xl font-bold text-blackis text-left">
            Take ideas from <br /> better to best
          </h1>
          <p className=" text-grey/60">
            Miro is your team's visual platform to connect,
            <br /> collaborate, and create — together.
          </p>
          <input
            className=" border border-grey/50 pl-[25px] py-2 rounded-full lg:w-[440px] w-full"
            type="text"
            placeholder="Enter your work email"
          />
          <button className=" flex items-center gap-2 bg-blue rounded-full text-white py-[12px] lg:w-[440px] w-full text-center justify-center">
            Sign up free
            <IoIosArrowRoundForward />
          </button>
          <p className=" text-grey/50">
            Collaborate with your team within minutes
          </p>
          <div className=" bg-[#F5F5F7] rounded-lg flex items-center justify-between p-[14px]">
            <div>
              <div className=" flex items-center gap-1 text-[#FF9D48]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <p>Based on 5149+ reviews:</p>
            </div>
            <div className=" flex items-center gap-5">
              <img className="w-full object-cover" src="./Gicon.png" alt="" />
              <img className=" w-[50px] h-[32px]" src="./icon2.png" alt="" />
              <img className=" w-[50px] h-[32px]" src="./icon3.png" alt="" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 100 }}
          transition={{ duration: 0.5 }}
        >
          {/* <img className="w-full " src="./hero.png" alt="" /> */}
          <Image
            className=" w-full h-full object-cover"
            width={640}
            height={462}
            src="/hero.png"
            alt="banner"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
