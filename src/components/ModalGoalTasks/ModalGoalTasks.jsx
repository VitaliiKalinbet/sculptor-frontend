/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Task from '../../redux/actions/goalAddTaskActions';

import './ModalGoalTasks.css';

const ModalTasks = ({ inputTaskTitle, goalTasks, deleteTask, addTask }) => {
  return (
    <div className="ModalTasks">
      {goalTasks.map(task => (
        <div className="ModalTasks__input-container">
          <input
            className="ModalTasks__input"
            key={task.name || task._id}
            type="text"
            name={task.name || task._id}
            value={task.taskTitle}
            onChange={e => {
              const id = task.name || task._id;
              inputTaskTitle(e, id);
            }}
          />
          <button
            type="button"
            onClick={e => {
              console.log();
              const id = task.name || task._id;
              deleteTask(e, id, goalTasks);
            }}
          >
            |x|
          </button>
          <div className="temp-checkbox">checkbox</div>
        </div>
      ))}
      {goalTasks.length < 5 && (
        <button type="button" onClick={addTask}>
          |+| Add New Task
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
};

function mapStateToProps(state) {
  return {
    goalTasks: state.goalData.goalTasks,
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
