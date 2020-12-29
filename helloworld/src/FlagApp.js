import React, { Component } from 'react';

class FlagApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      countryData: []
    }
  }
  componentDidMount(){
    let url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
    .then(data=> data.json())
    .then(data=>{ 
      data = data.slice(0,4)
      this.setState({countryData: [...data]})
    })
  }
  render() {
    let {countryData} = this.state;
    
    let randomFlag = Math.floor(Math.random()* this.state.countryData.length)
    let countryFlag =  countryData[0] 
    let radioButton = countryData.map((ele, i )=>
          {
       return <label key={i}>{ele.name} <input type="radio" name={i}/></label>
      })
 
    return (
      <div>
        {radioButton}
        {/* {countryFlag} */}
      </div>
    )
  }
}

export default FlagApp
