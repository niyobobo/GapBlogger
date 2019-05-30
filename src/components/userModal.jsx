import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserModal extends Component {
  render() {
    const { login, name, avatar_url, html_url } = this.props.showDetails;
    const { onShowRepo } = this.props;
    return (
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle"><strong>{login}</strong></h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={avatar_url} alt='User' className="mx-auto d-block rounded-circle m-3" style={{ width: 15 + 'rem' }} />
              <h5 className="text-center"><strong>{name}</strong></h5>
              <div className="row justify-content-center">
                <a href={html_url} target="_new" className="btn btn-outline-success m-2" data-dismiss="modal"><i className="fab fa-github mr-2"></i>Account</a>
                <Link to={'/repos'} onClick={() => onShowRepo()} className="btn btn-outline-info m-2"><i className="fas fa-toolbox mr-2"></i>Repos</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserModal;