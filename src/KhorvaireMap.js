import React, { useState } from "react";
import map from "./assets/imgs/Khorvaire.jpg";
import worldMap from "./assets/imgs/eberron_world_map.jpg";
import Loading from "./Loading";
import { Modal } from "react-bootstrap";

const KhorvaireMap = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const [continentModalOpen, setContinentModalOpen] = useState(false);
  const [continent, setContinent] = useState("");
  const [continentList, setContinentList] = useState([]);

  const [isWorldMap, setIsWorldMap] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const onRender = () => {
    // get country files' keys and values
    const files = (ctx => {
      let keys = ctx.keys();
      let values = keys.map(ctx);
      return keys.reduce((o, k, i) => {
        o[k] = values[i];
        return o;
      }, {});
    })(require.context("./assets/countries", true, /.json/));
    const keys = Object.keys(files);
    let array = Object.values(files);

    // add country names to the array and set state
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
    setCountries(array);

    // get continent files' keys and values
    const continentFiles = (ctx => {
      let keys = ctx.keys();
      let values = keys.map(ctx);
      return keys.reduce((o, k, i) => {
        o[k] = values[i];
        return o;
      }, {});
    })(require.context("./assets/continents", true, /.json/));
    const continentKeys = Object.keys(continentFiles);
    let continentArray = Object.values(continentFiles);

    // add continent names to the array and set state
    const continentLength = continentArray.length;
    for (var i = 0; i < continentLength; i++) {
      continentArray[i].name = continentKeys[i]
        .replace("./", "")
        .replace(".json", "")
        .replace(/_/g, " ")
        .replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
    setContinentList(continentArray);
  };

  React.useEffect(() => {
    onRender();
  }, []);

  if (countries.length < 9) return <Loading />;

  // country functions
  const handleOpenModal = i => {
    setCountry(i);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleChooseHomeland = () => {
    props.setHomeland(countries[country].country + ", " + "Khorvaire");
    setModalOpen(false);
  };

  // continent functions
  const handleOpenContinentModal = i => {
    setContinent(i);
    setContinentModalOpen(true);
  };

  const handleCloseContinentModal = () => {
    setContinentModalOpen(false);
  };

  const handleChooseContinentHomeland = () => {
    props.setHomeland(continentList[continent].name);
    setContinentModalOpen(false);
  };

  const handleDropdown = val => {
    setIsWorldMap(val);
    setShowDropdown(false);
  };

  return (
    <div className="container_wrap">
      <div className="d-flex justify-content-between">
        <div>
          <h1 className="pl-3">Homelands</h1>
        </div>
        <div class="dropdown">
          From {!isWorldMap ? "another Continent" : "Khorvaire"}?{" "}
          <button
            class="btn btn-primary dropdown-toggle"
            onClick={() => setShowDropdown(!showDropdown)}
            type="button"
            id="changeMap"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Change Map
          </button>
          <div
            class={`dropdown-menu dropdown-menu-right ${
              showDropdown ? "show" : ""
            }`}
            aria-labelledby="changeMap"
          >
            <button
              class={`dropdown-item ${!isWorldMap ? "active" : ""}`}
              onClick={() => handleDropdown(false)}
            >
              Khorvaire
            </button>
            <button
              class={`dropdown-item ${isWorldMap ? "active" : ""}`}
              onClick={() => handleDropdown(true)}
            >
              World Map
            </button>
          </div>
        </div>
      </div>
      <div id="map-box">
        {!isWorldMap ? (
          <>
            <img src={map} className="map_img" />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(0)}
              title="Aundair"
              style={{
                position: "absolute",
                left: "37.41%",
                top: "44.19%",
                width: "6.28%",
                height: "10.48%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(13)}
              title="Thrane"
              style={{
                position: "absolute",
                left: "42.44%",
                top: "54.79%",
                width: "7.31%",
                height: "10.26%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(4)}
              title="Demon Wastes"
              style={{
                position: "absolute",
                left: "19.47%",
                top: "25.14%",
                width: "17.48%",
                height: "10.6%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(11)}
              title="Shadow Marches"
              style={{
                position: "absolute",
                left: "2.94%",
                top: "48.82%",
                width: "10.65%",
                height: "26.04%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(5)}
              title="Droaam"
              style={{
                position: "absolute",
                left: "14.15%",
                top: "56.71%",
                width: "9.14%",
                height: "16.8%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(6)}
              title="Eldeen Reaches"
              style={{
                position: "absolute",
                left: "18.28%",
                top: "40.81%",
                width: "17.33%",
                height: "12.4%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(7)}
              title="Karrnath"
              style={{
                position: "absolute",
                left: "53.88%",
                top: "36.08%",
                width: "16.61%",
                height: "17.02%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(1)}
              title="Breland"
              style={{
                position: "absolute",
                left: "25.99%",
                top: "65.5%",
                width: "17.25%",
                height: "13.3%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(15)}
              title="Zilargo"
              style={{
                position: "absolute",
                left: "32.98%",
                top: "80.5%",
                width: "10.81%",
                height: " 13.3%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(3)}
              title="Darguun"
              style={{
                position: "absolute",
                left: "45.22%",
                top: "84.1%",
                width: "7.39%",
                height: "11.72%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(2)}
              title="Mournland"
              style={{
                position: "absolute",
                left: "51.26%",
                top: "56.37%",
                width: "8.82%",
                height: "10.48%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(10)}
              title="Q'Barra"
              style={{
                position: "absolute",
                left: "72.24%",
                top: "64.37%",
                width: "12.08%",
                height: "13.53%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(14)}
              title="Valenar"
              style={{
                position: "absolute",
                left: "58.97%",
                top: "71.25%",
                width: "12.48%",
                height: "22.55%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(12)}
              title="Talenta Plains"
              style={{
                position: "absolute",
                left: "63.98%",
                top: "55.02%",
                width: "9.62%",
                height: "9.24%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(9)}
              title="Mror Holds"
              style={{
                position: "absolute",
                left: "73.04%",
                top: "37.66%",
                width: "7.47%",
                height: "9.92%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenModal(8)}
              title="Lhazaar Principalities"
              style={{
                position: "absolute",
                left: "82.97%",
                top: "18.38%",
                width: "15.97%",
                height: "44.64%",
                zIndex: 2
              }}
            />
          </>
        ) : (
          <>
            <img src={worldMap} className="map_img" />
            <button
              className="transparent_btn"
              onClick={() => handleOpenContinentModal(5)}
              title="Xen'Drik"
              style={{
                position: "absolute",
                left: "14.4%",
                top: "58.18%",
                width: "28.22%",
                height: "19.69%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenContinentModal(0)}
              title="Aerenal"
              style={{
                position: "absolute",
                left: "40.08%",
                top: "45.87%",
                width: "7.94%",
                height: "12.34%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenContinentModal(1)}
              title="Argonnessen"
              style={{
                position: "absolute",
                left: "51.4%",
                top: "47.94%",
                width: "21.06%",
                height: "29.87%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenContinentModal(4)}
              title="Sarlona"
              style={{
                position: "absolute",
                left: "72.78%",
                top: "36.79%",
                width: "15.88%",
                height: "15.06%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => setIsWorldMap(false)}
              title="Khorvaire"
              style={{
                position: "absolute",
                left: "25.02%",
                top: "32.14%",
                width: "21.06%",
                height: "12.62%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenContinentModal(2)}
              title="Everice"
              style={{
                position: "absolute",
                left: "18.5%",
                top: "78.38%",
                width: "21.44%",
                height: "5.99%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenContinentModal(3)}
              title="Frostfell"
              style={{
                position: "absolute",
                left: "19.54%",
                top: "23.77%",
                width: "18.76%",
                height: "5.53%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenContinentModal(3)}
              title="Frostfell"
              style={{
                position: "absolute",
                left: "62.54%",
                top: "24.09%",
                width: "16.06%",
                height: "3.55%",
                zIndex: 2
              }}
            />
            <button
              className="transparent_btn"
              onClick={() => handleOpenContinentModal(2)}
              title="Everice"
              style={{
                position: "absolute",
                left: "62.2%",
                top: "80.09%",
                width: "16.38%",
                height: "5.73%",
                zIndex: 2
              }}
            />
          </>
        )}
      </div>
      {modalOpen ? (
        <Modal show={modalOpen} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{countries[country].country}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Capital */}
            <p>
              <strong>Capital: </strong>
              {countries[country].capital}
            </p>
            {/* Ruler */}
            <p>
              <strong>Ruler: </strong>
              {countries[country].ruler}
            </p>
            {/* Characteristics */}
            <p>
              <strong>Characteristics: </strong>
            </p>
            <ul>
              {countries[country].characteristics.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {/* Noted */}
            <p>
              <strong>Noted For: </strong>
            </p>
            <ul>
              {countries[country].noted.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {/* Religions */}
            <p>
              <strong>Main Religions: </strong>
            </p>
            <ul>
              {countries[country].religions.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {/* Houses */}
            <p>
              <strong>Houses: </strong>
            </p>
            <ul>
              {countries[country].houses.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {/* Races */}
            <p>
              <strong>Races: </strong>
            </p>
            <ul>
              {countries[country].races.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {/* Comparison */}
            <p>
              <strong>Comparison: </strong>
              {countries[country].comparison}
            </p>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex btn-row">
              <button
                className="btn btn-primary"
                onClick={handleChooseHomeland}
              >
                Choose Homeland
              </button>
              <button className="btn btn-secondary" onClick={handleCloseModal}>
                Cancel
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      ) : null}
      {continentModalOpen ? (
        <Modal show={continentModalOpen} onHide={handleCloseContinentModal}>
          <Modal.Header closeButton>
            <Modal.Title>{continentList[continent].name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Description */}
            <p>
              <strong>Description: </strong>
              {continentList[continent].desc}
            </p>
            {/* Characteristics */}
            <p>
              <strong>Characteristics: </strong>
            </p>
            <ul>
              {continentList[continent].characteristics.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {/* Notable Locations */}
            <p>
              <strong>Notable Locations: </strong>
            </p>
            <ul>
              {continentList[continent].locations.map(location => (
                <li key={location.name}>
                  <strong>{location.name}</strong>: {location.desc}
                </li>
              ))}
            </ul>
            {/* Noted */}
            <p>
              <strong>Noted For: </strong>
            </p>
            <ul>
              {continentList[continent].noted.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {/* Religions */}
            <p>
              <strong>Main Religions: </strong>
            </p>
            <ul>
              {continentList[continent].religions.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {/* Races */}
            <p>
              <strong>Races: </strong>
            </p>
            <ul>
              {continentList[continent].races.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex btn-row">
              <button
                className="btn btn-primary"
                onClick={handleChooseContinentHomeland}
              >
                Choose Homeland
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleCloseContinentModal}
              >
                Cancel
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      ) : null}
    </div>
  );
};

export default KhorvaireMap;
