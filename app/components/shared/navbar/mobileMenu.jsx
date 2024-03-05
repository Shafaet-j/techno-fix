import { Drawer } from "antd";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MobileMenu = ({ onClose, open }) => {
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
    <div>
      <Drawer style={{ background: "#4e5991" }} onClose={onClose} open={open}>
        <div className=" space-y-6 text-blackis px-6">
          {navlinks.map(({ path, title }) => (
            <p
              key={path}
              className=" flex items-center gap-1 hover:text-blue duration-300 cursor-pointer"
            >
              <span className=" text-xl font-bold text-left">{title}</span>
              <MdOutlineKeyboardArrowDown />
            </p>
          ))}
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
