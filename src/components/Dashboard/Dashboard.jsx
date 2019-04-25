/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
// import TestDashboard from '../TestDashboard/TestDashboard';
import TestResults from '../TestResults/TestResults';

// components
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';
// action
import asyncGoalAction from './goalAction';
import asyncTasksAction from './taskAction';
import weekTasksAction from './weekAction';

// card wrapper
const Container = styled.div`
  margin: auto;
  width: 32rem;
  padding: 3rem 1.5rem;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  flex: 0 0 calc(100%-260px);
  height: 44rem;
  overflow: scroll;
  @media (min-width: 767px) {
    overflow: auto;
    width: 100%;
    height: calc(100vh - 12.14rem);
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }
  @media (min-width: 1200px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Temporary = styled.div`
  height: 7rem;
  margin: auto;
  width: 32rem;
  background-color: #eee;
  @media (min-width: 767px) {
    width: 76.8rem;
  }
  @media (min-width: 1200px) {
    width: 100.2rem;
  }
`;
const Dash = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
`;
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: [new Date(2019, 4, 23)],
      minDate: new Date(2019, 3, 20),
    };
  }

  async componentDidMount() {
    await this.props.getGoals();
    await this.props.getTasks();
  }

  componentDidUpdate(prevprops) {
    if (prevprops.tasks !== this.props.tasks) {
      this.props.weekTasks(this.props.tasks);
    }
  }

  handlerDatePicker = date => {
    console.log('Data selected: ', date);
  };

  render() {
    const { week, showSidebar, selectedData } = this.props;
    console.log(selectedData);
    return (
      <Dash>
        <Container>
          {week.length > 0 && week.map(day => <Card day={day} />)}
        </Container>
      </Dash>
    );
  }
}

const mstp = store => ({
  goals: store.goals,
  tasks: store.tasks,
  week: store.weekTasks,
  showSidebar: store.app.showSidebar,
  selectedData: store.selectedData,
});

const mdtp = dispatch => ({
  getGoals: () => dispatch(asyncGoalAction()),
  getTasks: () => dispatch(asyncTasksAction()),
  weekTasks: data => dispatch(weekTasksAction(data)),
});

export default connect(
  mstp,
  mdtp,
)(Dashboard);
