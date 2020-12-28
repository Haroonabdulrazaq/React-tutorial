import React, { Component } from 'react'

class HackerNews extends Component {
  constructor(props){
    super(props);
    this.state = {
      stories: []
    }
  }
  componentDidMount(){
    let topStories = "https://hacker-news.firebaseio.com/v0/topstories.json";
    let storyUrlBase = "https://hacker-news.firebaseio.com/v0/item/";

    fetch(topStories)
    .then(data=> data.json())
    .then(data => data.map(id=>{
       let url = `${storyUrlBase}${id}.json`;
       return fetch(url).then(data => data.json())
    }))
    .then(promises=> Promise.all(promises))
    .then(stories=> this.setState({stories}))
  }
  render() {
    let views = <div>Loading...</div>
    let {stories} = this.state;
    if(stories && stories.length > 0){
      views = stories.map(story => (
        <p key={story.id}> 
        <a href={story.url}>{story.title}</a>by<strong>{story.by}</strong>
        </p>
      ))
    }
    return (
      <div>
        <h2>HackerNews Top Stories</h2>
        {views}
      </div>
    )
  }
}

export default HackerNews
