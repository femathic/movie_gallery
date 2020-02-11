import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../images/moovis.svg";
import IntroImage from "../images/introImage.png";

const SideBar = () => (
  <div className="fixed top-0 hidden md:block bg-gray-100 w-48 mr-8 h-screen z-40 shadow-2xl">
    <div className="flex justify-center theme-background h-12 m-0 p-0">
      <img className="h-6 w-10 pr-3 ml-auto my-auto" src={IntroImage} alt="moovis Logo" />
      <img className="w-20 mr-auto my-auto" src={Logo} alt="moovis Logo" />
    </div>
    <hr />
    <ul className="list-reset text-gray-700 mt-1">
      <NavLink className="block py-2 pl-8 font-medium text-sm hover:bg-gray-200"
        to="/home" activeClassName="text-base theme-text active-nav shadow-md font-semibold" >
        <i className="fas fa-home fa-lg pr-2"></i> Home
      </NavLink>
      <NavLink className="block py-2 pl-8 font-medium text-sm hover:bg-gray-200"
        to="/films" activeClassName="text-base theme-text active-nav shadow-md font-bold">
        <i className="fas fa-tape fa-lg pr-2"></i> Films
      </NavLink>
      <NavLink className="block py-2 pl-8 font-medium text-sm hover:bg-gray-200"
        to="/series" activeClassName="text-base theme-text active-nav shadow-md font-bold" >
        <i className="fas fa-clone fa-lg pr-2"></i> Series
      </NavLink>
      <NavLink className="block py-2 pl-8 font-medium text-sm hover:bg-gray-200"
        to="/trending" activeClassName="text-base theme-text active-nav shadow-md font-bold">
        <i className="fas fa-chart-line fa-lg pr-2"></i> Trending
      </NavLink>
      <NavLink className="block py-2 pl-8 font-medium text-sm hover:bg-gray-200"
        to="/upcoming" activeClassName="text-base theme-text active-nav shadow-md font-bold">
        <i className="fas fa-history fa-lg pr-2"> </i> Upcoming
      </NavLink>
    </ul>
    <hr className="my-3 bg-gray-400 w-4/5 mx-auto" />
    <ul className="list-reset text-gray-700 mt-1">
      <NavLink className="block py-1 pl-8 font-normal text-xs hover:bg-gray-300" to="/collections" activeClassName="theme-text font-medium">
        Collections
      </NavLink>
      <NavLink className="block py-1 pl-8 font-normal text-xs hover:bg-gray-300" to="/watch-later" activeClassName="theme-text font-medium">
        Watch later
      </NavLink>
      <NavLink className="block py-1 pl-8 font-normal text-xs hover:bg-gray-300" to="/recently-watched" activeClassName="theme-text font-medium">
        Recently watched
      </NavLink>
      <NavLink className="block py-1 pl-8 font-normal text-xs hover:bg-gray-300" to="/made-for-you" activeClassName="theme-text font-medium">
        Made for you
      </NavLink>
    </ul>
  </div>
);

export default SideBar;