import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../images/moovis.svg";

const BottomBar = () => (
  <div className="flex justify-between fixed bottom-0 pr-1 sm:pr-3 block md:hidden  w-screen text-gray-700 bg-white shadow-2xl z-40">
      <div className="flex justify-center theme-background px-2">
        <img className="w-12 mx-auto my-auto" src={Logo} alt="moovis Logo" />
      </div>
      <NavLink className="py-3 px-2 mx-2 hover:bg-gray-200"
        to="/home" activeClassName="text-lg theme-text active-nav-sm shadow-md font-medium" >
        <i className="fas fa-home fa-lg"></i>
      </NavLink>
      <NavLink className="py-3 px-2 mx-2 hover:bg-gray-200"
        to="/films" activeClassName="text-lg theme-text active-nav-sm shadow-md font-medium">
        <i className="fas fa-tape fa-lg"></i>
      </NavLink>
      <NavLink className="py-3 px-2 mx-2 hover:bg-gray-200"
        to="/series" activeClassName="text-lg theme-text active-nav-sm shadow-md font-medium" >
        <i className="fas fa-clone fa-lg"></i>
      </NavLink>
      <NavLink className="py-3 px-2 mx-2 hover:bg-gray-200"
        to="/trending" activeClassName="text-lg theme-text active-nav-sm shadow-md font-medium">
        <i className="fas fa-chart-line fa-lg"></i>
      </NavLink>
      <NavLink className="py-3 px-2 mx-2 hover:bg-gray-200"
        to="/upcoming" activeClassName="text-lg theme-text active-nav-sm shadow-md font-medium">
        <i className="fas fa-history fa-lg"> </i>
      </NavLink>
  </div>
);

export default BottomBar;