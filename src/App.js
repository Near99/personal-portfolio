/* eslint-disable react/prop-types */
import React from "react";
import Home from "./components/Home";

function App({ handleSwitchTheme }) {
  return (
    <div>
      <Home handleSwitchTheme={handleSwitchTheme} />
    </div>
  );
}

export default App;
