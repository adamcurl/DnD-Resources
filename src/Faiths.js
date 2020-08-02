import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Loading from "./Loading";
import cross from "./assets/imgs/cross.png";

function Faiths(props) {
  const [faiths, setFaiths] = useState([]);
  const [symbols, setSymbols] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFaith, setActiveFaith] = useState(-1);

  const onRender = () => {
    // get house files' keys and values
    const files = ((ctx) => {
      let keys = ctx.keys();
      let values = keys.map(ctx);
      return keys.reduce((o, k, i) => {
        o[k] = values[i];
        return o;
      }, {});
    })(require.context("./assets/faiths", true, /.json/));
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
    setFaiths(array);

    // get crest files' keys and values
    const imgs = ((ctx) => {
      let keys = ctx.keys();
      let values = keys.map(ctx);
      return keys.reduce((o, k, i) => {
        o[k] = values[i];
        return o;
      }, {});
    })(require.context("./assets/imgs/faiths", true, /.png/));
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

  if (faiths.length < 9 || symbols.length < 9) return <Loading />;

  const handleOpenModal = (i) => {
    setActiveFaith(i);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChooseFaith = () => {
    props.setFaith(faiths[activeFaith].name);
    props.setFaithPrompts(faiths[activeFaith].prompts);
    setModalOpen(false);
  };

  return (
    <div className="container_wrap">
      <h1 className="pt-3">Faiths of Eberron</h1>
      <p>The faiths of Eberron are a bit different than other classical fantasy settings. The gods of the Sovereign Host and Dark Six are distant, do not directly influence the world, and don't directly communicate with their followers. Other faiths, like the Blood of Vol or the Path of Light don't worship a diety. Instead, they focus on a manifestation of an idea or attribute. The Undying Court worships the very real council of ancient elves instead of a diety. Others are more of a creed, such as Druids, or Spirits of the Past. In Eberron, it's not the gods, demons, or spirits that give powers to paladins and clerics, but it is the faith of the player that gives them their power.</p>
      <div className="row">
        <div className="col-md-3">
          <button
            type="button"
            className={`btn btn-link no_dec img-btn ${
              props.faith === "No Faith" ? "active-item" : ""
            }`}
            onClick={() => props.setFaith("No Faith")}
          >
            <div
              className={`bkgrnd_img zoom_img`}
              style={{
                backgroundImage: `url('${cross}')`,
                backgroundSize: "90%",
              }}
            />
            <p className="text-center no_dec">No Faith</p>
          </button>
        </div>
        {faiths.map((faith, i) => (
          <div className="col-md-3 pb-5" key={faith.name}>
            <button
              type="button"
              className={`btn btn-link no_dec img-btn ${
                props.faith === faith.name ? "active-item" : ""
              }`}
              onClick={() => handleOpenModal(i)}
            >
              <div
                className="bkgrnd_img zoom_img"
                style={{ backgroundImage: `url('${symbols[i]}')` }}
              />
              <p className="text-center no_dec">{faith.name}</p>
            </button>
          </div>
        ))}
      </div>
      {modalOpen ? (
        <Modal show={modalOpen} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{faiths[activeFaith].name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <strong>Beliefs: </strong>
            </p>
            <ul>
              {faiths[activeFaith].beliefs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Followers: </strong>
              {faiths[activeFaith].followers}
            </p>
            <p>
              <strong>Hierarchy: </strong>
            </p>
            <ul>
              {faiths[activeFaith].hierarchy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Deities: </strong>
            </p>
            <ul>
              {faiths[activeFaith].deities.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>: {item.desc}
                </li>
              ))}
            </ul>
            <p>
              <strong>Practices: </strong>
            </p>
            <ul>
              {faiths[activeFaith].practices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Influence: </strong>
              {faiths[activeFaith].influence}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex btn-row">
              <button className="btn btn-primary" onClick={handleChooseFaith}>
                Choose Faith
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

export default Faiths;
