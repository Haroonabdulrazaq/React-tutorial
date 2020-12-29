import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';



const Home =()=>(
  <div>Home Page</div>
);

const About =()=>(
  <div>About Page</div>
);


const SwitchDemo = ()=> {
return (<Switch>
  <Route exact path= "/" component={Home}/>
  <Route exact path= "/about" component={About}/>
</Switch>)
}

export default SwitchDemo
