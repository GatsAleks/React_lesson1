import React, { Component } from "react";
import "./Header.css";
import Menu from "./Menu/Menu";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="logo">The Company Name and Logo</div>
      </div>
    );
  }
}
