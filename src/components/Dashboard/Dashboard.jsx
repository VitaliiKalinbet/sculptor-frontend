/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// components
import Card from '../Card/Card';
// action
import asyncGoalAction from './goalAction';
import asyncTasksAction from './taskAction';
import weekTasksAction from './weekAction';

// card wrapper
const Container = styled.div`
  margin: auto;
  width: 32rem;
  padding: 0 1.5rem;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  height: 44rem;
  overflow: scroll;
  @media (min-width: 767px) {
    overflow: auto;
    width: 76.8rem;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }
  @media (min-width: 1200px) {
    width: 100.2rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
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
    const { weekTasks } = this.props;

    return (
      <>
        <Container>
          {weekTasks && weekTasks.map(day => <Card day={day} />)}
        </Container>
      </>
    );
  }
}

const mstp = store => ({
  goals: store.goals,
  tasks: store.tasks,
  week: store.weekTasks,
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
