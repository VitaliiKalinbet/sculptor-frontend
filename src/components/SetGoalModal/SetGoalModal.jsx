/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './SetGoalModal.module.css';
import ModalGoalTitle from '../ModalGoalTitle/ModalGoalTitle';
// import ModalGoalIconSelect from '../ModalGoalIconSelect/ModalGoalIconSelect';
import ModalGoalTasks from '../ModalGoalTasks/ModalGoalTasks';
import ModalGoalMotivation from '../ModalGoalMotivation/ModalGoalMotivation';
import deleteGoalAction from '../../redux/actions/deleteGoalAction';

import GoalActions from '../../redux/actions/saveGoalActions';
import ModalGoalIconSelect from '../ModalGoalIconSelect/ModalGoalIconSelect';

import api from '../../services/api';

class SetGoalModal extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleAddGoal = ({
    goalTitle,
    goalColor,
    goalTasks,
    goalMotivation,
    user,
  }) => {
    const { addGoal } = this.props;
    const newData = {
      goalTitle,
      goalColor,
      goalTasks,
      goalMotivation,
      userId: user.userId,
    };

    api.newGoal({ data: newData, token: user.token }).then(data => {
      if (data.success) {
        return addGoal(
          data.goals.goalTitle,
          data.goals.goalColor,
          data.goals.goalTasks,
          data.goals.goalMotivation,
        );
      }
      return null;
    });
  };

  deleteGoalFunc = () => {
    const { activeGoalID, deleteGoal } = this.props;
    deleteGoal(activeGoalID);
  };

  render() {
    const {
      saveGoal,
      goalTitle,
      goalColor = 'a',
      goals,
      goalMotivation,
      goalTasks,
      activeGoalID,
      modalType,
      user,
    } = this.props;

    return (
      <div className={styles.SetGoalModal} onClick={e => e.stopPropagation()}>
        <h3 className={styles.SetGoalModal__title}>
          {modalType === 'SET' ? 'Set' : 'Update'} a Goal
        </h3>
        <ModalGoalTitle />
        <ModalGoalIconSelect />
        <ModalGoalTasks />
        <ModalGoalMotivation />

        <button
          type="button"
          onClick={() =>
            modalType !== 'SET'
              ? saveGoal(
                  goalTitle,
                  goalColor,
                  goalTasks,
                  goalMotivation,
                  goals,
                  activeGoalID,
                  user,
                )
              : this.handleAddGoal({
                  goalTitle,
                  goalColor,
                  goalTasks,
                  goalMotivation,
                  activeGoalID,
                  user,
                })
          }
          disabled={!goalTitle.length || !goalColor.length}
        >
          {modalType === 'SET' ? 'Create' : 'Save'}
        </button>
        {modalType === 'SET' ? null : (
          <button type="button" onClick={this.deleteGoalFunc}>
            Delete
          </button>
        )}
      </div>
    );
  }
}

SetGoalModal.propTypes = {
  goalTitle: PropTypes.string.isRequired,
  modalType: PropTypes.string.isRequired,
  saveGoal: PropTypes.func.isRequired,
  addGoal: PropTypes.func.isRequired,
  deleteGoal: PropTypes.func.isRequired,
  goals: PropTypes.arrayOf(PropTypes.object).isRequired,
  goalColor: PropTypes.string.isRequired,
  goalMotivation: PropTypes.string,
  goalTasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeGoalID: PropTypes.string.isRequired,
  user: PropTypes.shape.isRequired,
};

SetGoalModal.defaultProps = {
  goalMotivation: '',
};

function mapStateToProps(state) {
  return {
    goals: state.goals,
    goalTitle: state.goalData.goalTitle,
    goalColor: state.goalData.goalColor,
    goalMotivation: state.goalData.goalMotivation,
    goalTasks: state.goalData.goalTasks,
    activeGoalID: state.goalData.activeGoalID,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveGoal: (
      goalTitle,
      goalColor,
      goalTasks,
      goalMotivation,
      goals,
      activeGoalID,
    ) =>
      dispatch(
        GoalActions.saveGoal(
          goalTitle,
          goalColor,
          goalTasks,
          goalMotivation,
          goals,
          activeGoalID,
        ),
      ),
    addGoal: (goalTitle, goalColor, goalTasks, goalMotivation, activeGoalID) =>
      dispatch(
        GoalActions.addGoal(
          goalTitle,
          goalColor,
          goalTasks,
          goalMotivation,
          activeGoalID,
        ),
      ),
    deleteGoal: id => dispatch(deleteGoalAction.asyncDeleteGoal(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SetGoalModal);
