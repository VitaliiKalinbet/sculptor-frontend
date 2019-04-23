/*eslint-disable*/
import React from 'react';
import GoalItem from '../GoalItem/GoalItem';
import s from './GoalList.module.css';

const GoalList = ({ data }) => {
  return (
    <ul className={s.List}>
      {data.map(el => (
        <GoalItem obj={el} />
      ))}
    </ul>
  );
};

export default GoalList;
