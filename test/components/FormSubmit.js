import React from "react";
import {shallow} from "enzyme";
import {expect} from 'chai';

import FormSubmit from "../../src/components/common/FormSubmit";

// unit tests for the FormSubmit component
describe('FormSubmit component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const wrapper = shallow(<FormSubmit/>);
      expect(wrapper.length).to.equal(1);
      expect(wrapper.find('FormGroup')).to.be.not.empty;
    });

    it('button should be disabled if invalid', () => {
      const wrapper = shallow(<FormSubmit invalid/>);
      expect(wrapper.find('Button').prop('disabled')).to.be.true;
    });

    it('button should be disabled if submitting', () => {
      const wrapper = shallow(<FormSubmit invalid/>);
      expect(wrapper.find('Button').prop('disabled')).to.be.true;
    });

    it('Submitting button should have text buttonSaveLoading message while button is loading', () => {
      const wrapper = shallow(<FormSubmit submitting buttonSaveLoading="Custom button text"/>);
      expect(wrapper.find('Button').html()).to.contain('Custom button text');
    });

    it('Submitting button should have text Saving...', () => {
      const wrapper = shallow(<FormSubmit submitting/>);
      expect(wrapper.find('Button').html()).to.contain('Saving...');
    });

    it('Submitting button should have text buttonSaveLoading message', () => {
      const wrapper = shallow(<FormSubmit submitting buttonSaveLoading="Custom button text"/>);
      expect(wrapper.find('Button').html()).to.contain('Custom button text');
    });

    it('Non - Submitting button should have text Save', () => {
      const wrapper = shallow(<FormSubmit  />);
      expect(wrapper.find('Button').html()).to.contain('Save');
    });

    it('Non - Submitting button should have text Save', () => {
      const wrapper = shallow(<FormSubmit  />);
      expect(wrapper.find('Button').html()).to.contain('Save');
    });

    it('Non - Submitting button should have text buttonSave message if available', () => {
      const wrapper = shallow(<FormSubmit  buttonSave="Custom button message"/>);
      expect(wrapper.find('Button').html()).to.contain('Custom button message');
    });
  });
});
