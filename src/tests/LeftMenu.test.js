import React from "react";
import { shallow } from "enzyme";
import LeftMenu from "../components/LeftMenu";
import { wrap } from "module";

describe("LeftMenu component", () => {
  const wrapper = shallow(<LeftMenu />);

  it("should render component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should render the title", () => {
    let actual = wrapper.find("h2").text();
    let expected = "Got some time?";

    expect(actual).toBe(expected);
  });

  it("should render four elements in the list", () => {
    let actual = wrapper.find("ul").children();

    expect(actual).toHaveLength(4);
  });

  it("should render all icons in the list", () => {
    let actual = wrapper.find("img");
    expect(actual).toHaveLength(4);
  });
});
