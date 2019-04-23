/*eslint-disable*/
import React from 'react';
import GoalItem from '../GoalItem/GoalItem';
import s from './GoalList.module.css';

const GoalList = () => {
  return (
    <ul className={s.List}>
      <GoalItem />
    </ul>
  );
};

export default GoalList;
