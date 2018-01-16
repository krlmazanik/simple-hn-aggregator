import React, { Component } from 'react';
import './App.css';
import ListNews from './ListNews';
import Header from './Header';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stories: []
    }
  }
  
  componentDidMount() {
    const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    const storyUrlBase = 'https://hacker-news.firebaseio.com/v0/item/';
    
    fetch(topStories)
      .then(data => data.json())
      .then(data => data.map(id => {
        const url = `${storyUrlBase}${id}.json`;
        return fetch(url).then(d => d.json());
      }))
      .then(data => data.filter((item, index) => {
        if(index < 14) return data;
      }))
      .then(promises => Promise.all(promises))
      .then(stories => this.setState({stories}));
  }

  render() {

    return (
      <div className="App">
        <Header />
        <ListNews stories={this.state.stories}/>
      </div>
    );
  }
}

export default App;
