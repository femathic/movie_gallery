import React, {useEffect} from 'react';
import Carousel from './carousel';

const HomePage = ({movies, location, setLocation}) => {

  useEffect(() => {
    setLocation(location.pathname.substring(1));
  }, [location, setLocation]); 

  return(
    (<React.Fragment>
      
      <div className="">
        <Carousel />
        {movies && movies.length > 0 ? (
          <p>{movies.map(m => m.name)}</p>
        ) : " "}
        {movies && movies.length > 0 ? (
          <p>{movies.map(m => m.name)}</p>
        ) : " "}
        {movies && movies.length > 0 ? (
          <p>{movies.map(m => m.name)}</p>
        ) : " "}
      </div>
      
    </React.Fragment>)
  )};


export default HomePage;