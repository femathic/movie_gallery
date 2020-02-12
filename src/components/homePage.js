import React, {useEffect} from 'react';
import Carousel from './carousel';
import Card from "../components/card";
import LazyLoad from 'react-lazy-load';

const HomePage = ({movies, location, setLocation}) => {

  useEffect(() => {
    setLocation(location.pathname.substring(1));
  }, [location, setLocation]); 

  return(
    (<React.Fragment>
      
      <div className="bg-gray-100">
        <Carousel />
        {movies && movies.length > 0 ? (
          <div className="flex justify-around items-stretch px-4 flex-wrap">
            {movies.map((movie) => {
            return (
              <LazyLoad offsetVertical={300} key={movie.id}>
                <Card movie={movie} />
              </LazyLoad>
            )
            })}
          </div>
        ) : " "}
      </div>
      
    </React.Fragment>)
  )};


export default HomePage;