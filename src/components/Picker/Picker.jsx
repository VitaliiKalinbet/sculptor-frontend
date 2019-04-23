/*eslint-disable*/

import React, { Component } from 'react';

import InfiniteCalendar, {
  Calendar,
  withMultipleDates,
  defaultMultipleDateInterpolation,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import { connect } from 'react-redux';
import selectedData from '../../redux/actions/selectedDataAction';
import userTaskDate from '../../redux/actions/userTaskDateAction';

class Picker extends Component {
  render() {
    return (
      <InfiniteCalendar
        min={minLength}
        max={maxLength}
        minDate={minDate}
        maxDate={maxDate}
        Component={withMultipleDates(Calendar)}
        selected={selected}
        disabledDates={[]}
        interpolateSelection={defaultMultipleDateInterpolation}
        onSelect={this.props.dataHandler}
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
    );
  }
}

function mapStateToProps(state) {
  return {
    dataSelected: state.selectedData,
    userTaskDate: state.userTaskDate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dataHandler: function(event) {
      dispatch(selectedData(event));
    },
    userTaskDate: function(taskCreationDate) {
      dispatch(userTaskDate(taskCreationDate));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Picker);
