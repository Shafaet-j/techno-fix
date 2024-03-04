import React from "react";

const Brands = () => {
  return (
    <section className=" flex items-center py-16 px-5">
      <div className="max-w-[1140px] mx-auto">
        <h2 className=" text-grey/50 text-center mb-12">
          Trusted by 45M+ users
        </h2>
        <div className=" grid grid-cols-2 md:grid-cols-5 items-center lg:grid-cols-5 gap-5 justify-items-center">
          <img src="./Walmart.png" alt="" />
          <img src="./cisco.png" alt="" />
          <img src="./Volvo.png" alt="" />
          <img src="./deloitte.png" alt="" />
          <img src="./okta.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
