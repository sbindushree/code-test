import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/pages/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={Home} />
          <Route path="/about-you" component={Home} />
          <Route path="/portfolio" component={Home} />
          <Route path="/contact" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
