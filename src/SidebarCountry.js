import React, { useState } from "react";

function SidebarCountry(props) {
  const [country, setCountry] = useState("");
  const [capital, setCapital] = useState("");
  const [ruler, setRuler] = useState("");
  const [races, setRaces] = useState([]);
  const [chars, setChars] = useState([]);
  const [noted, setNoted] = useState([]);
  const [religions, setReligions] = useState([]);
  const [houses, setHouses] = useState([]);
  const [comparison, setComparison] = useState([]);
  const [history, setHistory] = useState("");

  const getCountryInfo = () => {
    const c = require(`./assets/countries/${props.country}`);

    setCountry(c.country);
    setCapital(c.capital);
    setRuler(c.ruler);
    setRaces(c.races);
    setChars(c.characteristics);
    setNoted(c.noted);
    setReligions(c.religions);
    setHouses(c.houses);
    setComparison(c.comparison);
    setHistory(c.history);
  };

  React.useEffect(() => {
    getCountryInfo();
  }, [props]);

  return (
    <div className="sidebar_inner">
      <h1>{country}</h1>
      {/* Capital */}
      <p>
        <strong>Capital: </strong>
        {capital}
      </p>
      {/* Ruler */}
      <p>
        <strong>Ruler: </strong>
        {ruler}
      </p>
      {/* Characteristics */}
      <p>
        <strong>Characteristics: </strong>
      </p>
      <ul>
        {chars.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* Noted */}
      <p>
        <strong>Noted For: </strong>
      </p>
      <ul>
        {noted.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* Religions */}
      <p>
        <strong>Main Religions: </strong>
      </p>
      <ul>
        {religions.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* Houses */}
      <p>
        <strong>Houses: </strong>
      </p>
      <ul>
        {houses.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* Races */}
      <p>
        <strong>Races: </strong>
      </p>
      <ul>
        {races.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* Comparison */}
      <p>
        <strong>Comparison: </strong>
        {comparison}
      </p>
      <a
        href={`https://www.dndbeyond.com/sources/wgte/welcome-to-khorvaire#${country}`}
        target="_blank"
      >
        More on {country}
      </a>
    </div>
  );
}

export default SidebarCountry;
