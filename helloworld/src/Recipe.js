import React, {Component} from "react";
import "./Recipe.css";
import PropTypes from "prop-types";
 

class Recipe extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired
  }
  render(){
    let {title, img, instructions, id, onDelete} = this.props
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
       <button onClick={()=>onDelete(id)}>DELETE</button>
      </div>
    )
  }
}

export default Recipe;
