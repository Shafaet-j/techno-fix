import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Colaborate = () => {
  return (
    <section className=" flex items-center py-16">
      <div className="max-w-[1140px] mx-auto">
        <div className=" text-center relative">
          <div className=" text-blackis text-5xl font-bold text-center mb-12 inline-block">
            Collaborate without <br /> constraints
          </div>
          <div className=" bg-[#FFD02F] text-blackis px-4 py-1 rounded absolute -top-20 right-60 rotate-12 font-semibold">
            YOUR IDEA STARTS HERE
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mb-10">
          <div>
            <h2 className=" text-blackis font-bold text-2xl">Free forever</h2>
            <p className=" text-grey/50 w-[65%]">
              Our free plan gives you unlimited team members, 3 boards, and 300+
              expert-made templates. Signing up with your work email lets you
              bring in your team faster. See our{" "}
              <span className=" text-blue">pricing plans</span> for more
              features.
            </p>
          </div>
          <div>
            <h2 className=" text-blackis font-bold text-2xl">
              Easy integrations
            </h2>
            <p className=" text-grey/50 w-[65%]">
              Miro has 100+ powerful integrations with tools you already use
              like G Suite, Slack, and Jira, so your workflow is seamless. View
              the full list in our
              <span className=" text-blue pl-1">Marketplace</span> .
            </p>
          </div>
          <div>
            <h2 className=" text-blackis font-bold text-2xl">Security first</h2>
            <p className=" text-grey/50 w-[65%]">
              We treat your data like you would — with the utmost care. We
              follow industry-leading security standards and give you tools to
              protect intellectual property. Learn more at our{" "}
              <span className=" text-blue">Trust Center</span> .
            </p>
          </div>
        </div>
        <div className=" flex justify-center">
          <button className=" flex items-center gap-2 bg-blue rounded-full text-white py-[12px] px-7 text-center justify-center">
            Sign up free
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Colaborate;
