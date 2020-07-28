import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import About from "./containers/About";
import Resume from "./containers/Resume"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch />
        <Route exact path="/" component={About} />
        <Route exact path="/resume" component={Resume} />
      </Router>
    </>
  );
}

export default App;
