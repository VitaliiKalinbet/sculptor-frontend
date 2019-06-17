import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DatePicker from '../DatePicker/DatePicker';

import ModalLogout from '../ModalLogout/ModalLogout';
import { showSidebarAction } from '../../redux/actions/sidebarAction';

import { ReactComponent as More } from '../../assets/images/icons/more/baseline-more_vert-24px.svg';
import { ReactComponent as Dashboard } from '../../assets/images/icons/dashboard/baseline-dashboard-24px.svg';
import { ReactComponent as Results } from '../../assets/images/icons/chart/baseline-timeline-24px.svg';

import styles from './Header.module.css';

const Header = ({ showSidebar }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__icons}>
        <More
          onClick={showSidebar}
          className={`${styles.header__icon} ${styles.more}`}
        />
        <NavLink
          to="/"
          className={`${styles.header__router} ${styles.dashboard} ${
            styles.selected
          }`}
        >
          <Dashboard className={`${styles.header__icon} ${styles.dashboard}`} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/results"
          className={`${styles.header__router} ${styles.results}`}
        >
          <Results className={`${styles.header__icon} ${styles.results}`} />
          <span>Results</span>
        </NavLink>
        <div className={styles.datepicker__container}>
          <DatePicker />
        </div>
      </div>

      <p className={styles.header__logo}>Sculptor</p>
      <div className={styles.logout__container}>
        <ModalLogout />
      </div>
    </header>
  );
};

Header.propTypes = {
  showSidebar: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    showSidebar: state.app.showSidebar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showSidebar: () => dispatch(showSidebarAction()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
