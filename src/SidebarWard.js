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
    }
    this.setState({ districts: districtArr });
    // get general info
    let genInfo = {};
    if (c.other) {
      genInfo = c.other;
    }
    this.setState({ general: genInfo });

    console.log(c);
  };

  printLocation = location => {
    let locStr = "<ul>";
    location.forEach(item => {
      locStr += "<li><p>" + item.name + "</p></li>";
      locStr += "<ul>";
      if (item.desc && item.desc.length) {
        item.desc.forEach(d => {
          locStr += "<li>" + d + "</li>";
        });
      }
      locStr += "</ul>";
    });
    locStr += "</ul>";
    return locStr;
  };

  printInfo = obj => {
    let html = "";

    if (obj.shops && obj.shops.length) {
      html += "<h4>Shops</h4>";
      html += this.printLocation(obj.shops);
    }
    if (obj.taverns && obj.taverns.length) {
      html += "<h4>Taverns</h4>";
      html += this.printLocation(obj.taverns);
    }
    if (obj.inns && obj.inns.length) {
      html += "<h4>Inns</h4>";
      html += this.printLocation(obj.inns);
    }
    if (obj.entertainment && obj.entertainment.length) {
      html += "<h4>Entertainment</h4>";
      html += this.printLocation(obj.entertainment);
    }
    if (obj.temples && obj.temples.length) {
      html += "<h4>Temples</h4>";
      html += this.printLocation(obj.temples);
    }
    if (obj.government && obj.government.length) {
      html += "<h4>Government</h4>";
      html += this.printLocation(obj.government);
    }
    if (obj.residential && obj.residential.length) {
      html += "<h4>Residential</h4>";
      html += this.printLocation(obj.residential);
    }
    if (obj.knowledge && obj.knowledge.length) {
      html += "<h4>Knowledge</h4>";
      html += this.printLocation(obj.knowledge);
    }
    if (obj.transportation && obj.transportation.length) {
      html += "<h4>Transportation</h4>";
      html += this.printLocation(obj.transportation);
    }
    if (obj.restaurants && obj.restaurants.length) {
      html += "<h4>Restaurants</h4>";
      html += this.printLocation(obj.restaurants);
    }
    if (obj.industry && obj.industry.length) {
      html += "<h4>Industry</h4>";
      html += this.printLocation(obj.industry);
    }
    if (obj.illegal && obj.illegal.length) {
      html += "<h4>Illegal</h4>";
      html += this.printLocation(obj.illegal);
    }
    return { __html: html };
  };

  render() {
    return (
      <div className="sidebar_inner">
        <h1>
          {this.props.ward.replace(/_/g, " ").replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          })}
        </h1>
        {this.state.districts.length ? (
          <>
            <h2>Districts</h2>
            {this.state.districts.map(district => (
              <div key={district.districtName} className="district">
                <h3 className="district_name">{district.districtName}</h3>
                <p className="district_desc">{district.description}</p>
                <div dangerouslySetInnerHTML={this.printInfo(district)} />
              </div>
            ))}
          </>
        ) : null}
        <h2 style={{ marginBottom: "5px" }}>General</h2>
        <p className="district_desc">{this.state.general.description}</p>
        <div dangerouslySetInnerHTML={this.printInfo(this.state.general)} />
      </div>
    );
  }
}

export default SidebarWard;
