import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function Report() {
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
            <Link to="/detect"><i  class="fas fa-skull fa-3x"></i></Link>
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
              <th>Detection</th>
              <th>Accuracy</th>
            </tr>
            {/* <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
            </tr>  */}
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
    
    export default Report