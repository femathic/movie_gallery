import React, { useEffect} from 'react';
import Carousel from './carousel';
import Siema from 'siema';


const CarouselSlides = ({ carousels, slideId }) => {
  useEffect(() => {
    const mySiema1 = new Siema({
      selector: `.${ slideId }`,
      duration: 300,
      easing: 'ease-in-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      rtl: false,
      onInit: () => { },
      onChange: () => { },
    });
    const intervalId = setInterval(() => mySiema1.next(), 8000);
    return () => clearInterval(intervalId)
  }, [slideId]);
  return (
    <div className={`${slideId} mb-6`}>
      {carousels.map((movie) => (<Carousel movie={movie} key={movie.id} />))}
    </div>
  )
};


export default CarouselSlides;