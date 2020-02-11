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
    <div className="flex flex-between text-white h-12 p-4 shadow-lg fixed top-0 z-40 ml-0 md:ml-48 w-10/12">
      <a className="theme-text pr-2 hover:opacity-75 hidden md:block" href="#!" onClick={() => history.goBack()}>
        <i className="fas fa-chevron-left fa-lg"></i>
      </a>
      <a className="theme-text pl-0 hover:opacity-75 hidden md:block" href="#!" onClick={() => history.go(+1)}>
        <i className="fas fa-chevron-right fa-lg"></i>
      </a>
      <h4 className="capitalize text-base block font-normal mx-2 md:mx-8">{props.location}</h4>

      <form onSubmit={handleSubmit} className="relative w-full mr-1 md:mr-24 text-gray-600">
        <input id="searchInput" type="search" name="search" onChange={e => setQuery(e.target.value)}
          placeholder="Search" className="bg-gray-400 h-8 my-auto w-full pl-10 pr-5 rounded-full text-xs focus:outline-none focus:bg-gray-100" />
        <button type="submit" className="absolute left-0 mt-1 ml-4 focus:outline-none hover:opacity-75">
          <i className="fas fa-search fa-xs"></i>
        </button>
      </form>
    </div>
  )
}

export default NavBar;