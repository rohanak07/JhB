import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from ".";
import { Navigation } from ".";
import { Signup } from ".";
import { Footer } from ".";
import { About } from "."
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
           <Route path="/about" exact component={() => <About />} /> 
          <Route path="/contact" exact component={() => <Signup />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;