import React, { Component } from 'react';
import './App.css';
import "./Todo.css";


class Todo extends Component{

  constructor(props){
    super(props);
    this.state = {
      input: '',
      submit: '',
      lists: []
    }
    this.handleChange =this.handleChange.bind(this)
    this.handleSubmit =this.handleSubmit.bind(this)
 
  }
  handleChange(event){
    this.setState( {
      input: event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState({ 
      lists: [...this.state.lists.concat(this.state.input)],
      input: ''
    })
    
  }


  render(){    
    let todo = this.state.lists.map((list, index)=>(
      <li key={index}>{list}</li>
    ))
    let styles ={
      border: this.state.input.length > 15? "3px solid red":"1px solid black",
      padding: 8,
 
    }
    return(
      <div className="todo-wrapper" >
          <form onSubmit={this.handleSubmit} >
            <input type="text" 
            style={styles}
            placeholder="what needs to be done?"
            value={this.state.input} 
            onChange={this.handleChange}
            />

            <input type="submit" value="Add"  />
          </form>
            <ol>
              {todo}
            </ol>
      </div>
    )
  }
}

export default Todo;