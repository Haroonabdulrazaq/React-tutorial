import React, { Component } from 'react';
import './App.css'; 
import HackerNews from './HackerNews';
// import RecipeApp from './RecipeApp';
 

class App extends Component{
  render(){
 
    return(
      <div className="App">
        <HackerNews />
      </div>
    )
  }
}

export default App;
