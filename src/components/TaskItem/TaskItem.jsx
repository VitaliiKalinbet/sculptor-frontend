/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import IconButtons from '../TrashButton';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`;

// icon status
const ItemStatus = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${props => props.color || '#fff'};
  border: 1px solid ${props => props.color || '#ccc'};
`;
// text
const ItemDescription = styled.p`
  padding-left: 1.5rem;
  color: #454545;
  font-size: 1.4rem;
  font-family: 'Roboto Light';
  flex: 1;
`;

const MoveToTrash = styled.div`
  opacity: 0;
  transition: 0.5s;

  ${Item}:hover & {
    opacity: 1;
    transition: 0.5s;
  }
`;

// ----  тут получаем из СТОРА массив таксов, и размножаем их  ----
//ItemStatus - получаем статус таски, в зависимости от этого применяем стили
//ItemDescription - получает текст такси

const TaskItem = props => {
  const goals = props.goals;
  return (
    <>
      <Item>
        <ItemStatus />
        <ItemDescription>Text-1 about task 1</ItemDescription>
        <MoveToTrash>
          <IconButtons />
        </MoveToTrash>
      </Item>
    </>
  );
};

const mstp = state => ({
  goals: state.goals,
});

export default connect(mstp)(TaskItem);
