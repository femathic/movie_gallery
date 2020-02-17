import React, {useEffect, useState} from 'react';
import CarouselSlides from './carouselSlides';
import CardSlides from "./cardSlides";
import shuffle from '../hocs/shuffle';
import { compareRatings, compareUpdatedTime} from '../hocs/sort';


const HomePage = ({ movies, location, setLocation, scheduledMovies }) => {
  const carouselMovies = useState(shuffle(scheduledMovies.filter((movies, i) => i < 20)))
  useEffect(() => {
    setLocation(location.pathname.substring(1));
  }, [location, setLocation]);
  return(
    <React.Fragment>
      {scheduledMovies && scheduledMovies.length > 0 ? (
        <div className="my-0 pb-5">
            <CarouselSlides carousels={carouselMovies[0]} slideId={"siema1"}/>
            <CardSlides movies={scheduledMovies.sort(compareRatings)} title={"Top Trending"} slideId={"siema2"} type={"schedules"} viewLink={"/trending"}/>
            <CardSlides movies={movies.sort(compareUpdatedTime).filter((movies, i) => i < 20)} title={"Recently Updated"} slideId={"siema3"} viewLink={"/shows"} />
            <CardSlides movies={carouselMovies[0]} title={"Showing Today"} slideId={"siema4"} type={"schedules"} viewLink={"/upcoming"} />
        </div>
      ) : " "}
    </React.Fragment>
  )};


export default HomePage;