import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import About from "./containers/About";
import Resume from "./containers/Resume";
import Portfolio from "./containers/Portfolio";
// import Footer from "./components/Shared/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch />
        <Route exact path="/" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
