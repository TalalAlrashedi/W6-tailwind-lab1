import React from "react";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="bg-amber-300 shadow-md py-4 px-4 sm:px-6 lg:px-8">
      <nav className="flex justify-center items-center ">
        <ul className="hidden sm:flex md:flex text-balance gap-6">
          <li>All categories</li>
          <li>Today Deals</li>
          <li>Electronic</li>
          <li>Clothing</li>
          <li>Computer</li>
          <li>Furnuters</li>
          <li>Mom & baby</li>
          <li>Books & Nore</li>
        </ul>
        <div className="sm:hidden p-3 ms-auto cursor-pointer">
          <CiMenuBurger />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
