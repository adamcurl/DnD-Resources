import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Loading from "./Loading";
import cross from "./assets/imgs/cross.png";

function Houses(props) {
  const [houses, setHouses] = useState([]);
  const [crests, setCrests] = useState([]);
  const [marks, setMarks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeHouse, setActiveHouse] = useState(-1);
  const [houseHover, setHouseHover] = useState(-1);

  const onRender = () => {
    // get house files' keys and values
    const files = ((ctx) => {
      let keys = ctx.keys();
      let values = keys.map(ctx);
      return keys.reduce((o, k, i) => {
        o[k] = values[i];
        return o;
      }, {});
    })(require.context("./assets/houses", true, /.json/));
    const keys = Object.keys(files);
    let array = Object.values(files);

    // add house names to the array and set state
    const length = array.length;
    for (var i = 0; i < length; i++) {
      array[i].name = keys[i]
        .replace("./", "")
        .replace(".json", "")
        .replace(/_/g, " ")
        .replace(/\w\S*/g, function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    setHouses(array);

    // get crest files' keys and values
    const imgs = ((ctx) => {
      let keys = ctx.keys();
      let values = keys.map(ctx);
      return keys.reduce((o, k, i) => {
        o[k] = values[i];
        return o;
      }, {});
    })(require.context("./assets/imgs/house_crests", true, /.png/));
    const crestImgs = Object.values(imgs);
    let crestVals = [];

    // add crest names to the array and set state
    const crestLen = crestImgs.length;
    for (var j = 0; j < crestLen; j++) {
      crestVals.push(crestImgs[j]);
    }
    setCrests(crestVals);

    // get crest files' keys and values
    const markImgs = ((ctx) => {
      let keys = ctx.keys();
      let values = keys.map(ctx);
      return keys.reduce((o, k, i) => {
        o[k] = values[i];
        return o;
      }, {});
    })(require.context("./assets/imgs/marks", true, /.png/));
    const markImgsList = Object.values(markImgs);
    let markVals = [];

    // add crest names to the array and set state
    const marksLen = markImgsList.length;
    for (var k = 0; k < marksLen; k++) {
      markVals.push(markImgsList[k]);
    }
    setMarks(markVals);
  };

  React.useEffect(() => {
    onRender();
  }, []);

  if (crests.length < 13 || marks.length < 13) return <Loading />;

  const handleOpenModal = (i) => {
    setActiveHouse(i);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChooseHouse = () => {
    props.setHouse(houses[activeHouse].name);
    props.setMark(houses[activeHouse].mark);
    props.setHousePrompts(houses[activeHouse].prompts);
    props.setRaceLink(houses[activeHouse].link);

    if (houses[activeHouse].racePrompts)
      props.setRacePrompts(houses[activeHouse].racePrompts);

    if (
      (props.race === "Tairnadal (Wood Elf)" ||
        props.race === "Aereni (High Elf)" ||
        props.race === "Drow (Dark Elf)") &&
      houses[activeHouse].race ===
        "Tairnadal (Wood Elf), Aereni (High Elf), or Drow (Dark Elf)"
    ) {
      props.setRace(props.race);
    } else if (
      (props.race === "Human" || props.race === "Half-Orc") &&
      houses[activeHouse].race === "Half-Orc or Human"
    ) {
      props.setRace(props.race);
    } else {
      props.setRace(houses[activeHouse].race);
    }

    setModalOpen(false);
  };

  const overrideRace = () => {
    props.setRace(houses[activeHouse].race);
    props.setHouse(houses[activeHouse].name);
    props.setMark(houses[activeHouse].mark);
    props.setHousePrompts(houses[activeHouse].prompts);
    props.setRaceLink(houses[activeHouse].link);
    if (houses[activeHouse].racePrompts)
      props.setRacePrompts(houses[activeHouse].racePrompts);
    setModalOpen(false);
  };

  const resetHouse = () => {
    props.setHouse("No House");
    props.setHousePrompts([]);
    props.setMark("");
  };

  return (
    <div className="container_wrap">
      <h1 className="pt-3">Marks/Houses of Khorvaire</h1>
      <p>
        Having a dragonmark and/or belonging to a dragonmarked house is
        OPTIONAL.
      </p>
      <p>
        There are a total of 12 dragonmarks and 13 houses (due to House Phiarlan
        and House Thuranni splitting). The houses in Eberron act like large
        corporations that have a monopoly over a service or product. These
        houses have a vast amount of power and influence due to the dragonmarks
        that manifest and bestow magical prowess to the bearer. Only certain
        bloodlines of certain races can manifest a mark. For example, a
        Changeling cannot manifest a dragonmark, and thus would never be a
        member of a house. Likewise, not all humans belong to a dragonmarked
        house or have the capability of manifesting a mark.
      </p>
      <p>
        There is also another dragonmark: the{" "}
        <a
          href="https://www.dndbeyond.com/feats/aberrant-dragonmark"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aberrant dragonmark
        </a>
        . Aberrant dragonmarks generally form on the offspring of two people who
        have different dragonmarks. This is why the 13 houses forbid marriage
        between each other. This aberrant dragonmark can also manifest on anyone
        at any time and is a source of danger to the bearer and those around
        them. Unlike regular dragonmarks, which only give creative power, the
        aberrant dragonmark gives destructive power and is feared by all. Each
        aberrant dragonmark is unique and takes time to master. Most people with
        one tend to hide it to either avoid being ostracized by society or to
        keep others safe.
        <br />
        If you'd like to have an aberrant dragonmark, let your DM know.
      </p>
      <div className="row">
        <div className="col-md-3">
          <button
            type="button"
            className={`btn btn-link no_dec img-btn ${
              props.house === "No House" ? "active-item" : ""
            }`}
            onClick={resetHouse}
          >
            <div
              className={`bkgrnd_img zoom_img`}
              style={{
                backgroundImage: `url('${cross}')`,
                backgroundSize: "90%",
              }}
            />
            <p className="text-center no_dec">No Mark or House</p>
          </button>
        </div>
        {houses.map((house, i) => (
          <div className="col-md-3" key={house.name}>
            <button
              type="button"
              className={`btn btn-link no_dec img-btn ${
                props.house === house.name
                  ? "active-item"
                  : props.race !== "" &&
                    house.race.includes(props.race) &&
                    props.race !== "Orc" &&
                    props.race !== "Any Race"
                  ? "compatible"
                  : ""
              }`}
              onClick={() => handleOpenModal(i)}
            >
              <div
                className={`bkgrnd_img ${
                  houseHover === i ? "hide_img" : "show_img"
                }`}
                style={{ backgroundImage: `url('${crests[i]}')` }}
                onMouseEnter={() => setHouseHover(i)}
              />
              <div
                className={`bkgrnd_img ${
                  houseHover === i ? "show_img" : "hide_img"
                }`}
                style={{ backgroundImage: `url('${marks[i]}')` }}
                onMouseLeave={() => setHouseHover(-1)}
              />
              <p className="text-center no_dec">
                {house.mark !== "Aberrant" ? (
                  <span>
                    Mark of {house.mark} / House {house.name} - {house.raceType}
                  </span>
                ) : (
                  <span>Aberrant Mark - Any Race</span>
                )}
              </p>
            </button>
          </div>
        ))}
      </div>
      {modalOpen ? (
        <Modal show={modalOpen} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              Mark of {houses[activeHouse].mark} / House{" "}
              {houses[activeHouse].name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={houses[activeHouse].link}
              >
                Mark of {houses[activeHouse].mark} {houses[activeHouse].race}{" "}
                Variant Stats, Traits, & Info
              </a>
            </div>
            <p>
              <strong>Race: </strong>
              {houses[activeHouse].race}
            </p>
            <p>
              <strong>Mark Specialties: </strong>
            </p>
            <ul>
              {houses[activeHouse].specialties.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>House Leader(s): </strong>
              {houses[activeHouse].leader}
            </p>
            <p>
              <strong>House Headquarters: </strong>
              {houses[activeHouse].headquarters}
            </p>
            <p>
              <strong>House Business: </strong>
            </p>
            <ul>
              {houses[activeHouse].business.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>House Characteristics: </strong>
            </p>
            <ul>
              {houses[activeHouse].characteristics.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex btn-row">
              <button
                className="btn btn-primary"
                onClick={handleChooseHouse}
                disabled={
                  ((props.race !== "" &&
                    !houses[activeHouse].race.includes(props.race)) ||
                    (props.race === "Orc" &&
                      houses[activeHouse].race === "Half-Orc or Human")) &&
                  houses[activeHouse].raceType !== "Any Race"
                }
              >
                {((props.race !== "" &&
                  !houses[activeHouse].race.includes(props.race)) ||
                  (props.race === "Orc" &&
                    houses[activeHouse].race === "Half-Orc or Human")) &&
                houses[activeHouse].raceType !== "Any Race"
                  ? "Current Race not Compatible"
                  : houses[activeHouse].mark !== "Aberrant"
                  ? `Choose House ${houses[activeHouse].name} ${houses[activeHouse].raceType}`
                  : `Choose Aberrant Mark`}
              </button>
              {((props.race !== "" &&
                !houses[activeHouse].race.includes(props.race)) ||
                (props.race === "Orc" &&
                  houses[activeHouse].race === "Half-Orc or Human")) &&
              houses[activeHouse].raceType !== "Any Race" ? (
                <button className="btn btn-warning" onClick={overrideRace}>
                  Choose House {houses[activeHouse].name}{" "}
                  {houses[activeHouse].raceType}
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

export default Houses;
