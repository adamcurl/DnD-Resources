import React from "react";
import KhorvaireMap from "./KhorvaireMap";
import SharnMap from "./SharnMap";
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
      <Route exact path="/" component={KhorvaireMap} />
      <Route path="/city/:city" component={SharnMap} />
      <Route path="/country/:country" component={Country} />
      <Route path="/city/:city" component={City} />
      <Route path="/crime/:crime" component={Crime} />
      <Route path="/faith/:faith" component={Faith} />
      <Route path="/house/:house" component={House} />
      <Route path="/race/:race" component={Race} />
    </Switch>
  );
}

export default App;
