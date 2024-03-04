import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#02033B] py-[96px] px-5">
      <div className=" max-w-[1140px] mx-auto md:flex md:flex-wrap md:justify-center lg:gap-16 md:gap-5 gap-y-4">
        <div className=" mb-5 md:mb-0">
          <h2 className=" text-2xl font-black text-white mb-12">
            Scan. Detect. Remove.
          </h2>
          <div className=" flex items-center gap-10 mb-12">
            <FaTwitterSquare color="white" size={36} />
            <FaFacebookSquare color="white" size={36} />
            <FaYoutubeSquare color="white" size={36} />
          </div>
          <div className=" flex items-center gap-6 mb-12">
            <button className=" border-b text-white">Privacy Policy</button>
            <button className=" border-b text-white">
              Terms and conditions
            </button>
          </div>
          <p className=" mb-4 text-white">
            Copyright © 2022 Certo Software Limited | Registered in <br />{" "}
            England & Wales No. 10072356
          </p>
          <p className=" text-white">Designed & developed by Bigger Picture</p>
        </div>
        <div className=" mb-5 md:mb-0">
          <h2 className=" text-4xl font-extrabold text-white border-b pb-6 mb-10">
            Miro.
          </h2>
          <div className=" text-white space-y-[24px]">
            <div className=" flex items-center gap-6">
              <div className=" h-[2px] bg-[#FFC247] w-5"></div>
              <p>iPhone</p>
            </div>
            <div className=" flex items-center gap-6">
              <div className=" h-[2px] bg-[#FFC247] w-5"></div>
              <p>Android</p>
            </div>
            <div className=" flex items-center gap-6">
              <div className=" h-[2px] bg-[#FFC247] w-5"></div>
              <p>Help</p>
            </div>
            <div className=" flex items-center gap-6">
              <div className=" h-[2px] bg-[#FFC247] w-5"></div>
              <p>About</p>
            </div>
            <div className=" flex items-center gap-6">
              <div className=" h-[2px] bg-[#FFC247] w-5"></div>
              <p>Insights</p>
            </div>
          </div>
        </div>
        <div
          style={{
            background:
              "url(./newsletter.png) center center / contain no-repeat",
            width: "400px",
            height: "232px",
          }}
          className=" md:p-11 p-7 flex items-center justify-center"
        >
          <div>
            <p className=" text-lg md:text-2xl text-blackis font-extrabold">
              Sign up to our newsletter
            </p>
            <p className=" text-blackis mb-9">
              Receive the latest mobile security news, exclusive discounts &
              offers straight to your inbox!
            </p>
            <div className=" flex items-center">
              <input
                className=" bg-white px-4 py-2 w-full rounded-l-full"
                placeholder=" Email Address"
                type="text"
                name=""
                id=""
              />
              <button className=" bg-[#02033B] px-7 py-2 text-white rounded-r-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] text-left mx-auto mt-20">
        <p className="  text-white">
          Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
          registered in the U.S. and other countries. App Store is a service
          mark of Apple Inc. Android, Google Play and the Google Play logo are
          trademarks of Google LLC.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
