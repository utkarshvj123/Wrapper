import React, { Component } from "react";
import './style.css';

export default class Cards extends Component {
  render() {
    return (
      <div className="card">
        <div className="box">
          <span>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    );
  }
}
