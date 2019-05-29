import React, { Component } from 'react';
import User from '../components/user';

class Users extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="container">
        <div className="row">
          {users.map(user => (
            <div key={user.id} className="col-sm-3"><User user={user} /></div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;