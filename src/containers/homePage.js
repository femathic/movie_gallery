import React, {useEffect, useState} from 'react';
import { GetAllMovies } from '../store/actions/movies'
import { useDispatch, useSelector } from 'react-redux';
import IntroPage from '../components/introPage';


const HomePage = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector(state => ({ movies: state.movies.data }));
  const [loading, setLoading] = useState("loading");
  
  useEffect(() => {
    dispatch(GetAllMovies);
  }, [dispatch]);

  return (
    <div className="m-o p-0">
      {loading === "loading" ?
        <IntroPage setLoading={setLoading} movies={movies}/>:
        (<React.Fragment>
          <h1>HomePage</h1>
          {movies && movies.length > 0 ? (
            <p>{movies.map(m => m.name)}</p>
          ) : " "}
        </React.Fragment>) 
      }
    </div>
  )
};


export default HomePage;