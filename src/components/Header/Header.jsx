/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';

import './HeaderMobile.css';
import './HeaderTablet.css';
import './HeaderDesctop.css';
import DatePicker from '../DatePicker/DatePicker';

import { ReactComponent as More } from '../../assets/images/icons/more/baseline-more_vert-24px.svg';
import { ReactComponent as Dashboard } from '../../assets/images/icons/dashboard/baseline-dashboard-24px.svg';
import { ReactComponent as Results } from '../../assets/images/icons/chart/baseline-timeline-24px.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__icons">
        <More className="header__icon more" />
        <NavLink to="/dashboard" className="header__router dashboard selected">
          <Dashboard className="header__icon dashboard" />
          <span>Dashboard</span>
        </NavLink>
        {/* <a href="localhost/dashboard" className="header__router dashboard">
				</a> */}
        <DatePicker className="header__date" />
        {/* <p className="header__date">Date</p> */}
        <NavLink to="/results" className="header__router results">
          <Results className="header__icon results" />
          <span>Results</span>
        </NavLink>
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
