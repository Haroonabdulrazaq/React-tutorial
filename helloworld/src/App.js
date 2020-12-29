import React, { Component } from 'react';
import './App.css'; 
import SwitchDemo from './SwitchDemo';
import {NavLink} from 'react-router-dom';

 

class App extends Component{
  render(){
    const active ={textDecoration:'none', cursor:'default', color:'green'};
    const defaultStyle = { margin:"5px" }
    return(
      <div className="App">
        <NavLink exact style={defaultStyle} activeStyle= {active} to="/" > Home</NavLink>
        <NavLink exact style={defaultStyle} activeStyle= {active} to="/about">About </NavLink>
        <div style={{fontSize:"3em", margin:"25px"}}>

          <SwitchDemo />
        </div>
      </div>
    )
  }
}

export default App;
