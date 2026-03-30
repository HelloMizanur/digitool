import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm md:px-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="btn border-none text-3xl font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-xl">Products</a>
            </li>
            <li>
              <a className="text-xl">Features</a>
            </li>
            <li>
              <a className="text-xl">Pricing</a>
            </li>
            <li>
              <a className="text-xl">Testimonials</a>
            </li>
            <li>
              <a className="text-xl">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end space-x-4 items-center">
          <div className="relative cursor-pointer">
            <CiShoppingCart className="text-3xl" />

            <span className="absolute -top-2 -right-2 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              3
            </span>
          </div>

          <a className="text-xl cursor-pointer">Login</a>

          <a className="btn text-xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-2xl text-white border-none">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
