/*eslint-disable*/
import React from 'react';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import { showSidebar } from '../../redux/actions/sidebarAction';
import s from './Container.module.css';

const Dashboard = ({ showSidebar, ShowSide }) => {
  console.log(ShowSide);
  return (
    <div className={s.Dashboard}>
      <button className={s.btn} onClick={showSidebar}>
        ShowSidebar
      </button>
      <Sidebar className={ShowSide ? s.SidebarClick : s.Sidebar} />
    </div>
  );
};

function MSTP(state) {
  return {
    ShowSide: state.showReducer,
  };
}

function MDTP(dispatch) {
  return {
    showSidebar: function() {
      dispatch(showSidebar());
    },
  };
}

export default connect(
  MSTP,
  MDTP,
)(Dashboard);
