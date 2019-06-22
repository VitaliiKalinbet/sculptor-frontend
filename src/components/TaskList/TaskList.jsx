/* eslint-disable */

import React from 'react';
import styled from 'styled-components';

// list item
import TaskItem from '../TaskItem/TaskItem';

const List = styled.ul`
  height: 150px;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  ${'' /* justify-content: center; */}
  ${'' /* align-items: center; */}
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0.5rem;

  @media screen and (min-width: 767px) {
  }
`;

const TaskList = ({ items }) => {
  return (
    <List>
      {items.map((task, idx) => (
        <TaskItem data={task} key={idx} />
      ))}
    </List>
  );
};

export default TaskList;
