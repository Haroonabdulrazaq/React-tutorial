import React from 'react';
import {Switch, Route} from 'react-router-dom';

function Home() {
  return (
    <div>
      Welcome to React Router
    </div>
  )
}
 function About() {
  return (
    <div>
      Right now in the About Page
    </div>
  )
}

 function SwitchDemo() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component ={Home}/>
        <Route exact path="/about" component ={About}/> 
      </Switch>
    </div>
  )
}
export default SwitchDemo;