import React from 'react';
import './App.css';

 import {Route, BrowserRouter as Router} from "react-router-dom"
 import Home from "./components/home"
 import Report from "./components/report"
import Detect from "./components/detect"
import Trial from "./components/trial"
import './components/home.css'
import './components/detect.css'
import './components/report.css'

function App() {
  return (
    <div>
       
    
    <Router>
    <Route path="/trial"><Trial/></Route>
       <Route path="/home"><Home/></Route>
       <Route path="/detect"><Detect/></Route>
       <Route path="/report"><Report/></Route>

     </Router>
     </div>
  );
}

export default App;
