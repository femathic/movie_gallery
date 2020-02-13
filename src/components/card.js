import React from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Card = ({movie}) => {
  return (
    <div className="rounded bg-white overflow-hidden mx-1 my-5 shadow-lg wow slideTop"
      data-wow-duration="2s" style={{ maxWidth: "21rem" }}>
      <Link to={`/show/${movie.id}`}>
        <img className="w-full" style={{ objectFit: "cover", objectPosition: "100% 0", height: "19rem" }}
          src={movie.image ? movie.image.original : "https://placeimg.com/640/480/any"} alt={movie.name} />
        <div className="pl-3 pt-5 pb-3">
          <div className="font-bold text-md theme-text">{movie.name}</div>
          <div className="flex justify-start text-gray-600">
            <span className="text-xs font-medium pr-3">• {moment(movie.premiered).format('YYYY')}</span>
            <span className="text-xs font-medium pr-3">• {movie.runtime} mins</span>
            <div className="card-star-rating">
              <StarRatings
                rating={movie.rating.average / 10 * 6}
                starRatedColor="orange"
                numberOfStars={5}
                name='rating'
                clasname="font-sm"
              />
            </div>
          </div>
        </div>
        <div className="pl-2 pr-1 pb-5">
          {movie.genres.map((genre, id) => (
            <span key={id} className="inline-block bg-gray-300 rounded-full px-2 py-1 text-xs font-semibold text-gray-800 mr-2">#{genre}</span>
          ))}
        </div>
      </Link>
    </div>
  )
};


export default Card;