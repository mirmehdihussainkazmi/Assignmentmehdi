import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-wrap bg-white">
        <header className="absolute inset-x-0 top-0 z-50 border shadow-md">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                {/* Your logo or brand icon */}
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link
                to={"/"}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Home
              </Link>
              <Link
                to={"/products"}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Products
              </Link>
              {/* Add more links as needed */}
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;