import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Add aria-label for better accessibility */}
        <a className="navbar-brand" href="#" aria-label={props.title}>
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* Add aria-label for better accessibility */}
              <a className="nav-link active" aria-current="page" href="#" aria-label="Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* Use `props.aboutText` instead of hardcoded 'About text here' */}
              <a className="nav-link" href="/" aria-label={props.aboutText}>
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* Add id and name attributes for form fields */}
          {<form className="d-flex" role="search">
            <input
              id="search-input"
              name="search"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here',
};
