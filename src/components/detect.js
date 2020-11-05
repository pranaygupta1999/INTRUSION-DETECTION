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
      arg2: "",
      footerTextMessage: "",
      isScanning: true
    };
    this.handleClick = this.handleClick.bind(this);
    console.log(this.state.arg1);
  }
  static contextType = GlobalContext;
  componentDidMount() {
    const self = this;
    ipcRenderer.on("processStopped", (event, message) => {
      console.log(message)
      self.setState({
        footerTextMessage: message,
        isScanning: false,
      })
    })
    this.handleClick();
  }
  handleClick() {
    // ipcRenderer.send("packets", );
    // ipcRenderer.send("persentage", );
    this.setState({
      footerTextMessage: "",
      isScanning: true,
    })
    ipcRenderer.send("run_script")
  }

  render() {
    var greencolor = {
      color: '#44c767'
    }
    const maliciousPacket = this.context.maliciousPacketCount;
    const percentage = (this.context.maliciousPacketCount / this.context.totalPacketCount * 100).toFixed(2);
    const normalPacket = (this.context.totalPacketCount - this.context.maliciousPacketCount)
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
                  {percentage > 75.0 ? <p class="type">YOU ARE UNDER ATTACK</p> : <p class="type" style={greencolor}>SYSTEM IS SAFE</p>}
                  <div class="type1">
                    <p class="color"> Malicious Packets : {maliciousPacket}</p>
                    <p class="color">Normal Packets  : {normalPacket}</p>

                  </div>

                  {!this.state.isScanning && <p>{this.state.footerTextMessage}</p>}
                  <p id="ip" class="ip"></p>
                  <p id="isp" class="isp"></p>
                </div>
              </div>
              {!this.state.isScanning && [
                <p style={{ marginTop: "10px", color: "whitesmoke" }}>Msg: {this.state.footerTextMessage}</p>,
                <div class="again">
                  <br />
                  <p>Start scan again ?</p>
                  <a class="myButton" onClick={this.handleClick}>Start</a>
                  {/* <Link to="/home" class="myButton">Start</Link> */}
                </div>
              ]}
            </div>

          </div>







          <script src="index.js"></script>
          <script src="remote.js"></script>

        </body>
      </div>
    )
  }
}