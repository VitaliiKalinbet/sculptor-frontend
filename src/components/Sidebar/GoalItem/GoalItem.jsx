/*eslint-disable*/
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskList from '../TaskList/TaskList';
import EditBtn from '../../BtnEditGoal/BtnEditGoal';
import SetEditGoalModal from '../../../redux/actions/toggleSetEditGoalModalActions';
import { addGoalColor } from '../../../redux/actions/radioAction';
import goalAddTaskActions from '../../../redux/actions/goalAddTaskActions';
import s from './GoalItem.module.css';

const GoalItem = ({
  data,
  goals,
  openModal,
  addGoalColorFunc,
  addTasksWhenEditMode,
}) => {
  return (
    <li className={s.List}>
      <div className={s.Title}>
        <span
          className={s.Color}
          style={{ backgroundColor: `${data.goalColor}` }}
        />
        <h2 className={s.SubTitle}>{data.goalTitle}</h2>
        <EditBtn
          onClick={e => {
            openModal(e, data, 'UPDATE');
            addGoalColorFunc(data.goalColor);
            addTasksWhenEditMode(data.goalTasks);
          }}
          btnID={data._id}
        />
      </div>

      <p className={s.Description}>{data.goalMotivation}</p>
      <TaskList data={data.goalTasks} />
    </li>
  );
};

GoalItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  goals: PropTypes.arrayOf(PropTypes.object).isRequired,
  addGoalColorFunc: PropTypes.func.isRequired,
  addTasksWhenEditMode: PropTypes.func.isRequired,
};

const MSTP = state => {
  return {
    goals: state.goals,
  };
};

function MDTP(dispatch) {
  return {
    openModal: (e, goals, type) =>
      dispatch(SetEditGoalModal.openSetEditGoalModal(e, goals, type)),
    addGoalColorFunc: color => dispatch(addGoalColor(color)),
    addTasksWhenEditMode: arrTasks =>
      dispatch(goalAddTaskActions.addTasksWhenEditMode(arrTasks)),
  };
}

export default connect(
  MSTP,
  MDTP,
)(GoalItem);
