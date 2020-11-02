import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom'

const {ipcRenderer} = window.require("electron");

// import mytext from '../Results_knn.js';

export default class App extends Component
{

  constructor(props)
  {
      super(props);
      this.state = {
        arg1: "",
        arg2: ""
      };
      this.handleClick = this.handleClick.bind(this);
      console.log(this.state.arg1);
  }

  componentDidMount() {
    ipcRenderer.on("packets", (event, arg1) => {
     
      const newText = arg1.split('\n').map(str => <p>{str}</p>);
      this.setState({
        arg1: newText
    })
    })
    console.log(this.state.arg1);

    ipcRenderer.on("persentage", (event, arg2) => {
     
      const newText = arg2.split('\n').map(str => <p>{str}</p>);
      this.setState({
        arg2: newText
    })
    })

  }
  handleClick(){
      // ipcRenderer.send("packets", );
      // ipcRenderer.send("persentage", );
      ipcRenderer.send("run_script",)
  }

    render()
    {
      const {arg1} = this.state;
      const {arg2} = this.state;
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
           <i  class="fas fa-skull fa-3x"></i>
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
        <p class="con1">{arg2}</p>
              <p class="con2">Intrusion chance</p>
            </div>
            <div class="c2">
            <p class="date">
            </p>
            <p class="type">YOU ARE UNDER ATTACK</p>
            <div class="type1">
              {arg1}
              </div>
            
            
            <p id="ip"  class="ip"></p>
            <p id="isp" class="isp"></p>
          </div>
        </div>
        <div class="again">
          <p>Start scan again ?</p>
          <a class="myButton" onClick={this.handleClick}>start</a>
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