import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link,Switch,Route} from "react-router-dom";
import logo from './logo.svg';
import About from "./Components/About";

import './App.css';

import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Contact}/>
         <Route path="/About" component={About}/>
      
      </Switch>
    </div>
         
  );
}

export default App;
