/* eslint-disable */
import React from 'react';
import SVG from 'react-inlinesvg';

import './HeaderMobile.css';
import './HeaderTablet.css';
import './HeaderDesctop.css';

import { ReactComponent as More } from '../../assets/images/icons/more/baseline-more_vert-24px.svg';
import { ReactComponent as Dashboard } from '../../assets/images/icons/dashboard/baseline-dashboard-24px.svg';
import { ReactComponent as Results } from '../../assets/images/icons/chart/baseline-timeline-24px.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__icons">
        <More className="header__icon more" />
        <a href="localhost/dashboard" className="header__router dashboard">
          <Dashboard className="header__icon dashboard" />
          <span>Dashboard</span>
        </a>
        <p className="header__date">Date</p>
        <a href="localhost/results" className="header__router results">
          <Results className="header__icon results" />
          <span>Results</span>
        </a>
      </div>
      <p className="header__logo">Sculptor</p>
      <a href="localhost/logout" className="header__router logout">
        Logout
      </a>
    </header>
  );
};

export default Header;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { hot } from 'react-hot-loader/root';

// const Header = props => {
//   return <div />;
// };

// Header.PropTypes = {};

// export default hot(Header);
