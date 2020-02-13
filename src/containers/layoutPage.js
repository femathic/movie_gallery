import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { GetAllMovies, GetScheduledMovies } from '../store/actions/movies'
import { useDispatch, useSelector } from 'react-redux';
import IntroPage from '../components/introPage';
import HomePage from '../components/homePage';
import ShowsPage from '../components/showsPage';
import TrendingPage from '../components/trendingPage';
import UpcomingPage from '../components/upcomingPage';
import SearchPage from '../components/searchPage';
import SingleMoviePage from '../components/singleMoviePage';
import NotFound from '../components/notFound';
import SideBar from '../components/sideBar';
import BottomBar from '../components/bottomBar';
import NavBar from '../components/navBar';


const LayoutPage = () => {
  const dispatch = useDispatch();
  const { movies, scheduledMovies } = useSelector(state => ({
    movies: state.movies.data,
    scheduledMovies: state.scheduledMovies.data,
  }));
  const [loading, setLoading] = useState("loading");
  const [location, setLocation] = useState("");
  
  useEffect(() => {
    dispatch(GetScheduledMovies);
    dispatch(GetAllMovies);
  }, [dispatch]);

  return (
    <div className="m-o p-0">
      {loading === "loading" ?
        (<IntroPage setLoading={setLoading} movies={movies} scheduledMovies={scheduledMovies}/>):
        (
          <div className="relative">
            <SideBar />
            <NavBar location={location} />
            <div className="relative ml-0 md:ml-64" >
              <BottomBar />
              <Switch>
                <Route exact path='/' render={() => <Redirect to="/home" />}/>
                <Route path='/home' render={(props) => <HomePage movies={movies} {...props}
                  scheduledMovies={scheduledMovies} setLocation={setLocation} />} />
                <Route path='/shows' render={() => <ShowsPage movies={movies} />}/>
                <Route path='/trending' render={() => <TrendingPage movies={movies} />}/>
                <Route path='/upcoming' render={() => <UpcomingPage movies={movies} />}/>
                <Route path='/search' render={() => <SearchPage movies={movies} />}/>
                <Route path='/shows/:id' render={(props) => <SingleMoviePage {...props} movies={movies} />}/>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        )
      }
    </div>
  )
};


export default LayoutPage;