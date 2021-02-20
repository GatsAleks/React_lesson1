import React, { Component } from "react";
import "./Footer.css";
import Menu from "../Header/Menu/Menu";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Menu />
        <div>All rights are reserved</div>
      </div>
    );
  }
}
