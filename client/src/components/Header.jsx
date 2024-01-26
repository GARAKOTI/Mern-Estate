import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1>
            <span className="text-slate-500">Garakoti</span>
            <span className="text-slate-900">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch />
        </form>
        <ul className="flex gap-4">
          <Link
            to={"/"}
            className="hidden sm:inline text-slate-700 hover:underline"
          >
            <li>Home</li>
          </Link>
          <Link
            to={"/about"}
            className="hidden sm:inline text-late-700 hover:underline"
          >
            <li>About </li>
          </Link>
          <Link to={"/signin"} className="text-slate-700 hover:underline">
            <li>SignIn</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
