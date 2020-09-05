import React from "react";
import FirebaseData from "./components/FirebaseData/FirebaseData";
import GraphicBubble from "./components/GraphicBubble/GraphicBubble";
import GraphicBars from "./components/GraphicBars/GraphicBars";
import GraphicAreaspline from "./components/GraphicAreaspline/GraphicAreaspline"

function App() {
  return (
    <div>
      Toroto
      <FirebaseData />
      <GraphicBubble />
      <GraphicBars />
      <GraphicAreaspline />
    </div>
  );
}

export default App;
