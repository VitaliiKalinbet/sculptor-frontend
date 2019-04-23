/* eslint-disable */

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import InfiniteCalendar, {
  Calendar,
  withMultipleDates,
  defaultMultipleDateInterpolation,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import Grid from '@material-ui/core/Grid';
// components
import Card from '../Card/Card';
// action
import { asyncTasksAction } from './actionDashboard.js';

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

  componentDidMount() {
    this.props.getTasks();
  }

  handlerDatePicker = date => {
    console.log('Data selected: ', date);
  };

  render() {
    return (
      <>
        <Grid container>
          <Grid item>
            <InfiniteCalendar
              minDate={this.state.minDate}
              Component={withMultipleDates(Calendar)}
              selected={this.state.startDate}
              interpolateSelection={defaultMultipleDateInterpolation}
              onSelect={this.handlerDatePicker}
              keyboardSupport={true}
              width={window.innerWidth <= 650 ? window.innerWidth : 650}
              height={window.innerHeight - 250}
              rowHeight={70}
              theme={{
                selectionColor: '#223653',
                textColor: {
                  default: '#333',
                  active: '#FFF',
                },
                weekdayColor: '#223653',
                headerColor: '#223653',
                floatingNav: {
                  background: '#223653',
                  color: '#FFF',
                  chevron: '#FFA726',
                },
              }}
              displayOptions={{ hideYearsOnSelect: false }}
              // displayOptions={{
              //   showHeader: false,
              // }}
            />
          </Grid>
        </Grid>
        <Temporary />
        <Container>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
        <Temporary />
      </>
    );
  }
}

const mdtp = dispatch => ({
  getTasks: () => dispatch(asyncTasksAction()),
});

export default connect(
  null,
  mdtp,
)(Dashboard);
