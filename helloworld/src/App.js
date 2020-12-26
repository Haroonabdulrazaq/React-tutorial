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
      showForm: false,
    }
    this.handleSave =  this.handleSave.bind(this)
    this.toggleForm =  this.toggleForm.bind(this)
    this.handleClose =  this.handleClose.bind(this)
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

  toggleForm(){
    this.setState((state)=>{
     return { showForm: !state.showForm }
    })
  }
  handleClose(){
    this.setState({
      showForm: false 
    })
  }

  render(){
    const {showForm } = this.state
    return(
      <div className="App">
        <Navbar onToggle = {this.toggleForm}/>
        {showForm? 
              <RecipeInput 
                    onSave={this.handleSave}
                    onClose={this.handleClose}/>: 
              null}
        <RecipeList recipes = {this.state.recipes}/>
      </div>
    )
  }
}

export default App;
