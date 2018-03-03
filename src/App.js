import React, { Component } from 'react';
import './App.css';
import ListNews from './ListNews';
import Header from './Header';
import LeftMenu from './LeftMenu';

const storyUrlBase = 'https://hacker-news.firebaseio.com/v0/item/';
const urlBase = 'https://hacker-news.firebaseio.com/v0/';

class App extends Component {
  constructor( props ){
    super( props );
    this.state = {
      stories: [],
      storiesIDs: [], 
      indexCounter: 5,
      category: 'topstories'
    }
    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.hPush = this.hPush.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    this.handleRequest(this.state.category);
  }


  handleRequest(cat) {
    let url = `${urlBase}${cat}.json`;
    
    fetch( url ) 
      .then( data => data.json() )
      .then( storiesIDs => {
        this.setState( { storiesIDs } );
        return this.state.storiesIDs;
      })
      .then(data => data.filter(( item, index ) => {
        return index < this.state.indexCounter;
      }))
      .then(data => data.map(id => {
        const url = `${ storyUrlBase }${ id }.json`
        return fetch(url).then(d => d.json()) 
      }))
      .then(promises => Promise.all(promises))
      .then(stories => this.setState({stories}))
      .catch(err => console.log(err))
  }

  hPush(array) {
    let stories = this.state.stories.slice();

    Array.from(array).forEach( id => {
      const url = `${ storyUrlBase }${ id }.json`;
      fetch(url)
      .then(res => res.json())
      .then(item => stories.push( item ))
      .then(() => this.setState({ stories }))
      });
  }


  handleLoadMore() {
    console.log(this.state.indexCounter);
    this.setState(prevState => ({
      indexCounter: prevState.indexCounter + 5
    }), ()=> {
    console.log(this.state.indexCounter);

    let storiesReq = this.state.storiesIDs.filter((id, index) => {
      return index > this.state.indexCounter && index <= this.state.indexCounter + 5;
    });

    this.hPush(storiesReq);
    });
  }

  handleSelectChange(e) {
    this.setState({category: e.target.value, indexCounter: 5}, () => {
      return this.handleRequest(this.state.category);
    });
  }



  render() {

    return (
      <div className="App">
        <Header category={this.state.category} handleSelectChange={this.handleSelectChange}/>
        <div className="wrapper">
          <LeftMenu />
          <div>
            <ListNews stories={this.state.stories}/>
            { this.state.stories.length > 0 && 
              <button className="load-btn" onClick={this.handleLoadMore}>Load More</button>
            }
          </div>
        </div>
      </div>
    );
  }
}


export default App;
