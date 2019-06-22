/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// components
import Card from '../Card/Card';

// action
import { asyncGoalAction } from './goalAction';
import { asyncTasksAction } from './taskAction';

import axios from 'axios';

// card wrapper
const Container = styled.div`
  margin: auto;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 60px;

  @media (min-width: 767px) {
    overflow: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }

  @media (min-width: 1280px) {
    width: 100rem;
    flex-direction: row;
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
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: [new Date(2019, 4, 23)],
      minDate: new Date(2019, 3, 20),
    };
  }

  async componentDidMount() {
    const { user, tasks } = this.props;
    if (user.token) {
      await this.props.getGoals(user);
      await this.props.getTasks(user);
      const getToken = JSON.parse(localStorage.getItem('user'));
      axios.defaults.headers.common.Authorization = `Bearer ${getToken.token}`;
    }
  }

  // object contains subObject
  partialContains = (object, subObject) => {
    // Create arrays of property names
    const objProps = Object.getOwnPropertyNames(object);
    const subProps = Object.getOwnPropertyNames(subObject);

    if (subProps.length > objProps.length) {
      return false;
    }

    for (const subProp of subProps) {
      if (!object.hasOwnProperty(subProp)) {
        return false;
      }

      if (object[subProp] !== subObject[subProp]) {
        return false;
      }
    }

    return true;
  };

  render() {
    const { weekTasks } = this.props;

    return (
      <Container>
        {weekTasks.arrDays.length > 0 &&
          weekTasks.arrDays.map((day, idx) => <Card day={day} key={idx} />)}
      </Container>
    );
  }
}

const mstp = store => ({
  goals: store.goals,
  tasks: store.tasks,
  weekTasks: store.weekTasks,
  showSidebar: store.app.showSidebar,
  selectedData: store.selectedData,
  user: store.user,
});

const mdtp = dispatch => ({
  getGoals: user => dispatch(asyncGoalAction(user)),
  getTasks: user => dispatch(asyncTasksAction(user)),
});

export default connect(
  mstp,
  mdtp,
)(Dashboard);
