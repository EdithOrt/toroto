import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import GraphicAreaspline from "./components/GraphicAreaspline/GraphicAreaspline"
import LogIn from "./components/LogIn/LogIn";
import GraphicBubbleB from "./components/GraphicBubbleB/GraphicBubbleB";
import MyFootPrint2 from "./components/MyFootPrint2/MyFootPrint2";
import MyActions from "./components/MyActions/MyActions";

function App() {


  return (
      <Router>
        <Switch>
          <Route path="/mi-huella">
            <MyFootPrint2 />
            <MyActions />
            <GraphicBubbleB />
            <GraphicAreaspline />
          </Route>
          <Route path="/">
            <LogIn />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
