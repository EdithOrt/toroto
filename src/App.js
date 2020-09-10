import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GraphicAreaspline from "./components/GraphicAreaspline/GraphicAreaspline";
import LogIn from "./components/LogIn/LogIn";
import GraphicBubbleB from "./components/GraphicBubbleB/GraphicBubbleB";
import MyFootprint from "./components/MyFootprint/MyFootprint";
import Navbar from "./components/Navbar/Navbar";
import MyFootPrint2 from "./components/MyFootPrint2/MyFootPrint2";
import MyActions from "./components/MyActions/MyActions";
import Company from "./components/Company/Company";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/mi-huella'>
            <Navbar />
            <MyFootprint />
            <MyFootPrint2 />
            <MyActions />
            <Company />
            <Footer />
          </Route>
          <Route path='/'>
            <LogIn />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
