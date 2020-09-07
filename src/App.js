import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GraphicAreaspline from "./components/GraphicAreaspline/GraphicAreaspline"
import LogIn from "./components/LogIn/LogIn";

function App() {


  return (
    <div>
      <Router>
        <Switch>
          <Route path="/mi-huella">
            <GraphicAreaspline />
          </Route>
          <Route path="/">
            <LogIn />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
