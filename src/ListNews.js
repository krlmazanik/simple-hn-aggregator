import React, { Component } from 'react';
import './ListNews';
import Story from './Story';

class ListNews extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        let {stories} = this.props;        
        let storyToShow = stories.map(item => (
            <div><Story key={item.id} 
                        url={item.url} 
                        title={item.title} 
                        author={item.by} 
                        time={item.time}
                        descendants={item.descendants}
                        score={item.score} /></div>
        ));
        
        return storyToShow;
    }
}

export default ListNews;