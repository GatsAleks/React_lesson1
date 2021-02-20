import React, { Component } from "react";
import "./Menu.css";

export default class Menu extends Component {
  render() {
    return (
      <div className="nav">
        <a href="#">About the company</a>
        <a href="#">Additional links</a>
        <a href="#">Services</a>
        <a href="#">Patrners</a>
        <a href="#">Information</a>
        <a href="#">Contacts</a>
      </div>
    );
  }
}
