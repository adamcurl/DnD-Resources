import React from "react";
import KhorvaireMap from "./KhorvaireMap";
import SharnMap from "./SharnMap";
import Country from "./Country";
import City from "./City";
import Crime from "./Crime";
import Faiths from "./Faiths";
import Faith from "./Faith";
import Houses from "./Houses";
import House from "./House";
import Race from "./Race";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import "./assets/styles/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link className="navbar-brand" to="/">
            Adam's Arcane Archives
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/houses">
              Houses
            </Link>
            <Link className="nav-link" to="/faiths">
              Faiths
            </Link>
            <NavDropdown title="Maps" id="basic-nav-dropdown">
              <Link className="nav-link" to="/continent/khorvaire">
                Khorvaire
              </Link>
              <Link className="nav-link" to="/city/sharn">
                Sharn
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={KhorvaireMap} />
        <Route path="/continent/khorvaire" component={KhorvaireMap} />
        <Route path="/city/sharn" component={SharnMap} />
        <Route path="/houses" component={Houses} />
        <Route path="/faiths" component={Faiths} />
        <Route path="/country/:country" component={Country} />
        <Route path="/city/:city" component={City} />
        <Route path="/crime/:crime" component={Crime} />
        <Route path="/faiths/:faith" component={Faith} />
        <Route path="/houses/:house" component={House} />
        <Route path="/race/:race" component={Race} />
      </Switch>
    </>
  );
}

export default App;
