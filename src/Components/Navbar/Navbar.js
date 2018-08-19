import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends React.Component {
  render () {

  };

  return (
    <div className="Navbar navbar-fixed-top">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/" className="navbar-brand">Nathan Pabst</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/professionalHistory" className="navbar-brand">Professional History</Link>
              </li>
              <li>
                <Link to="/portfolio" className="navbar-brand">Portfolio</Link>
              </li>
              <li className="navbar-form">
              <Link to="/blog" className="navbar-brand">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
}

export default Navbar;
