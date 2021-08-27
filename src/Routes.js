import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme/theme";
import App from "./App";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { data } from "./data";

function Routes() {
  const [isDark, setIsDark] = useState(false);
  const handleSwitchTheme = () => {
    setIsDark(!isDark);
  };

  const [isChinese, setIsChinese] = useState(false);
  const handleSwitchLanguage = () => {
    setIsChinese(!isChinese);
  };

  const { english, chinese } = data;
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <Route path="/personal-portfolio" exact>
            <App
              data={isChinese ? chinese : english}
              handleSwitchTheme={handleSwitchTheme}
              handleSwitchLanguage={handleSwitchLanguage}
            />
          </Route>
          <Route path="/personal-portfolio/about" exact>
            <About
              data={isChinese ? chinese : english}
              handleSwitchLanguage={handleSwitchLanguage}
              handleSwitchTheme={handleSwitchTheme}
            />
          </Route>
          <Route path="/personal-portfolio/project" exact>
            <Project
              data={isChinese ? chinese : english}
              handleSwitchLanguage={handleSwitchLanguage}
              handleSwitchTheme={handleSwitchTheme}
            />
          </Route>
          <Route path="/personal-portfolio/contact" exact>
            <Contact
              data={isChinese ? chinese : english}
              handleSwitchLanguage={handleSwitchLanguage}
              handleSwitchTheme={handleSwitchTheme}
            />
          </Route>
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
