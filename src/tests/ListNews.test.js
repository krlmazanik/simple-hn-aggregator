import React from "react";
import { shallow } from "enzyme";
import { data } from "../data/fixtures";

import ListNews from "../components/ListNews";

const props = data;

describe("ListNews component", () => {
  let wrapper = shallow(<ListNews {...props} />);

  it("should render ListNews component", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
