import React, { Component } from "react";

class SidebarCountry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "",
      capital: "",
      ruler: "",
      races: [],
      chars: [],
      noted: [],
      religions: [],
      houses: [],
      comparison: [],
      history: ""
    };
  }

  componentDidMount() {
    this.getCountryInfo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.country !== prevProps.country) {
      this.getCountryInfo();
    }
  }

  getCountryInfo = () => {
    var c = require(`./assets/countries/${this.props.country}`);

    this.setState({ country: c.country });
    this.setState({ capital: c.capital });
    this.setState({ ruler: c.ruler });
    this.setState({ races: c.races });
    this.setState({ chars: c.characteristics });
    this.setState({ noted: c.noted });
    this.setState({ religions: c.religions });
    this.setState({ houses: c.houses });
    this.setState({ comparison: c.comparison });
    this.setState({ history: c.history });
  };

  render() {
    return (
      <div>
        <h1>{this.state.country}</h1>
        {/* Capital */}
        <p>
          <strong>Capital: </strong>
          {this.state.capital}
        </p>
        {/* Ruler */}
        <p>
          <strong>Ruler: </strong>
          {this.state.ruler}
        </p>
        {/* Characteristics */}
        <p>
          <strong>Characteristics: </strong>
        </p>
        <ul>
          {this.state.chars.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {/* Noted */}
        <p>
          <strong>Noted For: </strong>
        </p>
        <ul>
          {this.state.noted.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {/* Religions */}
        <p>
          <strong>Main Religions: </strong>
        </p>
        <ul>
          {this.state.religions.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {/* Houses */}
        <p>
          <strong>Houses: </strong>
        </p>
        <ul>
          {this.state.houses.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {/* Races */}
        <p>
          <strong>Races: </strong>
        </p>
        <ul>
          {this.state.races.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {/* Comparison */}
        <p>
          <strong>Comparison: </strong>
          {this.state.comparison}
        </p>
      </div>
    );
  }
}

export default SidebarCountry;
