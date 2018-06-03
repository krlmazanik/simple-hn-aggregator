import React from "react";
import { shallow } from "enzyme";
import { props } from "../data/fixtures";

import ListNews from "../components/ListNews";

describe("ListNews component", () => {
  let wrapper = shallow(<ListNews {...props} />);

  it("should render ListNews component", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
