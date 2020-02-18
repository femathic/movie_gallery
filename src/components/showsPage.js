import React from 'react';
import Card from "./card";
import {compareDates } from '../hocs/sort';

const ShowsPage = ({movies}) => {
  return (
    <React.Fragment>
      <div className="pt-24">
        <h4 className="font-semibold text-2xl ml-5">All shows</h4>
        <hr className="theme-background gradientify border-0 h-1 w-24 ml-5" />
        {movies && movies.length > 0 ? (
          <div className="flex flex-wrap overflow-hidden px-2">
            {movies.sort(compareDates).map((movie) => {
              return (
                <div className="w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4" key={movie.id}>
                  <Card movie={movie} />
                </div>
              )
            })}
          </div>
        ) : " "}
      </div>
    </React.Fragment>
  )
};
    
    
export default ShowsPage;