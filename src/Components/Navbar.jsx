import React, { useState } from "react";

const navList = ["Home", "About", "Projects", "Contact"];
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <div className="mb-20">
      <ul className="flex m-auto w-5/12 bg-[#262626] p-6 justify-around text-2xl text-[#BCB4B4]">
        {navList.map((navItem) => (
          <li
            className="hover:text-white duration-500"
            key={navItem}
            onClick={() => setActiveNav(navItem)}
          >
            <a
              className={`rounded-md px-[20px] py-[10px] ${
                navItem === activeNav ? "bg-[#1E1E1E]" : ""
              }`}
              href={`#${navItem}`}
            >
              {navItem}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
