import React, { Component } from "react";

class SidebarWard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      districts: [],
      general: {}
    };
  }

  componentDidMount() {
    this.getWardInfo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.ward !== prevProps.ward) {
      this.getWardInfo();
    }
  }

  getWardInfo = () => {
    const c = require(`./assets/sharn/${this.props.ward}`);
    // get list of districts
    let districtArr = [];
    if (c.districts) {
      c.districts.map(district => districtArr.push(district));
      this.setState({ districts: districtArr });
    }
    // get general info
    if (c.other) this.setState({ general: c.other });

    console.log(c);
  };

  printInfo = obj => {
    let html = "";

    if (obj.shops && obj.shops.length) {
      //
    }
    if (obj.taverns && obj.taverns.length) {
      //
    }
    if (obj.inns && obj.inns.length) {
      //
    }
    if (obj.entertainment && obj.entertainment.length) {
      //
    }
    if (obj.temples && obj.temples.length) {
      //
    }
    if (obj.government && obj.government.length) {
      //
    }
    if (obj.residential && obj.residential.length) {
      //
    }
    if (obj.knowledge && obj.knowledge.length) {
      //
    }
    if (obj.transportation && obj.transportation.length) {
      //
    }
    if (obj.restaurants && obj.restaurants.length) {
      //
    }
    if (obj.industry && obj.industry.length) {
      //
    }
    if (obj.illegal && obj.illegal.length) {
      //
    }
    return { __html: "" };
  };

  render() {
    return (
      <div className="sidebar_inner">
        <h1>Districts</h1>
        {this.state.districts.map(district => (
          <div key={district.districtName}>
            <h2>{district.districtName}</h2>
            <p>{district.description}</p>
            <div dangerouslySetInnerHTML={this.printInfo(district)} />
          </div>
        ))}
        <h1>General</h1>
        <p>{this.state.general.description}</p>
        <div dangerouslySetInnerHTML={this.printInfo(this.state.general)} />
      </div>
    );
  }
}

export default SidebarWard;
