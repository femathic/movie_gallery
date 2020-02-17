import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from "./card";
import Siema from 'siema';

export default ({ movies, title, slideId, type, viewLink }) => {
  const [mySiema, setMySiema] = useState(null)

  useEffect(() => {
    const mySiema = new Siema({
      selector: `.${slideId}`,
      duration: 300,
      easing: 'ease-in-out',
      perPage: { 640: 2, 1024: 3, 1280: 4, 1500: 5 },
      loop: true,
      onChange: () => {},
    });
    const intervalId = setInterval(() => {
      mySiema.currentSlide >= movies.length - 3 ? mySiema.goTo(0) : mySiema.next();
    }, 5000);
    setMySiema(mySiema);
    return () => clearInterval(intervalId)
  }, [movies.length, slideId]);

  return (
    <div className="my-6 pl-1 md:pl-6">
      <h4 className="font-semibold text-lg"> {title}
        <Link to={`${viewLink}`} className="theme-text hover:font-semibold whitespace-no-wrap font-normal text-sm pl-2">
          Show all <span className="text-md font-semibold">({movies.length})</span>
        </Link>
      </h4>
      <hr className="theme-background gradientify border-0 h-1 w-20 mb-1" />
      <div className={`${slideId}`}>
        {movies && movies.length > 0 ? (
          <React.Fragment>
            {type === 'schedules' ? movies.map((movie) => (<Card movie={movie.show} key={movie.id} />)):
              movies.map((movie, i) => (<Card movie={movie} key={i} />))
            }
          </React.Fragment>
        ) : " "}
      </div>
      <div className="flex justify-end items-center mr-2">
        <button onClick={() => mySiema.prev()}
          className="theme-background hover:shadow-lg font-medium text-sm py-0 px-3 mx-2 my-0 w-18">
          <i className="fas fa-long-arrow-alt-left fa-lg text-white"></i>
        </button>
        <button onClick={() => mySiema.next()}
          className="theme-background hover:shadow-lg font-medium text-sm py-0 px-3 mx-2 my-0 w-18">
          <i className="fas fa-long-arrow-alt-right fa-lg text-white"></i>
        </button>
      </div>
    </div>
  );
}