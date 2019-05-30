import React, { Component } from 'react';
import Repository from '../components/repository';
import Pagination from '../components/pagination'

class Repos extends Component {
  render() {
    const { repos: data } = this.props;
    return (
      <div className="container">
        <div className="row mt-3">
          {data.map(repository => (
            <div key={repository.id} className="col-md-4 cards">
              <Repository data={repository} />
            </div>
          ))}
        </div>
        <Pagination/>
      </div>
    );
  }
}

export default Repos;