import React from "react";
import RandomVerse from "./components/RandomVerse";
import SpecificVerse from "./components/SpecificVerse";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>📖 Bible Verse Finder</h1>
      <RandomVerse />
      <SpecificVerse />
    </div>
  );
}

export default App;
