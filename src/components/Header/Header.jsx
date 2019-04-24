import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './HeaderMobile.css';
import './HeaderTablet.css';
import './HeaderDesktop.css';
import DatePicker from '../DatePicker/DatePicker';

import { ReactComponent as More } from '../../assets/images/icons/more/baseline-more_vert-24px.svg';
import { ReactComponent as Dashboard } from '../../assets/images/icons/dashboard/baseline-dashboard-24px.svg';
import { ReactComponent as Results } from '../../assets/images/icons/chart/baseline-timeline-24px.svg';

const Header = ({ showSidebar }) => {
  return (
    <header className="header">
      <div className="header__icons">
        <More onClick={showSidebar} className="header__icon more" />
        <NavLink to="/dashboard" className="header__router dashboard selected">
          <Dashboard className="header__icon dashboard" />
          <span>Dashboard</span>
        </NavLink>
        <DatePicker className="header__date" />
        <NavLink to="/results" className="header__router results">
          <Results className="header__icon results" />
          <span>Results</span>
        </NavLink>
      </div>
      <p className="header__logo">Sculptor</p>
      <a href="/logout" className="header__router logout">
        Logout
      </a>
    </header>
  );
};

Header.propTypes = {
  showSidebar: PropTypes.func.isRequired,
};

export default Header;
