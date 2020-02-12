import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../images/moovis.svg";
import IntroImage from "../images/introImage.png";

const SideBar = () => (
  <div className="fixed top-0 hidden md:block bg-white w-64 mr-8 h-screen z-40 shadow-2xl">
    <div className="flex justify-center theme-background h-20 m-0 p-0 gradientify">
      <img className="h-8 w-14 pr-3 pl-8 my-auto" src={IntroImage} alt="moovis Logo" />
      <img className="w-20 mr-auto my-auto" src={Logo} alt="moovis Logo" />
    </div>
    <hr />
    <ul className="list-reset text-gray-700 mt-1">
      <NavLink className="block py-3 pl-8 font-medium text-md hover:bg-gray-200"
        to="/home" activeClassName="text-base theme-text active-nav shadow-md font-bold" >
        <i className="fas fa-home fa-lg pr-2"></i> Home
      </NavLink>
      <NavLink className="block py-3 pl-8 font-medium text-md hover:bg-gray-200"
        to="/shows" activeClassName="text-base theme-text active-nav shadow-md font-bold">
        <i className="fas fa-tv fa-lg pr-2"></i> Shows
      </NavLink>
      <NavLink className="block py-3 pl-8 font-medium text-md hover:bg-gray-200"
        to="/trending" activeClassName="text-base theme-text active-nav shadow-md font-bold">
        <i className="fas fa-chart-line fa-lg pr-2"></i> Trending
      </NavLink>
      <NavLink className="block py-3 pl-8 font-medium text-md hover:bg-gray-200"
        to="/upcoming" activeClassName="text-base theme-text active-nav shadow-md font-bold">
        <i className="fas fa-history fa-lg pr-2"> </i> Upcoming
      </NavLink>
    </ul>
    <hr className="my-3 bg-gray-400 w-4/5 mx-auto" />
    <ul className="list-reset text-gray-700 mt-1">
      <NavLink className="block py-2 pl-8 font-normal text-sm hover:bg-gray-300" to="/collections" activeClassName="theme-text font-medium">
        Collections
      </NavLink>
      <NavLink className="block py-2 pl-8 font-normal text-sm hover:bg-gray-300" to="/watch-later" activeClassName="theme-text font-medium">
        Watch later
      </NavLink>
      <NavLink className="block py-2 pl-8 font-normal text-sm hover:bg-gray-300" to="/recently-watched" activeClassName="theme-text font-medium">
        Recently watched
      </NavLink>
      <NavLink className="block py-2 pl-8 font-normal text-sm hover:bg-gray-300" to="/made-for-you" activeClassName="theme-text font-medium">
        Made for you
      </NavLink>
    </ul>
  </div>
);

export default SideBar;