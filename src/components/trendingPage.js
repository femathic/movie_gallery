import React from 'react';
import Card from "./card";
import { compareRatings } from '../hocs/sort';

const TrendingPage = ({ movies }) => {
  return (
    <div className="pt-24">
      <h4 className="font-semibold text-2xl ml-5"> Trending shows</h4>
      <hr className="theme-background gradientify border-0 h-1 w-24 ml-5" />
      {movies && movies.length > 0 ? (
        <div className="flex flex-wrap overflow-hidden px-2">
          {movies.sort(compareRatings).map((movie, index) => {
            return (
              <div className="w-full overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4" key={movie.id}>
                <Card movie={movie.show} />
              </div>
            )
          })}
        </div>
      ) : " "}
    </div>
  )
};

export default TrendingPage;