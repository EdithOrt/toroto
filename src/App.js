import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GraphicAreaspline from "./components/GraphicAreaspline/GraphicAreaspline";
import LogIn from "./components/LogIn/LogIn";
import GraphicBubbleB from "./components/GraphicBubbleB/GraphicBubbleB";
import GraphicBubbleIndividual from "./components/GraphicBubbleIndividual/GraphicBubbleIndividual";
import MyFootprint from "./components/MyFootprint/MyFootprint";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar2 /> */}
        <Switch>
          <Route path='/mi-huella'>
            <MyFootprint />
            <GraphicBubbleIndividual />
            <GraphicBubbleB />
            <GraphicAreaspline />
          </Route>
          <Route path='/'>
            <LogIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
