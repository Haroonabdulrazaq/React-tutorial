import React, {Component} from "react";
import "./RecipeList.css";
import Recipe from "./Recipe";
import PropTypes from "prop-types"

 

class RecipeList extends Component {
  static defaultProps = {
    recipe: [{
      title: "Pasta",
      ingredients: ["flour", "water"],
      img: "spagehtti.jpeg",
      instructions: "Boil for five minutes untill is soft serve an walla!"
    },
    {
      title: "Milk Shake",
      ingredients: ["Sugar", "water", "Butter"],
      img: "milkshake.jpeg",
      instructions: "Freeze till it solidifies"
    },
    {
      title: "Avocado Toast",
      ingredients: ["Bread", "Pepper", "Oil", "Salt"],
      img: "Avocado.jpeg",
      instructions: "Spread Avocado bread, add salt, peper and oil to taste"
    }]
  }

  static propTypes = {
    recipe: PropTypes.arrayOf(PropTypes.object)
  }
  render(){
    let recipes = this.props.recipe.map((r, index)=><Recipe key ={index} {...r}/> )
    
    return (
      <div className="recipe-wrapper" >
       { recipes }
      </div>
    )
  }
}

export default RecipeList;