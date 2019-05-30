import React, { Component } from 'react';
import User from '../components/user';
import Pagination from '../components/pagination';

class Users extends Component {
  render() {
    const { users, onShowInfo } = this.props;
    return (
      <div className="container">
        <div className="row">
          {users.map(user => (
            <div key={user.id} className="col-md-3"><User user={user} onShowInfo={onShowInfo} /></div>
          ))}
        </div>
        <Pagination />
      </div>
    );
  }
}

export default Users;