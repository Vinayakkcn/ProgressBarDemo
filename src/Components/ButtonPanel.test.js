import React from "react";
import Enzyme,{ shallow, mount } from "enzyme";
import ButtonPanel from "./ButtonPanel.js";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

describe("ButtonPanel", () => {
test("renders",()=>{
    const wrapper = shallow(<ButtonPanel buttonLabel={[]}></ButtonPanel>);
    expect(wrapper.exists()).toBe(true);
});
});