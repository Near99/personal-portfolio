/* eslint-disable react/prop-types */
import React from "react";
import Home from "./components/Home";

function App({ handleSwitchTheme, handleSwitchLanguage, data }) {
  return (
    <div>
      <Home
        handleSwitchTheme={handleSwitchTheme}
        handleSwitchLanguage={handleSwitchLanguage}
        data={data}
      />
    </div>
  );
}

export default App;
