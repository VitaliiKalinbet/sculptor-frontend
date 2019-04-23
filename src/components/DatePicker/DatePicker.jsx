import React from 'react';
// import PropTypes from 'prop-types';
import './DatePicker.css';
import { ReactComponent as Arrow } from '../../assets/images/icons/arrow/baseline-keyboard_backspace-24px.svg';

const DatePicker = props => {
  return (
    <div {...props}>
      <nav className="datePicker">
        <a href="/prev" className="datePicker__arrow">
          <Arrow className="arrow__prev" />
          prev week
        </a>
        <div className="datePicker__dateNow">
          <p className="dateNow__month">apr</p>
          <p className="dateNow__day">23</p>
        </div>
        <a href="/next" className="datePicker__arrow">
          next week
          <Arrow className="arrow__next" />
        </a>
      </nav>
    </div>
  );
};

// DatePicker.propTypes = {};

export default DatePicker;
