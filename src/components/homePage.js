import React, {useEffect} from 'react';
import { GetAllMovies } from '../store/actions/movies'
import { useDispatch, useSelector } from 'react-redux';




const HomePage = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector(state => ({ movies: state.movies.data }))
  
  useEffect(() => {
    dispatch(GetAllMovies);
  }, [dispatch]);

  return (
    <div>
      <h1>HomePage</h1>
      { movies && movies.length > 0 ? (
        <p>{movies.map(m => m.name)}</p>
      ): " "}
    </div>
  )
};


export default HomePage;