import React, { Component } from 'react';
import './Story.css';

class Story extends Component{
    constructor(props){
        super(props);
    }

    render() {
        let {
            url, 
            title, 
            author, 
            time,
            score,
            descendants
        } = this.props;
        let regex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/ig;
        let domainName = '';
        if (this.props.url) {
            domainName = url.match(regex);
        }

        return (
          <div className='story-wrapper'>
            <div className='comment-score'>
                <p className='story-score'>{score}</p>
                <p className='story-comments'>{descendants}</p>
            </div>
            <div className='story-item'>
                <h2><a href={url} target='_blanc'>{domainName}</a></h2>
                <p className='title-item'>{title}</p>
                <p className='meta-data'>
                    {time} by {author}
                </p>
            </div>
          </div>

    )
    }
}

export default Story;