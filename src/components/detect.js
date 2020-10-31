import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';




// const percentage = 66;

function Detect() {

  const [percentage, setPercent] = useState(0);

  useEffect(() => {
    
    //       var bar = new ProgressBar.Circle(container, {
    // color: '#aaa',
    // // This has to be the same size as the maximum width to
    // // prevent clipping
    // strokeWidth: 4,
    // trailWidth: 1,
    // easing: 'easeInOut',
    // duration: 1400,
    // text: {
    //   autoStyleContainer: false
    // },
    // from: { color: '#21232f', width: 0},
    // to: { color: '#f60237', width: 4 },
    // // Set default step function for all animate calls
    // step: function(state, circle) {
    //   circle.path.setAttribute('stroke', state.color);
    //   circle.path.setAttribute('stroke-width', state.width);

    //   var value = Math.round(circle.value() * 100);
    //   if (value === 0) {
    //     circle.setText('0%');
    //   } else {
    //     circle.setText(value+"%");
    //   }

    // }
    // });
    // bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    // bar.text.style.fontSize = '25px';
  });

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
            <CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,
 
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',
 
    // Text size
    textSize: '16px',
 
    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,
 
    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',
 
    // Colors
    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>
            </div>
            <div class="c2">
            <p class="date">
            </p>
            <p class="type">YOU ARE UNDER ATTACK</p>
            
            <p id="ip"  class="ip"></p>
            <p id="isp" class="isp"></p>
          </div>
        </div>
        <div class="again">
          <p>Start scan again ?</p>
          <Link to="/home" class="myButton">Start</Link>
        </div>
        
    </div>

    </div>





    

<script src="index.js"></script>
<script src="remote.js"></script>

  </body>
  </div>
        )
    }
    
    export default Detect