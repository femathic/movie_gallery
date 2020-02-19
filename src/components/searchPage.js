import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "./card";
import {SearchForMovie } from '../store/actions/movies'
import queryString from 'querystring'; 

const SearchPage = ({ location, setLocation }) => {
  const[loading, setLoading]= useState(false)
  const { searchedMovies} = useSelector(state => ({
    searchedMovies: state.searchedMovies.data,
    error: state.error,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    setLocation(location.pathname.substring(1));
  }, [location, setLocation]);

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    SearchForMovie(dispatch, parsed['?q'].toString(0, 100))
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, [location.search, dispatch]);

  return (
    <div className="pt-24">
      <h4 className="font-semibold text-2xl ml-5"> Search page </h4>
      <hr className="theme-background gradientify border-0 h-1 w-24 ml-5" />
      {loading ? <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mx-auto"></div> : null}
      {searchedMovies && searchedMovies.length > 0 ? (
        <div className="flex flex-wrap overflow-hidden px-2">
          {searchedMovies.map((movie) => {
            return (
              <div className="w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4" key={movie.show.id}>
                <Card movie={movie.show} />
              </div>
            )
          })}
        </div>
      ) : "No movies found"}
    </div>
  )
};

export default SearchPage;