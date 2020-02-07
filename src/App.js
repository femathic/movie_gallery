import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/homePage'
import MoviePage from './components/moviePage'
import Notfound from './components/notFound'
import SearchPage from './containers/SearchPage';
const store = configureStore();

const App = () =>  (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/show/:id" component={MoviePage} />
        <Route path="/shows" component={SearchPage} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  </Provider>
);


export default App;
