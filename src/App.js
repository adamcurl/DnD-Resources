import React from "react";
import Map from "./Map";
import Country from "./Country";
import City from "./City";
import Crime from "./Crime";
import Faith from "./Faith";
import House from "./House";
import Race from "./Race";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Map} />
      <Route exact path="/country/:country" component={Country} />
      <Route exact path="/city/:city" component={City} />
      <Route exact path="/crime/:crime" component={Crime} />
      <Route exact path="/faith/:faith" component={Faith} />
      <Route exact path="/house/:house" component={House} />
      <Route exact path="/race/:race" component={Race} />
    </Switch>
  );
}

export default App;
