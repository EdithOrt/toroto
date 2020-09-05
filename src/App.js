import React from "react";
import FirebaseData from "./components/FirebaseData/FirebaseData";
import GraphicBubble from "./components/GraphicBubble/GraphicBubble";
import GraphicBubbleB from "./components/GraphicBubbleB/GraphicBubbleB";
import GraphicBubbleIndividual from "./components/GraphicBubbleIndividual/GraphicBubbleIndividual";

function App() {
  return (
    <div>
      Toroto
      <FirebaseData />
      <GraphicBubble />
      <GraphicBubbleB />
      <GraphicBubbleIndividual />
    </div>
  );
}

export default App;
