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
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0.5rem;
`;

const TaskList = ({ items }) => {
  return (
    <List>
      {items.map(task => (
        <TaskItem data={task} />
      ))}
    </List>
  );
};

export default TaskList;
