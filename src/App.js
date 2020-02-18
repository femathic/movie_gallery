import React, {useEffect} from 'react';
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { BrowserRouter as Router} from 'react-router-dom';
import LayoutPage from './containers/layoutPage';
const store = configureStore();


const App = () => {

  useEffect(() => {
    const script = document.createElement("script");
    const scriptText = document.createTextNode(`
      $(document).ready(function () {
        $(".gradientify").gradientify({
          gradients: [
            { start: [255, 106, 0], stop: [238, 9, 121] },
            { start: [238, 9, 121], stop: [255, 106, 0] },
            { start: [255, 106, 0], stop: [238, 9, 121] },
            { start: [238, 9, 121], stop: [255, 106, 0] }
          ],
          transition_time: 8
        });
      });
    `);
    script.appendChild(scriptText);
    document.body.appendChild(script);
  }, []);

  return(
  <Provider store={store}>
    <Router>
        <LayoutPage/>
    </Router>
  </Provider>
)};


export default App;
