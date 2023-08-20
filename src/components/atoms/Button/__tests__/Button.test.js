import React from "react";
import { render } from "@testing-library/react";
import { ButtonVanilla } from "../Button";

describe("testing Button Component", () => {
  let wrapper;

  it("should render correctly and match snapshots", () => {
    wrapper = render(<ButtonVanilla>Hello</ButtonVanilla>);
    expect(wrapper).toMatchSnapshot();
  });

  // it("Button to be called with default props when no props are passed", () => {
  //   wrapper = render(<ButtonVanilla>Hello</ButtonVanilla>);

  //   expect(wrapper.props().size).toBe("lg");
  //   expect(wrapper.props().disabled).toBe(false);
  //   expect(wrapper.find(".icon")).toHaveLength(0);
  // });

  // it("IconButton to be called when type iconBtn is passed in props", () => {
  //   wrapper = render(<ButtonVanilla variation="iconBtn">Hello</ButtonVanilla>);

  //   expect(wrapper.find(".icon")).toHaveLength(1);
  // });

  // it("IconButton should not be called when type other than iconBtn is passed in props", () => {
  //   wrapper = render(<ButtonVanilla variation="gold">Hello</ButtonVanilla>);

  //   expect(wrapper.find(".icon")).toHaveLength(0);
  // });
});
