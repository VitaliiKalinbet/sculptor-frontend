import React from 'react';
import styled from 'styled-components';

// list item
import TaskItem from './TaskItem';

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const TaskList = () => {
  return (
    <List>
      <TaskItem />
    </List>
  );
};

export default TaskList;
