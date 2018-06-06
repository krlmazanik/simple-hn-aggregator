import React from "react";
import { shallow, mount } from "enzyme";
import Header from "../components/Header";
import App from "../components/App";

describe("Header component", () => {
  const wrapper = shallow(<Header />);

  it("should render Header component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should render HN title", () => {
    let actual = wrapper.find("h2 a").text();
    let expected = "HN";

    expect(actual).toBe(expected);
  });

  // !Need to write tests for state changes

  // describe("when clicking on input element", () => {
  //   beforeEach(() =>
  //     mount(<Header />)
  //       .find("select")
  //       .simulate("change", { target: { value: "newstories" } }));
  //   it("should change the state", () => {
  //     expect(shallow(<App />).state().category).toBe("newstories");
  //   });
  // });
});
