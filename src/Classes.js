import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Loading from "./Loading";

function Classes(props) {
  const [classes, setClasses] = useState([]);
  const [symbols, setSymbols] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeClass, setActiveClass] = useState(-1);

  const onRender = () => {
    // get house files' keys and values
    const files = ((ctx) => {
      let keys = ctx.keys();
      let values = keys.map(ctx);
      return keys.reduce((o, k, i) => {
        o[k] = values[i];
        return o;
      }, {});
    })(require.context("./assets/classes", true, /.json/));
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
    setClasses(array);

    // get crest files' keys and values
    const imgs = ((ctx) => {
      let keys = ctx.keys();
      let values = keys.map(ctx);
      return keys.reduce((o, k, i) => {
        o[k] = values[i];
        return o;
      }, {});
    })(require.context("./assets/imgs/classes", true, /.svg/));
    const crestImgs = Object.values(imgs);
    let crestVals = [];

    // add crest names to the array and set state
    const crestLen = crestImgs.length;
    for (var j = 0; j < crestLen; j++) {
      crestVals.push(crestImgs[j]);
    }
    setSymbols(crestVals);
  };

  React.useEffect(() => {
    onRender();
  }, []);

  if (classes.length < 12 || symbols.length < 12) return <Loading />;

  const handleOpenModal = (i) => {
    setActiveClass(i);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChooseClass = () => {
    props.setDndClass(classes[activeClass].name);
    props.setClassPrompts(classes[activeClass].prompts);
    setModalOpen(false);
  };

  return (
    <div className="container_wrap">
      <h1 className="pt-3">Classes</h1>
      <p>All of the classic D&D races are available in Eberron, with the addition of a new class: The Artificer. The artificer is sort of a mix between an inventor and wizard. They excel in creating magical items and unlocking magic in everyday items.</p>
      <div className="row">
        {classes.map((dndClass, i) => (
          <div className="col-md-3 pb-5" key={dndClass.name}>
            <button
              type="button"
              className={`btn btn-link no_dec img-btn ${
                props.dndClass === dndClass.name ? "active-item" : ""
              }`}
              onClick={() => handleOpenModal(i)}
            >
              <div
                className="bkgrnd_img zoom_img class_img"
                style={{ backgroundImage: `url('${symbols[i]}')` }}
              />
              <p className="text-center no_dec">{dndClass.name}</p>
            </button>
          </div>
        ))}
      </div>
      {modalOpen ? (
        <Modal show={modalOpen} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{classes[activeClass].name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={classes[activeClass].link}
              >
                {classes[activeClass].name} Stats, Traits, & Info
              </a>
            </div>
            <p>
              <strong>Description: </strong>
              {classes[activeClass].desc}
            </p>
            <p>
              <strong>Primary Ability: </strong>
              {classes[activeClass].primaryAbility}
            </p>
            <p>
              <strong>Cool Features: </strong>
            </p>
            <ul>
              {classes[activeClass].coolFeatures.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex btn-row">
              <button className="btn btn-primary" onClick={handleChooseClass}>
                Choose Class
              </button>
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

export default Classes;
