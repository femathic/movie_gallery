import React, {useEffect, useState} from 'react';
import Logo from "../images/moovis.svg";
import leftIcons from "../images/left-icons.svg";
import rightIcons from "../images/right-icons.svg";
import IntroImage from "../images/introImage.png";


const qoutes = [
  { quote: "The past can hurt. But the way I see it, you can either run from it or learn from it", who: "Rafiki, The Lion King" },
  { quote: "I figure life’s a gift, and I don’t intend on wasting it", who: "Jack, Titanic" },
  { quote: "I have a love in my life. It makes me stronger than anything you can imagine", who: "Barry, Punch-Drunk Love" },
  { quote: "I’d rather fight with you than make love with anyone else", who: "Nick Mercer, The Wedding Date" },
  { quote: "I never look back. It distracts from the now", who: "Edna Mode, The Incredibles" },
  { quote: "You are everything I never knew I always wanted", who: "Alex Whitman, Fools Rush In" },
  { quote: "No matter what anybody tells you, words and ideas can change the world", who: "John Keating, Dead Poet’s Society" },
  { quote: "It’s not who you are underneath, it’s what you do that defines you", who: "Rachel, Batman Begins" },
  { quote: "End? No, the journey doesn’t end here. Death is just another path. One that we all must take.", who: "Gandalf, The Lord of the Rings" },
];
const chosenQuote = qoutes[Math.floor(Math.random() * Math.floor(qoutes.length))];

const IntroPage = ({ setLoading, movies, scheduledMovies}) => {
  const [loadingValue, setLoadingValue] = useState(0);

  useEffect(() => {
    if (movies && movies.length > 0 && scheduledMovies && scheduledMovies.length > 0) {
      const intervalId = setInterval(() => {
        if (loadingValue < 90) {
          setLoadingValue(loadingValue + 0.4);
        } else {
          setLoading("loaded");
        }
      }, 4
      )
      return () => clearInterval(intervalId);
    }
  }, [loadingValue, setLoading, movies, scheduledMovies])
  
  return (
    <div className="flex justify-around items-stretch h-screen w-screen wow fadeIn theme-background gradientify">

      <div className="hidden md:flex flex-shrink-0 justify-center items-center wow slideInLeft" data-wow-duration="2s" data-wow-delay="1s">
        <img src={leftIcons} alt="website logo" style={{ width: "32px" }} />
      </div>

      <div className="flex flex-shrink-0 flex-col max-w-md justify-center mx-0 w-64 sm:w-full">
        <img src={Logo} alt="website logo" className="mb-5  mx-auto wow fadeInDown w-full" data-wow-delay="1s"/>
        <img src={IntroImage} alt="website logo" className="max-w-md mx-auto wow pulse w-full" data-wow-duration="2s" data-wow-delay="2s"/>
        <div className="shadow-md w-full bg-transparent mt-5 rounded-ful max-w-xs mx-auto wow fadeInLeft" data-wow-delay="1s" >
          <div className="bg-blue text-xs leading-none py-1 text-center text-white h-1 rounded-full"
            style={{ width: `${loadingValue}%`, backgroundColor: "white" }}></div>
        </div>
        <p className="mt-5 text-white text-center w-full wow fadeInUp" data-wow-delay="1s">
          “ {chosenQuote.quote}. ”
          <br />---<b>{chosenQuote.who}</b>
        </p>
      </div>

      <div className="hidden md:flex flex-shrink-0 justify-center items-center wow slideInRight" data-wow-duration="2s" data-wow-delay="1s">
        <img src={rightIcons} alt="website logo" style={{ width: "32px" }} />
      </div>

    </div>
  )
};


export default IntroPage;






