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
          arg: ""
        };
        this.handleClick = this.handleClick.bind(this);
        console.log(this.state.arg);
    }

    componentDidMount() {
      ipcRenderer.on("result", (event, arg) => {
        // arg.join('\n');
        // arg = arg[0];
        // arg.toString();
        
        // this.setState({
        //     arg: arg
        // })
        const newText = arg.split('\n').map(str => <p>{str}</p>);
        this.setState({
          arg: newText
      })
      })
      console.log(this.state.arg);

      // const newText = myt.split('\n');
    //   const newText = mytext.split('\n').map(str => <p>{str}</p>);
    //   this.setState({
    //     arg: newText
    // })
    }
    

    handleClick(){
        ipcRenderer.send("result", );
        // console.log("sdf");
        // console.log(this.state.arg);
    }

    render()
    {
      console.log("this.state.arg");

      const {arg} = this.state;
        return(

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
                    <Link to="/detect"><i  class="fas fa-skull fa-3x"></i></Link>
                    <p>Scan</p>
                  </div>
                  <div class="side2">
                    <i class="far fa-chart-bar fa-3x"></i>
                    <p>Report</p>
                  </div>
               </div>
        
               <div class="tablediv">
               <p class="type">Scan report</p>
               
               <div class="displaybox">
               {arg}
               {/* {myt} */}
               </div>
                
                  <button onClick={this.handleClick}></button>    

            </div>
        
             </div>
        
            
        
            
        
            
        <script src="index.js"></script>
        <script src="remote.js"></script>
        
          </body>
        
          </div>
  

        )
    }
}