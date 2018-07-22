import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { TeamPage } from "./team/team.js";

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
