import React, {Component} from "react";
import "./Recipe.css";
 

class Recipe extends Component {
  render(){
    let {title, img, instructions} = this.props
    let ingredients = this.props.ingredients.map((ingredient, index)=>(
        <li key ={index}> {ingredient} </li>)
    )
    return (
      <div className="recipe-card">
        <img src={img} alt={title}/>
        <h3>{title}</h3>
        <h4>Ingredients:</h4>
        <ul>
          {ingredients}
        </ul>
        <h4>Instructions</h4>
        <p>{instructions}</p>
       
      </div>
    )
  }
}

export default Recipe;