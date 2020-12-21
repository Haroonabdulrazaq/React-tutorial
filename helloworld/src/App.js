import React, { Component } from 'react';
import './App.css';
import RecipeList from "./RecipeList";
import Navbar from "./Navbar";

class App extends Component {
 
  render(){
    return (
      
        <div className="App">
          <Navbar />
        <RecipeList/>
        </div>
    );
  }
  
}

export default App;
