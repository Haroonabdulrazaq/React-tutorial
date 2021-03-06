import React , {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
 
  render(){
 
    return(
      <div className="navigation">
        <div className="navbar-brand">RecipeApp</div>
        <ul className="nav-list">
          <li className="nav-item" onClick={this.props.onToggle}>New Recipe</li>
          <li className="nav-item" >Home</li>
          <li className="nav-item" >About</li>
          <li className="nav-item" >Contact</li>
        </ul>
      </div>
    )
  }
}

export default Navbar; 