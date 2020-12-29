import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import SwitchDemo from './SwitchDemo';
import {NavLink} from 'react-router-dom'

 

class App extends Component{
  render(){
    let defaultStyle = {
      margin:"25px",
      fontSize:"15px",
      marginBottom:"50px"
    }
    let active = {
      color:"green",
      textDecoration:"none",
    }
    return (
      <div className="App">
        <NavLink exact to="/" style={defaultStyle} activeStyle={active}> Home </NavLink>
        <NavLink exact to="/about" style={defaultStyle} activeStyle={active}> About </NavLink>
        < SwitchDemo />
      </div>
    )
   
  }
}

export default App;
