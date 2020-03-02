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
    const files = (ctx => {
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
    const imgs = (ctx => {
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

  const handleOpenModal = i => {
    setActiveRace(i);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container_wrap">
      <h1 className="p-3">Races of Eberron</h1>
      <div className="row">
        {races.map((race, i) => (
          <div className="col-md-3" key={race.name}>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => handleOpenModal(i)}
            >
              <div
                className="bkgrnd_img"
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
            <p>
              <strong>Origin: </strong>
            </p>
            <ul>
              {races[activeRace].origin.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Current Homes: </strong>
            </p>
            <ul>
              {races[activeRace].currHomes.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Summary: </strong>
            </p>
            <ul>
              {races[activeRace].summary.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Characteristics: </strong>
            </p>
            <ul>
              {races[activeRace].characteristics.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Houses: </strong>
            </p>
            <ul>
              {races[activeRace].houses.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Modal.Body>
        </Modal>
      ) : null}
    </div>
  );
}

export default Races;
