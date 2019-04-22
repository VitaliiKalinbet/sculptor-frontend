/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const CardItem = styled.div`
  background-color: #fff;
  box-shadow: 0 0 6px 1px #b9b9b9;
  border-radius: 2px;
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
  width: 29.5rem;
`;

// CardTitle
import CardTitle from './CardTitle';
// Task List
import TaskList from './TaskList';

const Card = () => {
  return (
    <CardItem>
      <CardTitle />
      <TaskList />
    </CardItem>
  );
};

export default Card;
