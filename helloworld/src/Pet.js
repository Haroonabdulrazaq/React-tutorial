import React, {Component} from "react";
import "./Pet.css";
import HobbyList from "./HobbyList";

 

class Pet extends Component {
  render(){
    return (
      <div className="card">
        <h2>Moxie</h2>
        <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png" alt="Moxie my Cat" className="imageSize"/>
        <HobbyList/>
      </div>
    )
  }
}

export default Pet;