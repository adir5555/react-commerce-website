import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/logos.gif";
import { CiUser } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { GiSelfLove } from "react-icons/gi";

const Navbar = () => {
  const [visible, setVisiable] = useState(false);
  const navUserHober = (
    <>
      <NavLink
        onClick={() => setVisiable(false)}
        className="py-2 pl-6 border"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => setVisiable(false)}
        className="py-2 pl-6 border"
        to="/collection"
      >
        Collection
      </NavLink>
      <NavLink
        onClick={() => setVisiable(false)}
        className="py-2 pl-6 border"
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        onClick={() => setVisiable(false)}
        className="py-2 pl-6 border"
        to="/contact"
      >
        Contact
      </NavLink>
      <div className="group relative">
        <CiUser className="text-3xl min-w-5"></CiUser>
        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10">
          <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
            <p className="cursor-pointer hover:text-black">My proFile</p>
            <p className="cursor-pointer hover:text-black">order</p>
            <p className="cursor-pointer hover:text-black">LOgout</p>
          </div>
        </div>
      </div>
    </>
  );

  const navOption = (
    <>
      <NavLink to="/" className="flex flex-col items-center gap-1">
        <p>Home</p>
        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
      </NavLink>
      <NavLink to="/collection" className="flex flex-col items-center gap-1">
        <p>Collection</p>
        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
      </NavLink>
      <NavLink to="/about" className="flex flex-col items-center gap-1">
        <p>About</p>
        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
      </NavLink>
      <NavLink to="/contact" className="flex flex-col items-center gap-1">
        <p>Contact</p>
        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
      </NavLink>
    </>
  );
  return (
    <div className="flex items-center justify-between  font-medium gap-6 ">
      <img className="size-10 cursor-pointer" src={logo} alt="" />
      <ul className="hidden sm:flex gap-5 text-3xl text-gray-600 ">
        {navOption}
      </ul>
      <div className=" flex items-center gap-6">
        <GiSelfLove className="text-3xl cursor-pointer"></GiSelfLove>

        <Link to="/cart" className="relative">
          <FiShoppingCart className="text-3xl min-w-5"></FiShoppingCart>
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            10
          </p>
        </Link>
        <button onClick={() => setVisiable(true)}>
          {" "}
          <BiMenuAltRight className="text-3xl cursor-pointer sm:hidden"></BiMenuAltRight>
        </button>
      </div>
      {/*  */}
      <div
        className={`absolute top-0 right-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        } `}
      >
        <div className=" flex flex-col text-black">
          <div
            onClick={() => setVisiable(false)}
            className=" flex items-center gap-4 p-3"
          >
            <GoArrowLeft className="h-4 rotate-180 text-3xl"></GoArrowLeft>
            <p>Back</p>
          </div>
          {navUserHober}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
