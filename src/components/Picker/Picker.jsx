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
import {
  changeSelectedData,
  setSelectedDates,
} from '../../redux/actions/selectedDataAction';
import userTaskDate from '../../redux/actions/userTaskDateAction';
import calendarButton from '../../redux/actions/calendarButtonAction';
import AsyncEditWeekDays from '../../redux/actions/editAktivDaysFetch';

class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedData: this.props.selectedData,
    };
  }

  componentDidMount() {
    const { tasks, getSelectedDates } = this.props;
    getSelectedDates(
      tasks.taskActiveDates.map(day => new Date(day.date).toString()),
    );
  }

  editingArrSelectedData(taskId, arr) {
    const { editWeekDays } = this.props;

    console.log('====================================');
    console.log(arr);
    console.log('====================================');

    editWeekDays(
      taskId,
      arr.map(el => ({ date: Date.parse(el), isDone: false })),
    );
  }

  handlerClose = e => {
    const { actionCalendar, selectedData, taskId } = this.props;
    actionCalendar(e);
    this.editingArrSelectedData(taskId, selectedData);
  };

  actionData = e => {
    console.log(e);
    this.props.dataHandler(e, this.props.selectedData);
  };

  render() {
    const { tasks, taskId } = this.props;

    const userWeeks = tasks.taskWeekRange.filter(el => el.status);

    const numUserWeeks = userWeeks.map(el => el.week);

    const taskCreationDate = tasks.taskCreateDate;

    function taskDatesFilter(taskCreationDate, numUserWeeks) {
      const allWeeks = [
        {
          date: Date.parse(taskCreationDate),
          week: 1,
        },
      ];

      let date = Date.parse(taskCreationDate);
      let weekCounter = 1;
      let dayCounter = 1;

      while (dayCounter !== 63) {
        date += 86401000;

        const dateObj = {
          date: date,
          week: weekCounter,
        };

        allWeeks.push(dateObj);

        dayCounter += 1;

        if (dayCounter % 7 === 0) {
          weekCounter += 1;
        }
      }

      const userDisabledWeeks = allWeeks.filter(
        el => !numUserWeeks.includes(el.week),
      );

      const datesObject = {
        allWeeks,
        userDisabledWeeks,
        taskId,
      };

      return datesObject;
    }

    const userDates = taskDatesFilter(taskCreationDate, numUserWeeks);

    // const taskActiveDates = tasks.find(el => el.id === taskId);
    // console.log(taskActiveDates);

    return (
      <div className="calendar" onClick={e => e.stopPropagation()}>
        <button onClick={this.handlerClose} className={'calendar__button'}>
          X
        </button>
        <InfiniteCalendar
          min={new Date(userDates.allWeeks[0].date)}
          max={new Date(userDates.allWeeks[62].date)}
          minDate={new Date(userDates.allWeeks[0].date)}
          maxDate={new Date(userDates.allWeeks[62].date)}
          Component={withMultipleDates(Calendar)}
          selected={this.props.selectedData}
          disabledDates={userDates.userDisabledWeeks.map(
            el => new Date(el.date),
          )}
          interpolateSelection={defaultMultipleDateInterpolation}
          onSelect={this.actionData}
          keyboardSupport={true}
          width={window.innerWidth <= 650 ? window.innerWidth : 350}
          height={200}
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
    getSelectedDates: taskDates => dispatch(setSelectedDates(taskDates)),
    editWeekDays: function(taskId, data) {
      dispatch(AsyncEditWeekDays(taskId, data));
    },
    dataHandler: function(event, selected) {
      dispatch(changeSelectedData(event, selected));
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
