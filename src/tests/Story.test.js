import React from "react";
import { shallow } from "enzyme";
import Story from "../components/Story";

import parse from "url-parse";
import timeAgo from "epoch-timeago";

const props = {
  author: "ofrzeta",
  descendants: 42,
  score: 95,
  time: 1527854280,
  title: "Released and Certified: Qt Safe Renderer",
  url:
    "https://blog.qt.io/blog/2018/05/31/function-safety-certified-qt-safe-renderer/"
};

describe("Story component", () => {
  let wrapper = shallow(<Story {...props} />);

  it("renders the title of the story", () => {
    let actual = wrapper.find(".title-item").text();
    let expected = props.title;

    expect(actual).toBe(expected);
  });

  it("renders parsed url", () => {
    let hostname = parse(props.url).hostname;
    hostname = hostname.includes("www") ? hostname.substring(4) : hostname;

    let actual = wrapper.find("h2 a").text();
    let expected = hostname;

    expect(actual).toBe(expected);
  });

  it("renders score stat", () => {
    let actual = wrapper.find(".story-score").text();
    let expected = props.score.toString();

    expect(actual).toBe(expected);
  });

  it("renders score icon", () => {
    let actual = wrapper.find(".story-score");

    expect(actual.contains(<img src="thumb-up-icon.png" />)).toBe(true);
  });

  it("renders comments stat", () => {
    let actual = wrapper.find(".story-comments").text();
    let expected = props.descendants.toString();

    expect(actual).toBe(expected);
  });

  it("renders comments icon", () => {
    let actual = wrapper.find(".story-comments");

    expect(actual.contains(<img src="comments-icon.png" />)).toBe(true);
  });

  it("renders relative time alonside with author", () => {
    let actual = wrapper.find(".meta-data").text();

    let expected = `${timeAgo(props.time * 1000)} by ${props.author}`;

    expect(actual).toBe(expected);
  });
});
