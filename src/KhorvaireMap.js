import React, { useState } from "react";
import map from "./assets/imgs/Khorvaire.jpg";
import SidebarCountry from "./SidebarCountry";
import SidebarCity from "./SidebarCity";

function KhorvaireMap(props) {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [hoverActive, setHoverActive] = useState(true);

  // const resizeMap = () => {
  //   // image map resize function
  //   var ImageMap = function(map, img) {
  //     var n,
  //       areas = map.getElementsByTagName("area"),
  //       len = areas.length,
  //       coords = [],
  //       previousWidth = 5033;
  //     for (n = 0; n < len; n++) {
  //       coords[n] = areas[n].coords.split(",");
  //     }
  //     this.resize = function() {
  //       var n,
  //         m,
  //         clen,
  //         x = img.offsetWidth / previousWidth;
  //       for (n = 0; n < len; n++) {
  //         clen = coords[n].length;
  //         for (m = 0; m < clen; m++) {
  //           coords[n][m] *= x;
  //         }
  //         areas[n].coords = coords[n].join(",");
  //       }
  //       previousWidth = document.body.clientWidth;
  //       return true;
  //     };
  //     window.onresize = this.resize;
  //   };
  //   let imageMap = new ImageMap(
  //     document.getElementById("kmap"),
  //     document.getElementById("kimg")
  //   );
  //   imageMap.resize();
  //   // window.onload = function() {
  //   //   imageMap.resize();
  //   //   return;
  //   // };
  // };

  // React.useEffect(() => {
  //   resizeMap();
  // }, []);

  const displayCountry = c => {
    if (hoverActive) {
      setCity("");
      setCountry(c);
    }
  };

  const lockCountry = c => {
    if (c === country) {
      const currHover = hoverActive;
      setHoverActive(!currHover);
    }
    setCountry(c);
  };

  return (
    <div className="container_wrap">
      <div className="row">
        <div className="col-md-9">
          <div id="map-box">
            <img src={map} className="map_img" />
            <button
              className="transparent_btn"
              onClick={() => lockCountry("aundair")}
              onMouseEnter={() => displayCountry("aundair")}
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
              onClick={() => lockCountry("thrane")}
              onMouseEnter={() => displayCountry("thrane")}
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
              onClick={() => lockCountry("demon_wastes")}
              onMouseEnter={() => displayCountry("demon_wastes")}
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
              onClick={() => lockCountry("shadow_marches")}
              onMouseEnter={() => displayCountry("shadow_marches")}
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
              onClick={() => lockCountry("droaam")}
              onMouseEnter={() => displayCountry("droaam")}
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
              onClick={() => lockCountry("elden_reaches")}
              onMouseEnter={() => displayCountry("elden_reaches")}
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
              onClick={() => lockCountry("karrnath")}
              onMouseEnter={() => displayCountry("karrnath")}
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
              onClick={() => lockCountry("breland")}
              onMouseEnter={() => displayCountry("breland")}
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
              onClick={() => lockCountry("zilargo")}
              onMouseEnter={() => displayCountry("zilargo")}
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
              onClick={() => lockCountry("darguun")}
              onMouseEnter={() => displayCountry("darguun")}
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
              onClick={() => lockCountry("cyre")}
              onMouseEnter={() => displayCountry("cyre")}
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
              onClick={() => lockCountry("qbarra")}
              onMouseEnter={() => displayCountry("qbarra")}
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
              onClick={() => lockCountry("valenar")}
              onMouseEnter={() => displayCountry("valenar")}
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
              onClick={() => lockCountry("talenta_plains")}
              onMouseEnter={() => displayCountry("talenta_plains")}
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
              onClick={() => lockCountry("mror_holds")}
              onMouseEnter={() => displayCountry("mror_holds")}
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
              onClick={() => lockCountry("lhazaar_principalities")}
              onMouseEnter={() => displayCountry("lhazaar_principalities")}
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
          </div>
        </div>
        <div className="sidebar col-md-3">
          {country !== "" ? (
            <SidebarCountry country={country} />
          ) : city !== "" ? (
            <SidebarCity city={city} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default KhorvaireMap;
