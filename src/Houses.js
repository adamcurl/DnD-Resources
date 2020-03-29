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
    const files = (ctx => {
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
        .replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    setHouses(array);

    // get crest files' keys and values
    const imgs = (ctx => {
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
    const markImgs = (ctx => {
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

  const handleOpenModal = i => {
    setActiveHouse(i);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChooseHouse = () => {
    props.setHouse(houses[activeHouse].name);
    props.setMark(houses[activeHouse].mark);

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
    setModalOpen(false);
  };

  return (
    <div className="container_wrap">
      <h1 className="pt-3">Marks/Houses of Khorvaire</h1>
      <div className="row">
        <div className="col-md-3">
          <button
            type="button"
            className={`btn btn-link no_dec img-btn ${
              props.house === "No House" ? "active-item" : ""
            }`}
            onClick={() => props.setHouse("No House")}
          >
            <div
              className={`bkgrnd_img zoom_img`}
              style={{
                backgroundImage: `url('${cross}')`,
                backgroundSize: "90%"
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
                    props.race !== "Orc"
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
                Mark of {house.mark} / House {house.name} - {house.raceType}
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
            {/* <p>
              <strong>Mark: </strong>
              {houses[activeHouse].mark}
            </p> */}
            <p>
              <strong>Race: </strong>
              {houses[activeHouse].race}
            </p>
            <p>
              <strong>Mark Specialties: </strong>
            </p>
            <ul>
              {houses[activeHouse].specialties.map(item => (
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
              {houses[activeHouse].business.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>House Characteristics: </strong>
            </p>
            <ul>
              {houses[activeHouse].characteristics.map(item => (
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
                  (props.race !== "" &&
                    !houses[activeHouse].race.includes(props.race)) ||
                  (props.race === "Orc" &&
                    houses[activeHouse].race === "Half-Orc or Human")
                }
              >
                {(props.race !== "" &&
                  !houses[activeHouse].race.includes(props.race)) ||
                (props.race === "Orc" &&
                  houses[activeHouse].race === "Half-Orc or Human")
                  ? "Current Race not Compatible"
                  : `Choose House ${houses[activeHouse].name} ${houses[activeHouse].raceType}`}
              </button>
              {(props.race !== "" &&
                !houses[activeHouse].race.includes(props.race)) ||
              (props.race === "Orc" &&
                houses[activeHouse].race === "Half-Orc or Human") ? (
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
