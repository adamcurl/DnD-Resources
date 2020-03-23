import React from "react";
import Start from "./Start";
import KhorvaireMap from "./KhorvaireMap";
import Faiths from "./Faiths";
import Houses from "./Houses";
import Classes from "./Classes";
import Races from "./Races";
import Summary from "./Summary";
import { Route, Switch, Link, useLocation } from "react-router-dom";
import "./App.css";
import "./assets/styles/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

function App() {
  const [race, setRace] = React.useState("");
  const [raceType, setRaceType] = React.useState("");
  const [dndClass, setDndClass] = React.useState("");
  const [house, setHouse] = React.useState("");
  const [faith, setFaith] = React.useState("");
  const [homeland, setHomeland] = React.useState("");

  const location = useLocation();

  React.useEffect(() => {}, []);

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
            <Link className="nav-link" to="/homeland">
              Homeland
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {location.pathname !== "/" ? (
        <div className="character-summary">
          <p>
            {house === "No House"
              ? ""
              : house
              ? `House ${house}`
              : "[No House]"}{" "}
            {race ? race : "[Race]"} {dndClass ? dndClass : "[Class]"}{" "}
            {faith === "No Faith"
              ? ""
              : faith
              ? ` of ${faith} faith`
              : "with [No Religion]"}{" "}
            from {homeland ? homeland : "[Homeland]"}
          </p>
        </div>
      ) : null}
      {location.pathname !== "/" && location.pathname !== "/summary" ? (
        <div>
          <Link to="/races">
            <div
              className={`side-nav ${
                race &&
                race !== "Half-Orc or Human" &&
                race !==
                  "Tairnadal (Wood Elf), Aereni (High Elf), or Drow (Dark Elf)"
                  ? "side-nav-left"
                  : "side-nav-right"
              }`}
              style={
                race &&
                race !== "Half-Orc or Human" &&
                race !==
                  "Tairnadal (Wood Elf), Aereni (High Elf), or Drow (Dark Elf)"
                  ? { marginRight: "26.5%" }
                  : { marginLeft: "26.7%" }
              }
            >
              <div>Race</div>
              <div></div>
            </div>
          </Link>
          <Link to="/classes">
            <div
              className={`side-nav ${
                dndClass ? "side-nav-left" : "side-nav-right"
              }`}
              style={
                dndClass
                  ? { top: "285px", marginRight: "26.3%" }
                  : { top: "285px", marginLeft: "26.5%" }
              }
            >
              <div>Class</div>
              <div></div>
            </div>
          </Link>
          <Link to="/houses">
            <div
              className={`side-nav ${
                house ? "side-nav-left" : "side-nav-right"
              }`}
              style={
                house
                  ? { top: "325px", marginRight: "25.6%" }
                  : { top: "325px", marginLeft: "25.9%" }
              }
            >
              <div>House</div>
              <div></div>
            </div>
          </Link>
          <Link to="/faiths">
            <div
              className={`side-nav ${
                faith ? "side-nav-left" : "side-nav-right"
              }`}
              style={
                faith
                  ? { top: "365px", marginRight: "26.4%" }
                  : { top: "365px", marginLeft: "26.5%" }
              }
            >
              <div>Faith</div>
              <div></div>
            </div>
          </Link>
          <Link to="/homeland">
            <div
              className={`side-nav ${
                homeland ? "side-nav-left" : "side-nav-right"
              }`}
              style={
                homeland
                  ? { top: "405px", marginRight: "23.8%" }
                  : { top: "405px", marginLeft: "24%" }
              }
            >
              <div>Homeland</div>
              <div></div>
            </div>
          </Link>
          {race &&
          race !== "Half-Orc or Human" &&
          race !==
            "Tairnadal (Wood Elf), Aereni (High Elf), or Drow (Dark Elf)" &&
          house &&
          dndClass &&
          faith &&
          homeland ? (
            <Link to="/summary">
              <div
                className={`side-nav side-nav-right`}
                style={{ top: "355px", marginLeft: "26%" }}
              >
                <div>FINISH</div>
                <div></div>
              </div>
            </Link>
          ) : null}
        </div>
      ) : null}
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            React.createElement(Start, {
              race,
              dndClass,
              house,
              faith,
              homeland
            })
          }
        />
        <Route
          path="/homeland"
          render={() =>
            React.createElement(KhorvaireMap, { homeland, setHomeland })
          }
        />
        <Route
          path="/houses"
          render={() =>
            React.createElement(Houses, {
              house,
              setHouse,
              race,
              setRace,
              raceType,
              setRaceType
            })
          }
        />
        <Route
          path="/faiths"
          render={() => React.createElement(Faiths, { faith, setFaith })}
        />
        <Route
          path="/races"
          render={() =>
            React.createElement(Races, {
              race,
              setRace,
              house,
              setHouse,
              raceType,
              setRaceType
            })
          }
        />
        <Route
          path="/classes"
          render={() => React.createElement(Classes, { dndClass, setDndClass })}
        />
        <Route
          path="/summary"
          render={() =>
            React.createElement(Summary, {
              race,
              house,
              dndClass,
              faith,
              homeland
            })
          }
        />
      </Switch>
    </>
  );
}

export default App;
