import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContextProvider';

export default class Report extends Component {
  constructor() {
    super();
    this.data = [];
    console.log("Report Monted");
  }
  static contextType = GlobalContext;

  render() {

    const reportData = this.context.reportData
    return (
      <div>
        <body>
          <nav class="navbar">
            <div class="option"><i class="fa fa-home fa-1x"></i></div>
            <p class="name">Intrusion Detection System</p>
            <div class="closetag" id="close"> X </div>
          </nav>
          <div class="app-body">
            <div class="sidebar">
              <div class="side1">
                <Link to="/detect"><i class="fas fa-skull fa-3x"></i></Link>
                <p>Scan</p>
              </div>
              <div class="side2">
                <i class="far fa-chart-bar fa-3x"></i>
                <p>Report</p>
              </div>
            </div>

            <div class="tablediv">

              <table >
                <tr>
                  <th>Timestamp</th>
                  <th>Malicious Packet</th>
                  <th>Normal Packet</th>
                  <th>Percentage</th>
                </tr>
                {reportData.length > 0 ? reportData : null}
              </table>

              <a href="#" class="button">Stop</a>
            </div>

          </div>

          <script src="index.js"></script>
          <script src="remote.js"></script>

        </body>

      </div>
    )
  }
}

