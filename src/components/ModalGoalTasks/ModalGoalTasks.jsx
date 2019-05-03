/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Task from '../../redux/actions/goalAddTaskActions';

import ModalGoalWeekSelect from '../ModalGoalWeekSelect/ModalGoalWeekSelect';
import DelBtn from '../Button/DeleteButton/DeleteButton';

import './ModalGoalTasks.css';

const ModalTasks = ({
  inputTaskTitle,
  goalTasks,
  deleteTask,
  addTask,
  editGoal,
}) => {
  return (
    <div className="ModalTasks">
      {(editGoal.data.goalTasks || goalTasks).map(task => (
        <div className="ModalTasks__input-container">
          <div className="ModalTasks__input-container--left">
            <input
              className="ModalTasks__input"
              key={task.name || task._id}
              type="text"
              name={task.name || task._id}
              value={task.taskTitle}
              placeholder="Enter your task"
              onChange={e => {
                const id = task.name || task._id;
                inputTaskTitle(e, id);
              }}
            />
            <DelBtn
              // type="button"
              className="ModalTasks__del-btn"
              onClick={e => {
                const id = task.name || task._id;
                deleteTask(e, id, goalTasks);
              }}
            />
            {/* <button
              type="button"
              onClick={e => {
                const id = task.name || task._id;
                deleteTask(e, id, goalTasks);
              }}
            >
              |x|
            </button> */}
          </div>
          <ModalGoalWeekSelect id={task.name || task._id} task={task} />
          {/* <div className="temp-checkbox">checkbox</div> */}
        </div>
      ))}
      {goalTasks.length < 5 && (
        <button type="button" onClick={addTask} className="ModalTasks__add-btn">
          <span className="ModalTasks__add-btn--plus">+</span> Add New Task
        </button>
      )}
      {/* <TrashButton /> from Dmytro */}
    </div>
  );
};

ModalTasks.propTypes = {
  goalTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputTaskTitle: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  editGoal: PropTypes.shape.isRequired,
};

function mapStateToProps(state) {
  return {
    goalTasks: state.goalData.goalTasks,
    editGoal: state.editGoal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inputTaskTitle: (e, name) => dispatch(Task.inputTaskTitle(e, name)),
    deleteTask: (e, name, goalTasks) =>
      dispatch(Task.deleteTask(e, name, goalTasks)),
    addTask: () => dispatch(Task.addTask()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalTasks);
