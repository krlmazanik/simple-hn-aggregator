import React, { Component } from "react";
import "./ListNews";
import Story from "./Story";

class ListNews extends Component {
  render() {
    let { stories } = this.props;
    let storyToShow = stories.map(item => (
      <Story
        key={item.id}
        url={item.url}
        title={item.title}
        by={item.by}
        time={item.time}
        descendants={item.descendants}
        score={item.score}
      />
    ));

    return <div>{storyToShow}</div>;
  }
}

export default ListNews;
