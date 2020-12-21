import React, {Component} from "react"

class HobbyList extends Component{
  render(){
    let hobbies = ["Sleeping", "Eating", "Cudling", "Mewing"]
    return (
      <div>
        <h5 style={{
          textAlign:"center",
          fontSize:"15px"
        }}>Hobby</h5>
        <ul>
          {
            hobbies.map((hobby,i)=> <li key={i}style={{
          textAlign:"center"
        }}> {hobby}</li>)
            }
        </ul>
      </div>
    )
  }
}
export default HobbyList;