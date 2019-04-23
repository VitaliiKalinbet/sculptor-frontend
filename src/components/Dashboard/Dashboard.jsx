/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { weekNow } from '../../utils/date';
// components
import Card from '../Card/Card';
// action
import asyncGoalAction from './goalAction';
import asyncTasksAction from './taskAction';

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
    const currentWeek = weekNow();

    // console.log(currentWeek);
  }

  handlerDatePicker = date => {
    console.log('Data selected: ', date);
  };

  render() {
    const { goals, tasks } = this.props;
    // console.log(goals, tasks);

    return (
      <>
        <Temporary />
        <Container>
          <Card />
        </Container>
        <Temporary />
      </>
    );
  }
}

const mstp = store => ({
  goals: store.goals,
  tasks: store.tasks,
});

const mdtp = dispatch => ({
  getGoals: () => dispatch(asyncGoalAction()),
  getTasks: () => dispatch(asyncTasksAction()),
});

export default connect(
  mstp,
  mdtp,
)(Dashboard);
