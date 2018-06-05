import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";

// User List Element component
export default class UserListElement extends React.Component {
  // render
  render() {
    const {user, showDelete} = this.props;
    return (
      <tr>
        <td>#{user.id}</td>
        <td>{user.name}</td>
        <td>{user.title}</td>
        <td>
          <Link to={'user-edit/' + user.id}>
            <Button bsSize="xsmall" bsStyle="primary" className="mx-20">
              <Glyphicon glyph="edit"/>
            </Button>
          </Link>
          <Button bsSize="xsmall" bsStyle="danger" className="user-delete" onClick={() => showDelete(user)}>
            <Glyphicon glyph="remove-circle"/>
          </Button>
        </td>
      </tr>
    );
  }
}

// prop checks
UserListElement.propTypes = {
  user: PropTypes.object.isRequired,
  showDelete: PropTypes.func.isRequired,
}
