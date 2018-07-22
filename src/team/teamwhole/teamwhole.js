import React from "react";
import "./teamwhole.css";
import {
  MarkBio,
  ArnavBio,
  WillBio,
  JerryBio,
  ChristianBio
} from "../teambios/teambios.js";
import {
  MarkImg,
  ArnavImg,
  WillImg,
  JerryImg,
  ChristianImg
} from "../teamimages/teamimages.js";
import { Github, Linkedin } from "../teamicons/teamicons.js";
import AnchorLink from "react-anchor-link-smooth-scroll";
export class ProfileWhole extends React.Component {
  render() {
    return (
      <div className="peoplesections" id="grad1">
        <h4 className="center">Our team consists of:</h4>

        <table>
          <tbody>
            <tr>
              <AnchorLink href="#Mark">
                <td>Mark</td>
              </AnchorLink>
              <AnchorLink href="#Arnav">
                <td>Arnav</td>
              </AnchorLink>
              <AnchorLink href="#Will">
                <td>Will</td>
              </AnchorLink>
              <AnchorLink href="#Jerry">
                <td>Jerry</td>
              </AnchorLink>
              <AnchorLink href="#Christian">
                <td>Christian</td>
              </AnchorLink>
            </tr>
          </tbody>
        </table>

        <div name="Mark" id="Mark" className="center">
          {/*
          <MarkImg />
          <br />
          <table>
            <tbody>
              <tr>
                <td><Github glink="https://github.com/sennem"/></td>
                <td><Linkedin ilink="https://www.linkedin.com/in/mark-senne-b45807138/" /></td>
              </tr>
            </tbody>
          </table>
          <br />
          <MarkBio />
          */}

          <table>
            <tr>
              <div id="mark-image">
                <td>
                  <MarkImg />
                </td>
              </div>
              <div id="mark-bio">
                <td>
                  <MarkBio />
                </td>
              </div>
            </tr>
          </table>
        </div>
        <div name="Arnav" id="Arnav" className="center">
          <ArnavImg />
          <br />
          <table>
            <tbody>
              <tr>
                <td>
                  <Github glink="https://github.com/ghulearnav" />
                </td>
                <td>
                  <Linkedin ilink="https://www.linkedin.com/in/mark-senne-b45807138/" />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <ArnavBio />
        </div>
        <div name="Will" id="Will" className="center">
          <WillImg />
          <br />
          <table>
            <tbody>
              <tr>
                <td>
                  <Github glink="https://github.com/hackwill" />
                </td>
                <td>
                  <Linkedin ilink="https://www.linkedin.com/in/mark-senne-b45807138/" />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <WillBio />
        </div>
        <div name="Jerry" id="Jerry" className="center">
          <JerryImg />
          <br />
          <table>
            <tbody>
              <tr>
                <td>
                  <Github glink="https://github.com/ghulearnav" />
                </td>
                <td>
                  <Linkedin ilink="https://www.linkedin.com/in/mark-senne-b45807138/" />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <JerryBio />
        </div>
        <div name="Christian" id="Christian" className="center">
          <ChristianImg />
          <br />
          <table>
            <tbody>
              <tr>
                <td>
                  <Github glink="https://github.com/nxvgalang " />
                </td>
                <td>
                  <Linkedin ilink="https://www.linkedin.com/in/mark-senne-b45807138/" />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <ChristianBio />
        </div>
      </div>
    );
  }
}
