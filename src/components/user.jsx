import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    const { avatar_url } = this.props.user;
    return (
      <div className="card">
        <img src={avatar_url} alt='' className="card-img-top" />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}

export default UserCard;