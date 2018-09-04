import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Carousel from "./Carousel";

Enzyme.configure({ adapter: new Adapter() });

test("Carousel", () => {
  const paths = [
    "/images/first.jpeg",
    "/images/second.jpeg",
    "/images/third.jpeg"
  ];
  const wrapper = mount(<Carousel paths={paths} />);
  expect(wrapper.render()).toMatchSnapshot();

  const next = wrapper.find(".carousel-control-next");
  const prev = wrapper.find(".carousel-control-prev");

  next.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  next.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  next.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  prev.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  prev.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  prev.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();

  prev.simulate("click");
  expect(wrapper.render()).toMatchSnapshot();
});
