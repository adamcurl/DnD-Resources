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
  const [mark, setMark] = React.useState("");
  const [faith, setFaith] = React.useState("");
  const [homeland, setHomeland] = React.useState("");
  const [classLink, setClassLink] = React.useState("");
  const [raceLink, setRaceLink] = React.useState("");
  const [racePrompts, setRacePrompts] = React.useState([]);
  const [housePrompts, setHousePrompts] = React.useState([]);
  const [faithPrompts, setFaithPrompts] = React.useState([]);
  const [classPrompts, setClassPrompts] = React.useState([]);
  const [homelandPrompts, setHomelandPrompts] = React.useState([]);

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
              Marks/Houses
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
        <div className="container_wrap">
          <div className="character-summary">
            <p>
              {house === "No House"
                ? ""
                : house === "Aberrant"
                ? "Aberrant Mark"
                : house
                ? `Mark of ${mark}/House ${house}`
                : "[No Mark/House]"}{" "}
              {race ? race : "[Race]"} {dndClass ? dndClass : "[Class]"}{" "}
              {faith === "No Faith"
                ? ""
                : faith
                ? ` of ${faith} faith`
                : "with [No Religion]"}{" "}
              from {homeland ? homeland : "[Homeland]"}
            </p>
          </div>
        </div>
      ) : null}
      {location.pathname !== "/" && location.pathname !== "/summary" ? (
        <div className="sideNav">
          <Link to="/races">
            <div
              className={`side-nav ${
                race &&
                race !== "Half-Orc or Human" &&
                race !== "Any Race" &&
                race !==
                  "Tairnadal (Wood Elf), Aereni (High Elf), or Drow (Dark Elf)"
                  ? "side-nav-left"
                  : "side-nav-right"
              }`}
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
              style={dndClass ? { top: "285px" } : { top: "285px" }}
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
              style={house ? { top: "325px" } : { top: "325px" }}
            >
              <div>Mark/House</div>
              <div></div>
            </div>
          </Link>
          <Link to="/faiths">
            <div
              className={`side-nav ${
                faith ? "side-nav-left" : "side-nav-right"
              }`}
              style={faith ? { top: "365px" } : { top: "365px" }}
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
              style={homeland ? { top: "405px" } : { top: "405px" }}
            >
              <div>Homeland</div>
              <div></div>
            </div>
          </Link>
          {race &&
          race !== "Half-Orc or Human" &&
          race !== "Any Race" &&
          race !==
            "Tairnadal (Wood Elf), Aereni (High Elf), or Drow (Dark Elf)" &&
          house &&
          dndClass &&
          faith &&
          homeland ? (
            <Link to="/summary">
              <div
                className={`side-nav side-nav-right wiggle`}
                style={{
                  top: "355px",
                  marginLeft: "26%",
                  backgroundColor: "#2f9158",
                }}
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
              homeland,
            })
          }
        />
        <Route
          path="/homeland"
          render={() =>
            React.createElement(KhorvaireMap, {
              homeland,
              setHomeland,
              setHomelandPrompts,
            })
          }
        />
        <Route
          path="/houses"
          render={() =>
            React.createElement(Houses, {
              setMark,
              house,
              setHouse,
              race,
              setRace,
              raceType,
              setRaceType,
              setHousePrompts,
              setRaceLink,
              setRacePrompts,
            })
          }
        />
        <Route
          path="/faiths"
          render={() =>
            React.createElement(Faiths, { faith, setFaith, setFaithPrompts })
          }
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
              setRaceType,
              setRacePrompts,
              setRaceLink,
            })
          }
        />
        <Route
          path="/classes"
          render={() =>
            React.createElement(Classes, {
              dndClass,
              setDndClass,
              setClassLink,
              setClassPrompts,
            })
          }
        />
        <Route
          path="/summary"
          render={() =>
            React.createElement(Summary, {
              race,
              house,
              dndClass,
              faith,
              homeland,
              racePrompts,
              housePrompts,
              classPrompts,
              faithPrompts,
              homelandPrompts,
              raceLink,
              classLink,
              mark,
            })
          }
        />
      </Switch>
      <div className="footer">
        <p>
          All of the images and most of the paraphrased text here is from
          official Wizards of the Coast material purchased by me on D&D Beyond.
          Only those who I have given the password to this site may view the
          content available here in order to follow fair use procedure.
        </p>
        <p>
          Most of the information here is derived from Eberron Rising from the
          Last War, Player's Handbook, and Dungeon Master's Guide.
        </p>
      </div>
    </>
  );
}

export default App;
