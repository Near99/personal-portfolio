import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme/theme";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  const [isDark, setIsDark] = useState(false);
  const handleSwitchTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <Route path="/" exact>
            <Home handleSwitchTheme={handleSwitchTheme} />
          </Route>
          <Route path="/about" exact>
            <About handleSwitchTheme={handleSwitchTheme} />
          </Route>
          <Route path="/project"></Route>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
