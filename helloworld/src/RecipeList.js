import React, {Component} from "react";
import "./RecipeList.css";
import Recipe from "./Recipe";
import PropTypes from "prop-types"

 

class RecipeList extends Component {
 

  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  render(){
    let recipes = this.props.recipes.map((r)=> <Recipe key ={r.id} {...r}/> )
    
    return (
      <div className="recipe-wrapper" >
       { recipes }
      </div>
    )
  }
}

export default RecipeList;