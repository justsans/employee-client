import React from "react";
import { shallow } from "enzyme";
import { expect } from 'chai';
import { UserEdit } from "../../src/components/UserEdit";

// unit tests for the UserEdit component
describe('UserEdit component', () => {
  describe('render()', () => {
    it('should render the add user form', () => {
      const props = {user: {}, handleSubmit: ()=>{}};
      const wrapper = shallow(<UserEdit {...props} />);
      expect(wrapper.length).to.equal(1);
      expect(wrapper.find('Form')).to.be.not.empty;
    });

    it('should validate name and title', () => {
      const props = {user: {}, handleSubmit: ()=>{}};
      const wrapper = shallow(<UserEdit {...props} />);
      expect(wrapper.find('[name="name"]').prop('doValidate')).to.be.true;
      expect(wrapper.find('[name="title"]').prop('doValidate')).to.be.true;
    });

  });
});
