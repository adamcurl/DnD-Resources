import React, { Component } from "react";

class SidebarWard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      districts: []
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
    c.districts.map(district => districtArr.push(district.districtName));
    this.setState({ districts: districtArr });

    console.log(c);
  };

  render() {
    return (
      <div className="sidebar_inner">
        <h1>Districts</h1>
        {this.state.districts.map(district => (
          <h2 key={district}>{district}</h2>
        ))}
      </div>
    );
  }
}

export default SidebarWard;
