import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import SetGoalModal from '../SetGoalModal/SetGoalModal';
import SetButton from '../Button/SetButton/SetButton';
import EditButton from '../Button/EditButton/EditButton';
import SetEditGoalModal from '../../redux/actions/toggleSetEditGoalModalActions';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const { openModal, editGoal, goals, btnID } = this.props;

    return (
      <>
        {/* <h1>Hello</h1> */}

        <SetButton
          type="button"
          value={btnID}
          onClick={e => openModal(e, goals, 'SET')}
        >
          SET A GOAL
        </SetButton>

        <EditButton
          type="button"
          data-id="5cb9d14ffeb784bcfadde809"
          onClick={e => openModal(e, goals, 'UPDATE')}
        />

        {editGoal.editing && (
          <Backdrop>
            <SetGoalModal modalType={editGoal.modalType} />
          </Backdrop>
        )}
      </>
    );
  }
}

App.propTypes = {
  openModal: PropTypes.func.isRequired,
  editGoal: PropTypes.bool.isRequired,
  goals: PropTypes.arrayOf(PropTypes.object).isRequired,
  btnID: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    editGoal: state.editGoal,
    goals: state.goals,
    btnID: state.goalData.goalTasks[0].id,
    // goalTitle: state.goalTitle,
    // goalColor: state.goalColor,
    // goalMotivation: state.goalMotivation,
    // goalTasks: state.goalTasks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: (e, goals, type) =>
      dispatch(SetEditGoalModal.openSetEditGoalModal(e, goals, type)),
  };
}

export default hot(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
