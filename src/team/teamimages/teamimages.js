import React from "react";
import "./teamimages.css";
import jerry from "/pics/IMG-0532.JPG";
import christ from "/pics/christ.jpg";

export class MarkImg extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            src="https://camp.masonhackclub.com/assets/images/leaders/mark.jpg"
            alt="Mark"
            className="profileimgl"
          />
        </div>
      </div>
    );
  }
}
export class ArnavImg extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            src="https://camp.masonhackclub.com/assets/images/leaders/arnav.jpg"
            alt="Arnav"
            className="profileimgr"
          />
        </div>
      </div>
    );
  }
}
export class WillImg extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img
            src="https://camp.masonhackclub.com/assets/images/leaders/will.jpg"
            alt="Will"
            className="profileimgl"
          />
        </div>
      </div>
    );
  }
}
export class JerryImg extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={jerry} alt="Jerry" className="profileimgrj" />
        </div>
      </div>
    );
  }
}
export class ChristianImg extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={christ} alt="Christian" className="profileimgl" />
        </div>
      </div>
    );
  }
}
