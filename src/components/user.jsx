import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    const { user, onShowInfo } = this.props;
    return (
      <div className="card">
        <img src={user.avatar_url} alt='User' className="card-img-top"/>
        <div className="card-body">
          <p className="card-text text-center">
            {user.login}
          </p>
          <button type="button" className="btn btn-outline-primary btn-block" onClick={()=>onShowInfo(user.login)}  data-toggle="modal" data-target="#exampleModalCenter">
            More info...
          </button>
        </div>
      </div>
    );
  }
}

export default UserCard;