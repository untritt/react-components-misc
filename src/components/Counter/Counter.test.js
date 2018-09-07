import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "../Counter";

Enzyme.configure({ adapter: new Adapter() });

test("Counter", () => {
  const wrapper = mount(<Counter />);
  expect(wrapper.render()).toMatchSnapshot();

  const inc = wrapper.find(".inc");
  const dec = wrapper.find(".dec");

  inc.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  inc.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  dec.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  inc.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  dec.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  const items = wrapper.find("li.list-group-item a");
  items.at(3).simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  items.at(1).simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  items.at(2).simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  inc.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  dec.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();
});
