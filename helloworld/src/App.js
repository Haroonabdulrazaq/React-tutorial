import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
// import Todo from "./Todo";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      recipes: [{
        id:0,
        title: "Pasta",
        ingredients: ["flour", "water"],
        img: "spagehtti.jpeg",
        instructions: "Boil for five minutes untill is soft serve an walla!"
      },
      {
        id:1,
        title: "Milk Shake",
        ingredients: ["Sugar", "water", "Butter"],
        img: "milkshake.jpeg",
        instructions: "Freeze till it solidifies"
      },
      {
        id:2,
        title: "Avocado Toast",
        ingredients: ["Bread", "Pepper", "Oil", "Salt"],
        img: "Avocado.jpeg",
        instructions: "Spread Avocado bread, add salt, peper and oil to taste"
      }],
      nextRecipeId: 3,
    }
    this.handleSave =  this.handleSave.bind(this)
  }
  
  handleSave(recipe){
    const newRecipe = {...recipe, id: this.state.nextRecipeId}
    this.setState((prevState, props)=>{
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      }
    })
  }

  render(){
    return(
      <div className="App">
        <Navbar />
        <RecipeInput onSave={this.handleSave}/>
        <RecipeList recipes = {this.state.recipes}/>
      </div>
    )
  }
}

export default App;
