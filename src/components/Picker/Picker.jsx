/*eslint-disable*/

import React, { Component, Fragment } from 'react';

import InfiniteCalendar, {
  Calendar,
  withMultipleDates,
  defaultMultipleDateInterpolation,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import './Picker.css';
import { connect } from 'react-redux';
import selectedData from '../../redux/actions/selectedDataAction';
import userTaskDate from '../../redux/actions/userTaskDateAction';
import calendarButton from '../../redux/actions/calendarButtonAction';

class Picker extends Component {
  render() {
    const actionData = (e, selectedData) => {
      this.props.dataHandler(e, this.props.selectedData);
    };
    // console.log(this.props.selectedData[1])
    return (
      <div
        className={
          !this.props.calendarButton
            ? 'calendar'
            : 'calendar calendar--disabled'
        }
      >
        <button
          onClick={this.props.calendarButtonFunc}
          className={'calendar__button'}
        >
          X
        </button>
        <InfiniteCalendar
          // min={this.props.userTaskDate.allWeeks[0].date - 5184060000}
          // max={this.props.userTaskDate.allWeeks[63].date + 5184060000}
          // minDate={999999999999}
          // maxDate={20200000000000000}
          Component={withMultipleDates(Calendar)}
          selected={this.props.selectedData}
          // disabledDates={this.props.userTaskDate.userDisabledWeeks.map(el => el.week)}
          interpolateSelection={defaultMultipleDateInterpolation}
          onSelect={actionData}
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
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedData: state.selectedData,
    userTaskDate: state.userTaskDate,
    calendarButton: state.calendarButton,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dataHandler: function(event, selected) {
      dispatch(selectedData(event, selected));
    },
    userTaskDateFunc: function(taskCreationDate) {
      dispatch(userTaskDate(taskCreationDate));
    },
    calendarButtonFunc: function() {
      dispatch(calendarButton());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Picker);
