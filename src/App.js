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
import Races from "./Races";
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
            <Link className="nav-link" to="/races">
              Races
            </Link>
            <Link className="nav-link" to="/houses">
              Houses
            </Link>
            <Link className="nav-link" to="/faiths">
              Faiths
            </Link>
            <Link className="nav-link" to="/continent/khorvaire">
              Countries of Khorvaire
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={KhorvaireMap} />
        <Route path="/continent/khorvaire" component={KhorvaireMap} />
        <Route path="/city/sharn" component={SharnMap} />
        <Route path="/houses" component={Houses} />
        <Route path="/faiths" component={Faiths} />
        <Route path="/races" component={Races} />
      </Switch>
    </>
  );
}

export default App;
