"use client";
import {Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Header = ({ search, setSearch }) => {
  return (
    <header
      className="bg-blue-800 text-white
    "
    >
      <div className="w-full h-[4vw] mx-auto flex items-center justify-between px-8 py-3">
        <Link className="text-3xl font-bold" href="/">
          Logo
        </Link>

        <div className="flex-1 max-w-md relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300"
            size={24}
          />

          <input
            type="text"
            placeholder="Search for products..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 rounded-md text-white outline-none border-2 border-gray-200"
          />
        </div>
        <button className=" relative flex gap-2 rounded-md bg-blue-900 px-4 py-2">
          {" "}
          <ShoppingCart size={20} />
          <span className="ml-4">Cart</span>{" "}
          <span className="rounded-full absolute left-9 text-amber-300 text-md px-1 py-0.1 ">
            0
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
