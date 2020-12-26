import React, {Component} from "react";
import "./instructor.css"

 

class Instructor extends Component {
  constructor(props){
    super(props);

    this.state = {
      instructors: [
        {
          name: "tim",
          hobbies: ["Sailing", "React"]
        },
        {
          name: "Matt",
          hobbies: ["D3", "Math"]
        },
        {
          name: "Colt",
          hobbies: ["CSS", "Hiking"]
        },
        {
          name: "Ellie",
          hobbies: ["Music", "Es6"]
        }
      ]
    };

    setTimeout(() => {
      let randInst = Math.floor(Math.random()*4)
      let hobbyIndex = Math.floor(Math.random()*2)

      let instructors = this.state.instructors.slice()
      instructors[randInst] = Object.assign({}, this.state.instructors[randInst])

      instructors[randInst].hobbies = instructors[randInst].hobbies.slice()
      instructors[randInst].hobbies = instructors[randInst].hobbies.splice(hobbyIndex, 1)

      this.setState({instructors})
  
  
    }, 2000);
  };




  render(){
    const instructors = this.state.instructors.map((instructor, index)=>(
      <li key ={index}>
        <h3>{instructor.name}</h3> 
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4> 
      </li>
       
    ))
    return (
      <div >
        {instructors}
      </div>
    )
  }
}

export default Instructor;