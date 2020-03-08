import React from "react";
import KhorvaireMap from "./KhorvaireMap";
// import SharnMap from "./SharnMap";
// import Country from "./Country";
// import City from "./City";
// import Crime from "./Crime";
import Faiths from "./Faiths";
// import Faith from "./Faith";
import Houses from "./Houses";
// import House from "./House";
import Classes from "./Classes";
import Races from "./Races";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import "./assets/styles/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

function App() {
  const [race, setRace] = React.useState("");
  const [dndClass, setDndClass] = React.useState("");
  const [house, setHouse] = React.useState("");
  const [faith, setFaith] = React.useState("");
  const [homeland, setHomeland] = React.useState("");

  React.useEffect(() => {}, []);

  console.log({ race, dndClass, house, faith, homeland });

  return (
    <>
      <Navbar bg="custom" expand="lg">
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
            <Link className="nav-link" to="/classes">
              Classes
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
      <div className="character-summary">
        <p>
          {house ? `House ${house}` : "[No House]"} {race ? race : "[Race]"}{" "}
          {dndClass ? dndClass : "[Class]"}{" "}
          {faith ? ` of ${faith} faith` : "with [No Religion]"} from{" "}
          {homeland ? homeland : "[Homeland]"}
        </p>
      </div>
      {/* <div>
        <Link to="/races">
          <div
            className={`side-nav ${race ? "side-nav-left" : "side-nav-right"}`}
          >
            <div></div>
            <div>Race</div>
          </div>
        </Link>
        <Link to="/classes">
          <div
            className={`side-nav ${house ? "side-nav-left" : "side-nav-right"}`}
            style={{ top: "285px" }}
          >
            <div>Class</div>
            <div></div>
          </div>
        </Link>
        <Link to="/houses">
          <div
            className={`side-nav ${house ? "side-nav-left" : "side-nav-right"}`}
            style={{ top: "325px" }}
          >
            <div>House</div>
            <div></div>
          </div>
        </Link>
        <Link to="/faiths">
          <div
            className={`side-nav ${faith ? "side-nav-left" : "side-nav-right"}`}
            style={{ top: "365px" }}
          >
            <div>Faith</div>
            <div></div>
          </div>
        </Link>
        <Link to="/continent/khorvaire">
          <div
            className={`side-nav ${
              homeland ? "side-nav-left" : "side-nav-right"
            }`}
            style={{ top: "405px" }}
          >
            <div>Homeland</div>
            <div></div>
          </div>
        </Link>
      </div> */}
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            React.createElement(KhorvaireMap, { homeland, setHomeland })
          }
        />
        <Route
          path="/continent/khorvaire"
          render={() =>
            React.createElement(KhorvaireMap, { homeland, setHomeland })
          }
        />
        <Route
          path="/houses"
          render={() =>
            React.createElement(Houses, { house, setHouse, race, setRace })
          }
        />
        <Route
          path="/faiths"
          render={() => React.createElement(Faiths, { faith, setFaith })}
        />
        <Route
          path="/races"
          render={() =>
            React.createElement(Races, { race, setRace, house, setHouse })
          }
        />
        <Route
          path="/classes"
          render={() => React.createElement(Classes, { dndClass, setDndClass })}
        />
        {/* <Route path="/city/sharn" component={SharnMap} /> */}
      </Switch>
    </>
  );
}

export default App;
