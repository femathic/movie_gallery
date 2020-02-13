import React, {useEffect, useState} from 'react';
import Carousel from './carousel';
import Card from "../components/card";
import Siema from 'siema';


const HomePage = ({ movies, location, setLocation, scheduledMovies }) => {
  // const [currentCarouselSlide, setCurrentCarouselSlide] = useState(0)

  useEffect(() => {
    setLocation(location.pathname.substring(1));
  }, [location, setLocation]); 
  useEffect(() => {
    const mySiema = new Siema({
      selector: '.siema',
      duration: 2,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      rtl: false,
      onInit: () => { },
      onChange: () => {},
    });
    const intervalId = setInterval(() => {
      mySiema.currentSlide < 5 ? mySiema.next(1) : mySiema.goTo(0)
    }, 8000);
    return () => clearInterval(intervalId)
  }, []);

  return(
    (<React.Fragment>
      
      <div className="bg-gray-100">
        <div className="siema">
          {scheduledMovies && scheduledMovies.length > 0 ? (
            <React.Fragment>
              {scheduledMovies.filter((movies,i) => i < 6)
                .map((movie) => (<Carousel movie={movie} key={movie.id} />))}
            </React.Fragment>
          ) : " "}
        </div>
        <h1>hfdhjd</h1>
        <ol className="carousel-indicators">
          <li className="inline-block mr-3">
            <label htmlFor="carousel-1" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•jk hg.kjghlgflhkhgfi</label>
          </li>
          <li className="inline-block mr-3">
            <label htmlFor="carousel-2" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•jk hg.kjghlgflhkhgfi</label>
          </li>
          <li className="inline-block mr-3">
            <label htmlFor="carousel-3" className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•jk hg.kjghlgflhkhgfi</label>
          </li>
        </ol>

        {movies && movies.length > 0 ? (
          <div className="flex justify-around items-stretch px-4 flex-wrap">
            {movies.map((movie) => (<Card movie={movie} key={movie.id} />))}
          </div>
        ) : " "}
      </div>
      
    </React.Fragment>)
  )};


export default HomePage;