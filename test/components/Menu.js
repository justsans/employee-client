import React from "react";
import { shallow } from "enzyme";
import { expect } from 'chai';
import Menu from "../../src/components/common/Menu";

// unit tests for the Menu component
describe('Menu component', () => {
  describe('render()', () => {
    it('should render the component with two links', () => {
      const wrapper = shallow(<Menu/>);
      expect(wrapper.length).to.equal(1);
      expect(wrapper.find('IndexLinkContainer')).to.be.not.empty;
      expect(wrapper.find('LinkContainer')).to.be.not.empty;

    });
    it('should have a Home button that points to /', () => {
      const wrapper = shallow(<Menu/>);
      expect(wrapper.find('IndexLinkContainer').prop('to')).to.equal('/');
      expect(wrapper.find('IndexLinkContainer').html()).to.contain('Home');
    });
    it('should have a Add User button that points to /user-edit', () => {
      const wrapper = shallow(<Menu/>);
      expect(wrapper.find('LinkContainer').prop('to')).to.equal('/user-edit');
      expect(wrapper.find('LinkContainer').html()).to.contain('Add User');
    });
  });
});
