import React, { Component } from 'react';

class Repository extends Component {
  render() {
    const { html_url, name, description, watchers, language } = this.props.data;
    return (
      <div className="card">
        <div className="card-body">
          <h6 className="card-title text-primary">
            <a href={html_url} target="_new">
              <i className="fas fa-toolbox mr-2 txt-primary" /><strong>{name}</strong>
            </a>
          </h6>
          <p className="card-text">
            {description}
          </p>
          <span className="mr-3"><i className="fas fa-star-half-alt mr-1 btn-outline-warning"></i>{watchers}</span>
          <span className="mr-3"><i className="fas fa-circle-notch mr-1"></i>{language}</span>
        </div>
      </div>
    );
  }
}

export default Repository;