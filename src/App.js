import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { BrowserRouter as Router} from 'react-router-dom';
import LayoutPage from './containers/layoutPage';
const store = configureStore();


const App = () =>  (
  <Provider store={store}>
    <Router>
      <LayoutPage />
    </Router>
  </Provider>
);


export default App;
