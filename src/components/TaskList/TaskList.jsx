/* eslint-disable */

import React from 'react';
import styled from 'styled-components';

// list item
import TaskItem from '../TaskItem/TaskItem';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
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
