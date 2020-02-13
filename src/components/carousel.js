import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

const Carousel = ({movie}) => {
  return (
    // wow slideInRight
    <div className="relative bg-black mb-5">
      <img src={movie.show.image ? movie.show.image.original : "https://placeimg.com/640/480/any"} alt={movie.show.name} className="w-full"
        style={{ objectFit: "cover", objectPosition: "100% 30%", height: "30rem" }} />
        <div className="absolute top-0 flex justify-between items-end text-white w-full h-full"
          style={{ background: "rgba(0, 0, 0, 0.55)", height: "30rem" }}>
          <div className="pl-1 md:pl-3 mb-6">
            <h4 className="font-semibold text-md">Showing Today</h4>
            <hr className="theme-background gradientify border-0 h-1 w-20" />
            <h1 className="font-extrabold whitespace-normal text-3xl mt-2">{movie.show.name}</h1>
            <div className="pb-5 font-semibold text-sm">
              {movie.show.genres.map((genre, id) => (
                <span key={id} className="inline-block mr-3">#{genre}</span>
              ))}
              <b>| </b><span className="px-1">Premiere date:&nbsp; {moment(movie.show.premiered).format('YYYY')}</span>
              <b> | </b><span className="px-1">Duration:&nbsp; {movie.show.runtime} mins</span>
              <b> | </b><span className="px-1">Type:&nbsp; {movie.show.type}</span>
              <div className="block md:hidden pt-1">
                Rating:&nbsp; {movie.show.rating.average}
                <span className="text-gray-400 pl-1">(based on {numeral(movie.show.externals.thetvdb).format('0,a')} reviews)</span>
                <span className="inline-block pl-2 card-star-rating">
                  <StarRatings
                    rating={movie.show.rating.average / 10 * 6}
                    starRatedColor="orange"
                    numberOfStars={5}
                    name='rating'
                    clasname="font-sm"
                  />
                </span>
              </div>
              </div>
            <a href={movie.show.officialSite} target="_blank" rel="noopener noreferrer"
                className="theme-background gradientify hover:shadow-inner whitespace-no-wrap font-medium text-sm py-2 px-4 my-2 w-36">
              Visit Official Site
            </a>
              <Link to={`/shows/${movie.show.id}`} className="theme-border hover:shadow-lg whitespace-no-wrap font-medium text-sm py-1 px-4 m-2 w-36">
              View Details
            </Link>
          </div>
          <div className="pb-3 hidden md:block">
            <div className="theme-border hover:shadow-lg whitespace-no-wrap font-medium text-md py-1 px-4 m-2 w-36">
              <p className="px-1">Rating &nbsp;
                <small className="text-gray-400">based on <b>{numeral(movie.show.externals.thetvdb).format('0,a')}</b> reviews</small>
              </p>
              <div className="flex justify-between carousel-star-rating">
                <StarRatings
                  rating={movie.show.rating.average / 10 * 6}
                  starRatedColor="orange"
                  numberOfStars={5}
                  name='rating'
                  clasname="font-sm"
                />
                <p className="theme-border px-1">{movie.show.rating.average}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
};

export default Carousel;
