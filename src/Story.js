import React, { Component } from 'react';
import './Story.css';
import parse from 'url-parse';
import timeAgo from 'epoch-timeago';

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

        let domainName = parse(url),
            {hostname} = domainName;
        

        return (
          <div className='story-wrapper'>
            <div className='comment-score'>
                <p className='story-score'>{score}</p>
                <p className='story-comments'>{descendants}</p>
            </div>
            <div className='story-item'>
                <h2><a href={url} target='_blanc'>{hostname.includes('www') ? hostname.substring(4) : hostname}</a></h2>
                <p className='title-item'>{title}</p>
                <p className='meta-data'>
                    {timeAgo(time*1000)} by {author}
                </p>
            </div>
          </div>
    )
    }
}

export default Story;