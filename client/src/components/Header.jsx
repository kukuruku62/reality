import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="  bg-slate-200 shadow-md">
      <div className="flex justify-between h-[80px] items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="flex flex-wrap font-bold text-sm sm:text-xl">
            <span className="text-slate-500">Simple</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form className=" flex items-center bg-slate-100 p-2 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent  focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <nav>
          <ul className="flex gap-4 text-xl font-medium text-slate-600 ">
            <Link to="/">
              <li className="p-2 hover:scale-110 hover:text-slate-700">Home</li>
            </Link>
            <Link to="/about">
              <li className="p-2 hover:scale-110 hover:text-slate-700">About</li>
            </Link>
            <Link to="/sign-in">
              <li className="p-2 hover:scale-110 hover:text-slate-700">Sign In</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
