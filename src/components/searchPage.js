import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from "./card";
import {SearchForMovie } from '../store/actions/movies'
import queryString from 'querystring';

const SearchPage = ({location, setLocation }) => {
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
    SearchForMovie(dispatch, parsed['?q'])
  }, [location.search, dispatch]);

  return (
    <div className="pt-24">
      <h4 className="font-semibold text-2xl ml-5"> Search page </h4>
      <hr className="theme-background gradientify border-0 h-1 w-24 ml-5" />
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
      ) : " "}
    </div>
  )
};

export default SearchPage;