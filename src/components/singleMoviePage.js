import React from 'react';

const SingleMoviePage = ({ movies, scheduledMovies, match }) => {
  const movie = movies.filter(movie => movie.id === Number(match.params.id))[0] ||
    scheduledMovies.filter(movie => movie.show.id === Number(match.params.id))[0].show;
  console.log('this is movie', movie)
  const regex = /(<([^>]+)>)/ig;
  const summary = movie.summary.replace(regex, '').slice(0, 800);
  return (
    <div className="bg-gray-200">
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
          <div className="p-4 md:p-12 text-center lg:text-left">
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">{movie.name}</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">Details</p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">Type: {movie.type}</p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">Status: {movie.status}</p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">Language: {movie.language}</p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">Type: {movie.premiered}</p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">Time: {movie.schedule.time}</p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">Days: {movie.schedule.days.join(', ')}</p>

            <p className="pt-8 text-base font-bold flex items-center justify-center lg:justify-start">Summary</p>
            <p className="pt-4 text-sm">{summary}...<a href={movie.officialSite} className="text-teal-500">Read more</a></p>

            <div className="pt-12 pb-8">
              <a href={movie.officialSite} className="theme-background shadow-lg hover:shadow-2xl text-white font-bold py-2 px-4">
                  Visit Official Site
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img src={movie.image.original} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" alt=""></img>
        </div>
      </div>
    </div>
  )
};


export default SingleMoviePage;