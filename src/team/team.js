import React from "react";
import "./team.js";
import { ProfileWhole } from "./teamwhole/teamwhole.js";
import AnchorLink from "react-anchor-link-smooth-scroll";

export class TeamPage extends React.Component {
  render() {
    return (
      <div>
        <ProfileWhole />
      </div>
    );
  }
}
