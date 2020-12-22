import React , {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
  static defaultProps = {
    nav: ["New Recipe","Home","About","Contact us"]
  }
 
  render(){
    let navigations = this.props.nav.map((ele, index)=><li key={index} className="nav-item"> {ele} </li>)
    return(
      <div className="navigation">
        <div className="navbar-brand">RecipeApp</div>
        <ul className="nav-list">
          {navigations}
        </ul>
      </div>
    )
  }
}

export default Navbar; 