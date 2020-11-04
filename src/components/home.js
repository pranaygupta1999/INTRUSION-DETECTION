import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Home() {
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
               <div class="side1-2">
                 <i  class="fas fa-skull fa-3x"></i>
                 <p>Scan</p>
               </div>
               <div class="side2-2">
                <Link to="/report"><i class="far fa-chart-bar fa-3x"></i></Link>
                 <p>Report</p>
               </div>
               {/* <div class="side2-2">
                <Link to="/trial"><i class="far fa-chart-bar fa-3x"></i></Link>
                 <p>Trial</p>
               </div> */}
            </div>

            <div class="app">
                <div class="shield"><i class="fas fa-shield-alt fa-9x"></i></div>
               <p class="text">System is safe</p>
               <Link to="/detect" class="myyButton">Start</Link>
               </div>
        </div>
        <script src="index.js"></script>
    </body>
       </div>
    )
}

export default Home