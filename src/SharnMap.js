import React, { Component } from "react";
import map from "./assets/imgs/Sharn.jpg";
import SidebarWard from "./SidebarWard";

class SharnMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      division: -1,
      hoverActive: true,
      activeDivision: {},
      wards: [],
      locList: ""
    };
  }

  componentDidMount() {
    // get ward files' keys and values
    const files = (ctx => {
      let keys = ctx.keys();
      let values = keys.map(ctx);
      return keys.reduce((o, k, i) => {
        o[k] = values[i];
        return o;
      }, {});
    })(require.context("./assets/sharn", true, /.json/));
    const keys = Object.keys(files);
    let array = Object.values(files);

    // add ward names to the array and set state
    const length = array.length;
    for (var i = 0; i < length; i++) {
      array[i].name = keys[i].replace("./", "").replace(".json", "");
    }
    this.setState({ wards: array });
    this.compileLocations(array);

    // image map resize function
    window.onload = function() {
      var ImageMap = function(map, img) {
          var n,
            areas = map.getElementsByTagName("area"),
            len = areas.length,
            coords = [],
            previousWidth = 1234;
          for (n = 0; n < len; n++) {
            coords[n] = areas[n].coords.split(",");
          }
          this.resize = function() {
            var n,
              m,
              clen,
              x = img.offsetWidth / previousWidth;
            for (n = 0; n < len; n++) {
              clen = coords[n].length;
              for (m = 0; m < clen; m++) {
                coords[n][m] *= x;
              }
              areas[n].coords = coords[n].join(",");
            }
            previousWidth = document.body.clientWidth;
            return true;
          };
          window.onresize = this.resize;
        },
        imageMap = new ImageMap(
          document.getElementById("smap"),
          document.getElementById("simg")
        );
      imageMap.resize();
      return;
    };
  }

  displayDivision(d) {
    if (this.state.hoverActive) {
      this.setState({ division: d });
      this.setState({ activeDivision: this.state.wards[d] });
    }
  }

  lockDivision(d) {
    if (d === this.state.division) {
      const currHover = this.state.hoverActive;
      this.setState({ hoverActive: !currHover });
    }
    this.setState({ division: d });
    this.setState({ activeDivision: this.state.wards[d] });
  }

  printLocation = (location, name) => {
    let locStr = "";
    location.forEach(item => {
      locStr +=
        "<li><p>" +
        item.name +
        " <strong>(" +
        name.replace(/_/g, " ").replace(/\w\S*/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }) +
        ")</strong></p></li>";
      if (item.desc && item.desc.length) {
        locStr += "<ul>";
        item.desc.forEach(d => {
          locStr += "<li>" + d + "</li>";
        });
        locStr += "</ul>";
      }
    });
    return locStr;
  };

  compileLocations = wards => {
    let arr = Array(13).fill("");
    const locArr = [
      "Shops",
      "Taverns",
      "Inns",
      "Entertainment",
      "Temples",
      "Government",
      "Residential",
      "Knowledge",
      "Transportation",
      "Restaurants",
      "Industry",
      "Illegal",
      "Guilds"
    ];
    let html = "";

    // get all district info
    wards.forEach(ward => {
      if (ward.districts) {
        ward.districts.forEach(district => {
          let count = 0;
          for (var key in district) {
            console.log(key, district[key]);
            if (
              district.hasOwnProperty(key) &&
              key !== "description" &&
              key !== "districtName" &&
              district[key].length
            ) {
              arr[count] += this.printLocation(district[key], ward.name);
            }
            if (key === "description" || key === "districtName") count--;
            count++;
          }
        });
      }
    });

    // get all general info
    wards.forEach(ward => {
      if (ward.other) {
        let count = 0;
        for (var key in ward.other) {
          console.log(key, ward.other[key]);
          if (
            ward.other.hasOwnProperty(key) &&
            key !== "description" &&
            key !== "districtName" &&
            ward.other[key].length
          ) {
            arr[count] += this.printLocation(ward.other[key], ward.name);
          }
          if (key === "description" || key === "districtName") count--;
          count++;
        }
      }
    });

    // plug info into a string
    arr.forEach((value, index) => {
      html += "<h4>" + locArr[index] + "</h4>";
      html += "<ul>";
      html += value;
      html += "</ul>";
    });
    this.setState({ locList: html });
  };

  render() {
    return (
      <div>
        {console.log("wards", this.state.wards)}
        <div className="map_wrap" style={{ width: "50%" }}>
          <img
            src={map}
            useMap="#sharn-map"
            alt="sharn_map"
            id="simg"
            className="map_img"
          />
          <map name="sharn-map" id="smap">
            <area
              onClick={() => this.lockDivision(0)}
              onMouseEnter={() => this.displayDivision(0)}
              target=""
              alt="Cliffside"
              title="Cliffside"
              coords="287,1182,259,1194,224,1193,190,1182,154,1162,117,1138,87,1118,75,1092,68,1067,66,1040,66,1005,67,975,99,943,141,912,150,915,141,948,121,1002,123,1066,178,1111,237,1152,270,1161"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(2)}
              onMouseEnter={() => this.displayDivision(2)}
              target=""
              alt="Lower Central"
              title="Lower Central"
              coords="443,900,502,866,531,851,551,835,557,823,589,811,626,805,678,809,721,810,798,832,803,868,758,900,706,907,677,929,621,936,513,940,443,926"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(4)}
              onMouseEnter={() => this.displayDivision(4)}
              target=""
              alt="Lower Menthis Plateau"
              title="Lower Menthis Plateau"
              coords="474,958,507,947,552,948,577,949,593,940,666,938,705,922,753,917,817,925,815,950,838,967,837,995,823,1011,738,1025,686,1025,648,1027,614,1025,566,1030,552,1021,533,1028,507,1030,479,1018,456,1008,452,981,463,973"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(5)}
              onMouseEnter={() => this.displayDivision(5)}
              target=""
              alt="Lower Northedge"
              title="Lower Northedge"
              coords="724,773,744,764,761,750,785,744,847,762,910,773,953,786,985,806,982,834,911,840,877,846,810,845,805,834,754,821,728,808"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(3)}
              onMouseEnter={() => this.displayDivision(3)}
              target=""
              alt="Lower Dura"
              title="Lower Dura"
              coords="153,884,160,873,171,866,180,853,197,846,214,833,216,824,234,817,285,784,299,777,309,754,336,749,367,728,466,732,550,730,581,731,605,731,632,731,654,732,672,741,672,765,639,778,611,780,545,802,527,823,512,825,506,858,440,896,405,912,374,930,357,944,344,957,334,970,350,973,357,992,380,1007,434,1025,481,1034,519,1035,580,1033,636,1033,662,1068,659,1089,582,1091,544,1082,469,1103,437,1091,397,1102,357,1089,337,1101,312,1102,286,1087,242,1035,221,1057,183,993,175,972,157,979,153,933,156,902"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(6)}
              onMouseEnter={() => this.displayDivision(6)}
              target=""
              alt="Lower Tavick's Landing"
              title="Lower Tavick's Landing"
              coords="648,1033,691,1031,726,1030,753,1023,800,1016,834,1013,864,1014,895,1004,943,982,912,981,893,975,858,950,837,937,838,901,835,888,869,850,894,841,951,838,990,832,1013,827,1042,827,1069,836,1102,846,1117,859,1117,881,1117,895,1130,909,1151,926,1169,942,1167,959,1169,985,1133,1033,1077,1026,1069,1096,992,1119,948,1161,865,1168,743,1186,699,1120,677,1111,672,1064"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(14)}
              onMouseEnter={() => this.displayDivision(14)}
              target=""
              alt="The Depths"
              title="The Depths"
              coords="345,971,366,940,400,920,423,913,436,908,442,927,467,936,482,944,460,963,447,995,442,1020,417,1019,381,1007"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(13)}
              onMouseEnter={() => this.displayDivision(13)}
              target=""
              alt="The Cogs"
              title="The Cogs"
              coords="2,1253,1233,1460"
              shape="rect"
            />
            <area
              onClick={() => this.lockDivision(1)}
              onMouseEnter={() => this.displayDivision(1)}
              target=""
              alt="Lava Pools"
              title="Lava Pools"
              coords="2,1462,1233,1598"
              shape="rect"
            />
            <area
              onClick={() => this.lockDivision(7)}
              onMouseEnter={() => this.displayDivision(7)}
              target=""
              alt="Middle Central"
              title="Middle Central"
              coords="444,529,536,504,563,488,601,482,638,478,681,483,722,480,756,485,793,492,795,537,754,536,702,536,670,548,572,556,520,551,476,558,451,583,451,597,440,597"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(9)}
              onMouseEnter={() => this.displayDivision(9)}
              target=""
              alt="Middle Menthis Plateau"
              title="Middle Menthis Plateau"
              coords="454,580,475,558,504,555,527,554,567,554,607,554,649,548,671,549,711,536,749,538,806,538,814,550,834,563,834,584,780,590,695,596,636,599,551,597,503,603,457,598"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(10)}
              onMouseEnter={() => this.displayDivision(10)}
              target=""
              alt="Middle Northedge"
              title="Middle Northedge"
              coords="725,462,760,449,776,446,792,449,840,456,887,459,935,464,953,470,977,478,979,489,906,494,858,502,837,523,832,547,818,549,803,535,796,495,761,484,726,477"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(8)}
              onMouseEnter={() => this.displayDivision(8)}
              target=""
              alt="Middle Dura"
              title="Middle Dura"
              coords="159,522,182,516,187,508,214,501,222,493,261,481,300,469,314,458,339,451,379,439,422,440,459,444,495,443,541,440,598,439,651,439,668,445,672,480,626,474,566,485,530,505,483,516,442,528,436,583,408,589,375,592,333,568,348,580,367,589,399,593,427,596,472,602,503,604,545,601,586,598,640,601,658,619,662,724,601,730,560,725,445,725,374,719,300,717,251,698,239,689,191,677,155,644,156,559,159,545"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(11)}
              onMouseEnter={() => this.displayDivision(11)}
              target=""
              alt="Middle Tavick's Landing"
              title="Middle Tavick's Landing"
              coords="650,602,767,591,814,589,859,589,892,582,923,571,876,584,835,589,834,551,835,525,854,506,880,498,912,494,941,493,975,492,998,488,1022,487,1061,490,1088,495,1112,504,1110,516,1118,526,1134,535,1154,543,1165,554,1167,651,1117,668,1072,692,1012,702,950,710,899,713,816,720,748,723,704,723,673,724,672,619"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(12)}
              onMouseEnter={() => this.displayDivision(12)}
              target=""
              alt="Skyway"
              title="Skyway"
              coords="381,192,402,158,438,144,440,109,451,61,459,92,478,32,496,50,515,36,531,72,540,83,553,87,566,44,579,81,604,78,627,31,639,54,649,53,658,78,688,73,704,66,723,83,733,74,745,82,770,81,783,92,792,90,805,20,823,81,823,108,835,117,839,143,870,156,893,192"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(16)}
              onMouseEnter={() => this.displayDivision(16)}
              target=""
              alt="Upper Dura"
              title="Upper Dura"
              coords="154,313,167,282,182,293,197,271,212,302,224,267,238,289,260,253,287,280,325,243,345,294,356,319,394,325,424,333,457,332,492,319,523,319,532,432,418,431,347,427,287,428,224,417,176,409,156,403"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(15)}
              onMouseEnter={() => this.displayDivision(15)}
              target=""
              alt="Upper Central"
              title="Upper Central"
              coords="344,290,370,227,392,262,414,223,430,267,440,270,463,218,486,275,507,205,527,254,544,257,571,206,593,256,613,255,621,271,645,277,645,301,645,322,529,319,511,314,483,318,466,327,442,332,403,326,377,322,359,318"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(17)}
              onMouseEnter={() => this.displayDivision(17)}
              target=""
              alt="Upper Menthis Plateau"
              title="Upper Menthis Plateau"
              coords="527,323,643,324,659,301,661,268,708,255,726,278,729,293,767,288,776,426,659,429,536,431"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(19)}
              onMouseEnter={() => this.displayDivision(19)}
              target=""
              alt="Upper Tavick's Landing"
              title="Upper Tavick's Landing"
              coords="771,310,823,311,881,309,892,289,900,306,917,254,936,307,962,305,985,299,1007,279,1026,289,1041,282,1052,261,1094,271,1109,275,1121,289,1168,299,1168,393,1127,396,1076,410,967,418,947,416,932,417,781,427"
              shape="poly"
            />
            <area
              onClick={() => this.lockDivision(18)}
              onMouseEnter={() => this.displayDivision(18)}
              target=""
              alt="Upper Northedge"
              title="Upper Northedge"
              coords="728,275,761,262,777,244,797,271,815,257,826,270,849,211,871,270,893,256,911,262,916,239,930,275,948,267,963,271,985,246,1002,253,1020,219,1037,278,1025,282,1009,276,973,301,937,300,919,253,898,293,883,293,875,308,779,306,771,288,741,287"
              shape="poly"
            />
          </map>
        </div>
        <div className="sidebar" style={{ width: "50%" }}>
          {this.state.division !== -1 ? (
            <SidebarWard
              ward={this.state.activeDivision}
              allList={this.state.locList}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default SharnMap;
