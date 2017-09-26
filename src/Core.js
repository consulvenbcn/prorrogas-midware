import React, { Component } from 'react';
import logo from './images/logo.svg';
import $ from 'jquery';
import Foundation from 'foundation-sites';
class Core extends Component {
  componentDidMount() {

        $(document).foundation();

  }
  render() {
    return (
      <div>
        <div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle></button>
          <div className="title-bar-title">Menu</div>
        </div>
        <div className="top-bar" id="example-menu">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-img"><img src="{logo}"/> </li>
              <li>
                <a href="#">One</a>
                <ul className="menu vertical">
                  <li><a href="#">One</a></li>
                  <li><a href="#">Two</a></li>
                  <li><a href="#">Three</a></li>
                </ul>
              </li>
              <li><a href="#">Two</a></li>
              <li><a href="#">Three</a></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><input type="search" placeholder="Search" /></li>
              <li><button type="button" className="button">Search</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Core;
