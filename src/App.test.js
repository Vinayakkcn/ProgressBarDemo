import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import { expect } from "chai";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";


configure({ adapter: new Adapter()});
describe("App component testing", function() {
  it("renders progressbar dropdown", function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find('ProgressBarSelect')).to.have.length(1);
  });

  it("renders button panel", function() {
    const wrapper = shallow(<App />);
    expect(wrapper.find('ButtonPanel')).to.have.length(1);
  });

});
