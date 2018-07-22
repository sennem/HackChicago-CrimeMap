import React from "react";
import ReactDOM from "react-dom";
import "./landing.css";
import Geolocation from "react-geolocation";
import Ripples from "react-ripples";
import { MapApp } from "../mapapp/mapapp.js";

export class Landing extends React.Component {
  gotomapapp() {
    var lati = document.getElementById("latitude").value;
    var longi = document.getElementById("longitude").value;
    ReactDOM.render(
      <MapApp lat={lati} long={longi} />,
      document.getElementById("root")
    );
  }

  render() {
    return (
      <div id="outer">
        <Geolocation
          onSuccess={console.log}
          render={({
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {},
            error,
            getCurrentPosition
          }) => (
            <div>
              <div id="topmargin">
                <h3 className="centertext enlargewelcome">Welcome</h3>
                <div className="center">
                  <table>
                    <tr>
                      <td>
                        <input
                          type="text"
                          id="longitude"
                          placeholder="longitude"
                          value={longitude}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          id="latitude"
                          placeholder="latitude"
                          value={latitude}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="center">
                  <Ripples>
                    <button id="viewbutton" onClick={this.gotomapapp}>
                      View Map
                    </button>
                  </Ripples>
                </div>
                <br />
                <div id="notfound" />
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}
