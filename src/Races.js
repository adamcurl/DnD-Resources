import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Loading from "./Loading";

function Races(props) {
  const [races, setRaces] = useState([]);
  const [raceImages, setRaceImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeRace, setActiveRace] = useState(-1);

  const onRender = () => {
    // get race files' keys and values
    const files = ((ctx) => {
      let keys = ctx.keys();
      let values = keys.map(ctx);
      return keys.reduce((o, k, i) => {
        o[k] = values[i];
        return o;
      }, {});
    })(require.context("./assets/races", true, /.json/));
    let array = Object.values(files);
    setRaces(array);

    // get crest files' keys and values
    const imgs = ((ctx) => {
      let keys = ctx.keys();
      let values = keys.map(ctx);
      return keys.reduce((o, k, i) => {
        o[k] = values[i];
        return o;
      }, {});
    })(require.context("./assets/imgs/races", true, /.png/));
    const crestImgs = Object.values(imgs);
    let crestVals = [];

    // add image names to the array and set state
    const crestLen = crestImgs.length;
    for (var i = 0; i < crestLen; i++) {
      crestVals.push(crestImgs[i]);
    }
    setRaceImages(crestVals);
  };

  React.useEffect(() => {
    onRender();
  }, []);

  if (races.length < 19 || raceImages.length < 19) return <Loading />;

  const handleOpenModal = (i) => {
    setActiveRace(i);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChooseRace = () => {
    if (races[activeRace].houses[0] === "None" && props.house !== "Aberrant")
      props.setHouse("No House");
    props.setRace(races[activeRace].name);
    props.setRaceType(races[activeRace].raceType);
    props.setRacePrompts(races[activeRace].prompts);
    props.setRaceLink(races[activeRace].link);
    setModalOpen(false);
  };

  const overrideHouse = () => {
    if (races[activeRace].houses[0] === "None") props.setHouse("No House");
    else props.setHouse("");
    props.setRace(races[activeRace].name);
    props.setRaceType(races[activeRace].raceType);
    props.setRacePrompts(races[activeRace].prompts);
    props.setRaceLink(races[activeRace].link);
    setModalOpen(false);
  };

  const checkHouses = () => {
    var invalidHouse = true;
    var housesLen = races[activeRace].houses.length;
    for (var i = 0; i < housesLen && invalidHouse; i++) {
      if (
        races[activeRace].houses[i]
          .toLowerCase()
          .includes(props.house.toLowerCase())
      )
        invalidHouse = false;
    }
    return invalidHouse;
  };

  return (
    <div className="container_wrap">
      <h1 className="pt-3">Races of Eberron</h1>
      <p>
        Every race has a place in Eberron, but the lore behind each race is a
        little different than in classical fantasy. Goblinoids live feudal,
        honor-based system instead of out in the wilderness. Orcs are no longer
        dumb brutes, but are wise druids. And Halflings live in the planes and
        ride dinosaurs. There are also 4 new and unique races in Eberron: <br />
        <strong>Changelings</strong> can completely alter their physical
        appearances and voices. <br />
        <strong>Kalashtar</strong> are a union between humans and spirits called
        quori and possess psychic abilities. <br />
        <strong>Shifters</strong> are a hybrid between humans and lycanthropes
        with the ability to "shift", or half-transform into a were-beast. <br />
        <strong>Warforged</strong> are sentient golems that were created for
        battle during the Last War.
      </p>
      <p>
        If you'd like to play another race (
        <a
          href="https://www.dndbeyond.com/races"
          target="_blank"
          rel="noopener noreferrer"
        >
          list of all races
        </a>
        ), then let your DM know.
      </p>
      <div className="row">
        {races.map((race, i) => (
          <div className="col-md-3" key={race.name}>
            <button
              type="button"
              className={`btn btn-link no_dec img-btn ${
                props.race === race.name
                  ? "active-item"
                  : (props.race.includes("Elf") &&
                      race.name.includes("Elf") &&
                      race.name !== "Half-Elf" &&
                      props.race !== "Half-Elf") ||
                    (props.race === "Half-Elf" && race.name === "Half-Elf") ||
                    (props.race === "Half-Orc or Human" &&
                      (race.name.includes("Half-Orc") ||
                        race.name.includes("Human")))
                  ? "compatible"
                  : ""
              }`}
              onClick={() => handleOpenModal(i)}
            >
              <div
                className="bkgrnd_img zoom_img"
                style={{ backgroundImage: `url('${raceImages[i]}')` }}
              />
              <p className="text-center no_dec">{race.name}</p>
            </button>
          </div>
        ))}
      </div>
      {modalOpen ? (
        <Modal show={modalOpen} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{races[activeRace].name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={races[activeRace].link}
              >
                {races[activeRace].name} Stats, Traits, & Info
              </a>
            </div>
            <p>
              <strong>Origin: </strong>
            </p>
            <ul>
              {races[activeRace].origin.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Current Homes: </strong>
            </p>
            <ul>
              {races[activeRace].currHomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Characteristics: </strong>
            </p>
            <ul>
              {races[activeRace].characteristics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Summary: </strong>
            </p>
            <ul>
              {races[activeRace].summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Houses/Marks: </strong>
            </p>
            <ul>
              {races[activeRace].houses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex btn-row">
              <button
                className="btn btn-primary"
                onClick={handleChooseRace}
                disabled={
                  props.house !== "" &&
                  props.house !== "Aberrant" &&
                  checkHouses()
                }
              >
                {props.house !== "" &&
                props.house !== "Aberrant" &&
                checkHouses()
                  ? "Current House Not Compatible"
                  : "Choose Race"}
              </button>
              {props.house !== "" &&
              props.house !== "Aberrant" &&
              checkHouses() ? (
                <button className="btn btn-warning" onClick={overrideHouse}>
                  Remove house and choose race
                </button>
              ) : null}
              <button className="btn btn-secondary" onClick={handleCloseModal}>
                Cancel
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      ) : null}
    </div>
  );
}

export default Races;
