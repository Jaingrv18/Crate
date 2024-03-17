import React from "react";
import { useState } from "react";
//import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => {
    return (
      <div className="flex space-x-4 lg:flex-row md:flex-col sm:flex-col xsm:flex-col cursor-pointer">       
        <p>
          <a href="#best-sellers">Best Sellers</a>
        </p>
        <p>
          <a href="#gift-ideas">Gift Ideas</a>
        </p>
        <p>
          <a href="#new-releases">New Releases</a>
        </p>
        <p>
          <a href="#today's-deal">Today's Deal</a>
        </p>
        <p>
          <a href="#Customer Service">Customer Service</a>
        </p>
      </div>
    );
  }

  return (
    <div className=" flex justify-center items-center py-2 px-3 bg-[#000000] md:px-4 md:py-2 sm:px-4 sm:py-2 
    xsm:px-4 xsm:py-2">
      <div className="flex flex-1 justify-center items-center">
        <div className="flex text-white space-x-6 lg:block md:hiddem sm:hidden xsm:hidden ">
          <Menu />
        </div>
      </div>

      <div className="lg:hidden md:block sm:block xsm:block ml-2 relative ">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && <div 
        className="flex justify-end items-end md:flex-col sm:flex-col xsm:flex-col 
        text-center bg-black text-white p-4 fixed top-[30px] right-0 mt-1 min-w-[160px] h-1/3
        rounded-sm shadow-lg lg:hiden md:block sm:block xsm:block md:transition-all 
        md:duration-500 md:ease-in-out sm:transition-all sm:duration-1000 sm:ease-in-out 
        xsm:transition-all xsm:duration-500 xsm:ease-in-out opacity-80 font-bold z-30 border-x border-white-300 rounded-2xl">
          <div className="cursor-pointer p-1 leading-loose">
            <Menu/>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
