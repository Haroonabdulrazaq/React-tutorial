import React, {Component} from "react";
import "./ColoredBoxes.css";

class ColoredBoxes extends Component {
  // constructor(props){
  //   super(props)
  // }
 
  render(){ 
    return(
      <div className="box-wrapper">
        {this.props.boxes}
      </div>
    )
  }
}

export default ColoredBoxes;