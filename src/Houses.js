import React, { useState } from "react";
import { Modal } from "react-bootstrap";

function Houses(props) {
  const [houses, setHouses] = useState([]);
  const [crests, setCrests] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeHouse, setActiveHouse] = useState(-1);

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
  };

  React.useEffect(() => {
    onRender();
  }, []);

  const handleOpenModal = i => {
    setActiveHouse(i);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container_wrap">
      <h1 className="p-3">Houses of Khorvaire</h1>
      <div className="row">
        {console.log(houses)}
        {houses.map((house, i) => (
          <div className="col-md-3" key={house.name}>
            <button
              type="button"
              className="btn btn-link"
              onClick={() => handleOpenModal(i)}
            >
              <div
                className="bkgrnd_img"
                style={{ backgroundImage: `url('${crests[i]}')` }}
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
            <p>
              <strong>Mark: </strong>
              {houses[activeHouse].mark}
            </p>
            <p>
              <strong>Race: </strong>
              {houses[activeHouse].race}
            </p>
            <p>
              <strong>Homeland: </strong>
              {houses[activeHouse].homeland}
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
        </Modal>
      ) : null}
    </div>
  );
}

export default Houses;
