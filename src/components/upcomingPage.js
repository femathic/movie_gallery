import React from 'react';
import { NavLink } from 'react-router-dom';

const UpcomingPage = () => (
  <React.Fragment>
    <h1>  Upcoming Page </h1>
    <NavLink to="/home" >Home</NavLink>
    <NavLink to="/trending" >Trending</NavLink>
    <NavLink to="/upcoming" >Upcoming</NavLink>
    <NavLink to="/films" >Films</NavLink>
    <NavLink to="/series" >Series</NavLink>
    <NavLink to="/search" >Search</NavLink>
    <NavLink to="/shows/:id" >Single Movie</NavLink>
  </React.Fragment>
);


export default UpcomingPage;