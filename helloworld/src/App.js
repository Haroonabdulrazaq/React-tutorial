import React, { Component } from 'react';
import './App.css';
import Recipe from "./Recipe"
// import Pet from "./Pet"

class App extends Component {
 
  render(){
    return (
      // <div className="App">
        <div className="recipe-wrapper">
          <Recipe title="Pasta" ingredients = {["flour", "water"]} 
                img="spagehtti.jpeg" instructions="Boil for five minutes untill is soft serve an walla!"/>
          <Recipe title="Milk Shake" ingredients = {["Butter", "Egg", "Sugar"]} 
                img="milkshake.jpeg" instructions="Freeze till it solidifies"/>
          <Recipe title="Avocado Toast" ingredients = {["Salt", "water", "Oil"]} 
                img="Avocado.jpeg" instructions="Spread Avocado bread, add salt, peper and oil to taste"/>
        </div>
      // </div>
    );
  }
  
}

export default App;
