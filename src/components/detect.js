import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContextProvider';

const { ipcRenderer } = window.require("electron");

// import mytext from '../Results_knn.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      arg1: "",
      arg2: ""
    };
    this.handleClick = this.handleClick.bind(this);
    console.log(this.state.arg1);
  }
  static contextType = GlobalContext;
  componentDidMount() {
    this.handleClick();
  }
  handleClick() {
    // ipcRenderer.send("packets", );
    // ipcRenderer.send("persentage", );
    ipcRenderer.send("run_script",)
  }

  render() {
    const maliciousPacket = <p>{this.context.maliciousPacketCount}</p>
    const percentage = <p>{(this.context.maliciousPacketCount / this.context.totalPacketCount * 100).toFixed(2)}</p>
    return (
      <div>
        <body>
          <nav class="navbar">
            <div class="option"><i class="fa fa-home"></i></div>
            <p class="name">Intrusion Detection System</p>
            <div class="closetag" id="close"> X </div>
          </nav>

          <div class="app-body">
            <div class="sidebar">
              <div class="side1-2" >
                <i class="fas fa-skull fa-3x"></i>
                <p>Scan</p>
              </div>
              <div class="side2-2">
                <Link to="/report"><i class="far fa-chart-bar fa-3x"></i></Link>
                <p>Report</p>
              </div>
            </div>

            <div class="app">
              <div class="console">
                <div id="container">
                  <p class="con1">{percentage}</p>
                  <p class="con2">Intrusion chance</p>
                </div>
                <div class="c2">
                  <p class="date">
                  </p>
                  <p class="type">YOU ARE UNDER ATTACK</p>
                  <div class="type1">
                    {maliciousPacket}
                  </div>


                  <p id="ip" class="ip"></p>
                  <p id="isp" class="isp"></p>
                </div>
              </div>
              <div class="again">
                <p>Start scan again ?</p>
                <a class="myButton" onClick={this.handleClick}>Start</a>
                {/* <Link to="/home" class="myButton">Start</Link> */}
              </div>

            </div>

          </div>







          <script src="index.js"></script>
          <script src="remote.js"></script>

        </body>
      </div>
    )
  }
}