import React, { useState } from "react";

function SidebarWard(props) {
  const [districts, setDistricts] = useState([]);
  const [general, setGeneral] = useState({});

  const getWardInfo = () => {
    const c = props.ward;
    // get list of districts
    let districtArr = [];
    if (c.districts) {
      c.districts.map(district => districtArr.push(district));
    }
    setDistricts(districtArr);
    // get general info
    let genInfo = {};
    if (c.other) {
      genInfo = c.other;
    }
    setGeneral(genInfo);
  };

  React.useEffect(() => {
    getWardInfo();
  }, [props]);

  const printLocation = location => {
    let locStr = "<ul>";
    location.forEach(item => {
      locStr += "<li>" + item.name + "</li>";
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

  const printInfo = obj => {
    let html = "";

    if (obj.shops && obj.shops.length) {
      html += "<h4>Shops</h4>";
      html += printLocation(obj.shops);
    }
    if (obj.taverns && obj.taverns.length) {
      html += "<h4>Taverns</h4>";
      html += printLocation(obj.taverns);
    }
    if (obj.inns && obj.inns.length) {
      html += "<h4>Inns</h4>";
      html += printLocation(obj.inns);
    }
    if (obj.entertainment && obj.entertainment.length) {
      html += "<h4>Entertainment</h4>";
      html += printLocation(obj.entertainment);
    }
    if (obj.temples && obj.temples.length) {
      html += "<h4>Temples</h4>";
      html += printLocation(obj.temples);
    }
    if (obj.government && obj.government.length) {
      html += "<h4>Government</h4>";
      html += printLocation(obj.government);
    }
    if (obj.residential && obj.residential.length) {
      html += "<h4>Residential</h4>";
      html += printLocation(obj.residential);
    }
    if (obj.knowledge && obj.knowledge.length) {
      html += "<h4>Knowledge</h4>";
      html += printLocation(obj.knowledge);
    }
    if (obj.transportation && obj.transportation.length) {
      html += "<h4>Transportation</h4>";
      html += printLocation(obj.transportation);
    }
    if (obj.restaurants && obj.restaurants.length) {
      html += "<h4>Restaurants</h4>";
      html += printLocation(obj.restaurants);
    }
    if (obj.industry && obj.industry.length) {
      html += "<h4>Industry</h4>";
      html += printLocation(obj.industry);
    }
    if (obj.illegal && obj.illegal.length) {
      html += "<h4>Illegal</h4>";
      html += printLocation(obj.illegal);
    }
    return { __html: html };
  };

  return (
    <div className="sidebar_inner">
      <h1>
        {props.ward.name.replace(/_/g, " ").replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        })}
      </h1>
      {districts.length ? (
        <>
          <h2>Districts</h2>
          {districts.map(district => (
            <div key={district.districtName} className="district">
              <h3 className="district_name">{district.districtName}</h3>
              <p className="district_desc">{district.description}</p>
              <div dangerouslySetInnerHTML={printInfo(district)} />
            </div>
          ))}
        </>
      ) : null}
      <h2 style={{ marginBottom: "5px" }}>General</h2>
      <p className="district_desc">{general.description}</p>
      <div dangerouslySetInnerHTML={printInfo(general)} />
    </div>
  );
}

export default SidebarWard;
