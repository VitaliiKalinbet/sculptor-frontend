import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import s from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={s.Dashboard}>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
