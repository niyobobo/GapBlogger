import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    return (
      <nav className="mt-2">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link">&laquo; Previous</button>
          </li>
          <li className="page-item">
            <button className="page-link">Next &raquo;</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;