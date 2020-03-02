import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Loading from "./Loading";

function Faiths(props) {
  const [faiths, setFaiths] = useState([]);
  const [symbols, setSymbols] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFaith, setActiveFaith] = useState(-1);

  const onRender = () => {
    // get house files' keys and values
    const files = (ctx => {
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
        .replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    setFaiths(array);

    // get crest files' keys and values
    const imgs = (ctx => {
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
    for (var i = 0; i < crestLen; i++) {
      crestVals.push(crestImgs[i]);
    }
    setSymbols(crestVals);
  };

  React.useEffect(() => {
    onRender();
  }, []);

  if (faiths.length < 9 || symbols.length < 9) return <Loading />;

  const handleOpenModal = i => {
    setActiveFaith(i);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container_wrap">
      <h1 className="p-3">Faiths of Eberron</h1>
      <div className="row">
        {faiths.map((faith, i) => (
          <div className="col-md-3 pb-5" key={faith.name}>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => handleOpenModal(i)}
            >
              <div
                className="bkgrnd_img"
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
              {faiths[activeFaith].beliefs.map(item => (
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
              {faiths[activeFaith].hierarchy.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Deities: </strong>
            </p>
            <ul>
              {faiths[activeFaith].deities.map(item => (
                <li key={item.name}>
                  <strong>{item.name}</strong>: {item.desc}
                </li>
              ))}
            </ul>
            <p>
              <strong>Practices: </strong>
            </p>
            <ul>
              {faiths[activeFaith].practices.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Influence: </strong>
              {faiths[activeFaith].influence}
            </p>
          </Modal.Body>
        </Modal>
      ) : null}
    </div>
  );
}

export default Faiths;
