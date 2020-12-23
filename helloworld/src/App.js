import React, { Component } from 'react';
import './App.css';
import RecipeList from "./RecipeList";
import Navbar from "./Navbar";
import Instructor from './Instructor';

class App extends Component {
 
  render(){
    return (
      
        <div className="App">
          <Instructor />
        </div>
    );
  }
  
}

export default App;
