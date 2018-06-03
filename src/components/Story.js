import React, { Component } from "react";
import "./Story.css";
import parse from "url-parse";
import timeAgo from "epoch-timeago";

import irate from "../icons/thumb-up-icon.png";
import icomments from "../icons/comments-icon.png";

class Story extends Component {
  render() {
    let { url, title, by, time, score, descendants } = this.props;

    let domainName = parse(url),
      { hostname } = domainName;

    hostname = hostname.includes("www") ? hostname.substring(4) : hostname;

    return (
      <div className="story-wrapper">
        <div className="comment-score">
          <div className="story-score">
            <img src={irate} alt="thumb-up-icon" />
            <span>{score}</span>
          </div>
          <p className="story-comments">
            <img src={icomments} alt="comments-icon" />
            <span>{descendants}</span>
          </p>
        </div>
        <div className="story-item">
          <h2>
            <a href={url} target="_blanc">
              {hostname}
            </a>
          </h2>
          <p className="title-item">{title}</p>
          <p className="meta-data">
            {timeAgo(time * 1000)} by {by}
          </p>
        </div>
      </div>
    );
  }
}

export default Story;
