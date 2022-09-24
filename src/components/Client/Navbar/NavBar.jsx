import React from "react";
import { Link, NavLink } from "react-router-dom";
import Search from "../Search/Search";
import { MenuList } from "./data-menu";

const NavBar = () => {
  return (
    <div>
      <nav className="bg-zinc-900 px-3 py-4 border-gray-200 dark:bg-gray-900 ">
        <div className="container flex flex-wrap justify-around  items-center mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="https://fmobileapi.groupe-minaste.org/assets/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
          </a>
          <Search />
          <div className="flex items-center md:order-2 ">
          <NavLink to={'/cart'}><button
              type="button"
              className="relative flex mr-3 text-sm rounded-full ">
              
              <svg
                className="w-9 h-9 text-white bg-zinc-900 mr-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span className="top-5 left-7 absolute w-6 h-6 bg-white border-2 border-white dark:border-gray-800 rounded-full font-bold">
                1
              </span>
            </button>
            </NavLink>
            <button
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img
                className="w-9 h-9 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
                alt="user photo"
              />
            </button>
            {/* Dropdown menu */}
            <div
              className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
              data-popper-reference-hidden
              data-popper-escaped
              data-popper-placement="bottom"
              style={{
                position: "absolute",
                inset: "0px auto auto 0px",
                margin: 0,
                transform: "translate(0px, 7905px)",
              }}>
              <div className="py-3 px-4">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bonnie Green
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-1" aria-labelledby="user-menu-button">
                {MenuList.map((data, index) => (
                  <li key={index}>
                    <Link
                      to={data.path}
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      {data.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className=" bg-white inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className=" justify-between items-center w-full md:flex md:w-auto md:order-1 bg-zinc-600"
        id="mobile-menu-2">
        <ul className="mx-auto">
          {MenuList.map((data, index) => (
            <li
              key={index}
              className="inline-block py-3 px-5 h-16 md:px-2 hover:bg-zinc-500 hover:border-b-4 border-blue-400">
              <Link
                to={data.path}
                className="text-white block py-2 px-14 text-lg font-normal dark:hover: dark:text-gray-200 dark:hover:text-white">
                {data.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
