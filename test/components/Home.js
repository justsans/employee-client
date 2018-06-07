import React from "react";
import { shallow } from "enzyme";
import { expect } from 'chai';
import Home from "../../src/components/Home";

// unit tests for the Home component
describe('Home component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<Home/>);
      expect(wrapper.length).to.equal(1);
    });

    it('should render a UserList', () => {
      const wrapper = shallow(<Home/>);
      expect(wrapper.find('UserList')).to.be.not.empty;
    });
  });
});
