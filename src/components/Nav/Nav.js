import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary top-bar fixed" id="navbar">
    <div className="row">
      <div className="col">
        <a className="navbar-brand" href="/">
          Clicky Game
        </a>
      </div>
      <div className="col">
        <h3>{`${props.navCenter||"Click an image to begin!!"}`}
        </h3>
      </div>
      <div className="col">
        <h3>
          <span>
            Score: {`${props.currentScore||"0"}`} &nbsp;
          </span>
          <span>
          | &nbsp;  Top Score: {`${props.topScore||"0"}`}
          </span>
        </h3>
      </div>
    </div>
  </nav>
);

export default Nav;
