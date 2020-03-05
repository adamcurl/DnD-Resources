import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Loading from "./Loading";

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
    for (var i = 0; i < crestLen; i++) {
      crestVals.push(crestImgs[i]);
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
    for (var i = 0; i < marksLen; i++) {
      markVals.push(markImgsList[i]);
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
    props.setRace(houses[activeHouse].race);
    setModalOpen(false);
  };

  const overrideRace = () => {
    props.setRace(houses[activeHouse].race);
    props.setHouse(houses[activeHouse].name);
    setModalOpen(false);
  };

  return (
    <div className="container_wrap">
      <h1 className="p-3">Houses of Khorvaire</h1>
      <div className="row">
        {houses.map((house, i) => (
          <div className="col-md-3" key={house.name}>
            <button
              type="button"
              className="btn btn-link no_dec"
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
                {house.name} - Mark of {house.mark}
              </p>
            </button>
          </div>
        ))}
      </div>
      {modalOpen ? (
        <Modal show={modalOpen} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>House {houses[activeHouse].name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-2">
              <a target="_blank" href={houses[activeHouse].link}>
                House {houses[activeHouse].name} {houses[activeHouse].race}{" "}
                Variant Stats, Traits, & Info
              </a>
            </div>
            <p>
              <strong>Mark: </strong>
              {houses[activeHouse].mark}
            </p>
            <p>
              <strong>Race: </strong>
              {houses[activeHouse].race}
            </p>
            <p>
              <strong>Leader: </strong>
              {houses[activeHouse].leader}
            </p>
            <p>
              <strong>Headquarters: </strong>
              {houses[activeHouse].headquarters}
            </p>
            <p>
              <strong>Specialties: </strong>
            </p>
            <ul>
              {houses[activeHouse].specialties.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Business: </strong>
            </p>
            <ul>
              {houses[activeHouse].business.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Characteristics: </strong>
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
                  props.race !== "" &&
                  !props.race
                    .toLowerCase()
                    .includes(houses[activeHouse].race.toLowerCase())
                }
              >
                {props.race !== "" &&
                !props.race
                  .toLowerCase()
                  .includes(houses[activeHouse].race.toLowerCase())
                  ? "Current Race not Compatible"
                  : `Choose House ${houses[activeHouse].name} ${houses[activeHouse].race}`}
              </button>
              {props.race !== "" &&
              !props.race
                .toLowerCase()
                .includes(houses[activeHouse].race.toLowerCase()) ? (
                <button className="btn btn-warning" onClick={overrideRace}>
                  Choose House {houses[activeHouse].name}{" "}
                  {houses[activeHouse].race}
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
