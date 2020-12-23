import React , {Component} from "react";
import "./Navbar.css";
import PropTypes from "prop-types"

class Navbar extends Component {
  static defaultProps = {
    nav: ["New Recipe","Home","About","Contact us"]
  }
  static propTypes = {
    nav: PropTypes.arrayOf(PropTypes.string).isRequired
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