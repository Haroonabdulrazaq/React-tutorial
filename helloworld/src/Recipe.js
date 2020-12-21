import React, {Component} from "react";
import "./Recipe.css";
import PropTypes from "prop-types";
 

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredient: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired
  }
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
