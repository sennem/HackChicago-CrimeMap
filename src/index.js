import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TeamPage } from "./team/team.js";
import { Landing } from "./mapfiles/landing/landing.js";
import { MapApp } from "./mapfiles/mapapp/mapapp.js";

class TestPage extends React.Component {
  render() {
    return (
      <div>
        <TeamPage />
      </div>
    );
  }
}

ReactDOM.render(<TestPage />, document.getElementById("root"));
