import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NavBar = (props) => {
  let history = useHistory();
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== undefined && query !== "") {
      history.push(`/shows/?q=${query}`)
    }
  }
  return (
    <div className="flex flex-between text-white h-20 p-4 shadow-lg fixed top-0 z-40 ml-0 md:ml-64 w-full md:w-10/12 wow slideInLeft"
      style={{ background: "rgba(0, 0, 0, 0.4)"}}>
      <a className="theme-text pr-3 hover:opacity-75 hidden  my-auto md:block" href="#!" onClick={() => history.goBack()}>
        <i className="fas fa-chevron-left fa-2x"></i>
      </a>
      <a className="theme-text pl-0 hover:opacity-75 hidden  my-auto md:block" href="#!" onClick={() => history.go(+1)}>
        <i className="fas fa-chevron-right fa-2x"></i>
      </a>
      <h4 className="capitalize text-lg my-auto block font-semibold mx-2 md:mx-8">{props.location}</h4>

      <form onSubmit={handleSubmit} className="relative w-full mr-1 md:mr-24 text-gray-700">
        <input id="searchInput" type="search" name="search" onChange={e => setQuery(e.target.value)}
          placeholder="Search" className="bg-gray-100 h-10 my-auto w-full pl-10 pr-5 rounded-full text-sm font-medium focus:outline-none focus:bg-gray-100" />
        <button type="submit" className="absolute left-0 mt-2 ml-5 focus:outline-none hover:opacity-75">
          <i className="fas fa-search fa-sm"></i>
        </button>
      </form>
    </div>
  )
}

export default NavBar;