import React from "react";
import { shallow, mount } from "enzyme";
import { expect } from 'chai';

import { UserList } from "../../src/components/common/UserList";

// unit tests for the UserList component
describe('UserList component', () => {
  let store;

  describe('render()', () => {
    it('should render the Table Pagination and UserDeletePrompt', () => {
      const props = {users: []};
      const wrapper = shallow(<UserList {...props} />);
      expect(wrapper.length).to.equal(1);
      expect(wrapper.find('Table')).to.be.not.empty;
      expect(wrapper.find('Pagination')).to.be.not.empty;
      expect(wrapper.find('UserDeletePrompt')).to.be.not.empty;
    });

    it('should have one UserListElement for each user', () => {
      const user1 = {id: '1'};
      const user2 = {id: '2'};
      const props = {users: [user1, user2 ], page: 1};
      const wrapper = shallow(<UserList {...props} />);
      expect(wrapper.find('UserListElement').length).to.equal(2);
      expect(wrapper.find('UserListElement').get(0).props.user).to.equal(user1);
      expect(wrapper.find('UserListElement').get(1).props.user).to.equal(user2);
    });

    it('should show only users on second page', () => {
      const user1 = {id: '1'};
      const user2 = {id: '2'};
      const props = {users: [user1, user1,user1,user1,user1,user1,user1,user1,user1,user1,user2 ], page: 2};
      const wrapper = shallow(<UserList {...props} />);
      expect(wrapper.find('UserListElement').length).to.equal(1);
      expect(wrapper.find('UserListElement').get(0).props.user).to.equal(user2);
    });
  });
});
