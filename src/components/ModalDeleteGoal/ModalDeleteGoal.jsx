/* eslint-disable */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Draggable from 'react-draggable';
import BasicButton from '../Button/BasicButton/BasicButton.jsx';

import ModalDeleteGoalActions from '../../redux/actions/ModalDeleteGoalActions';
import deleteGoalAction from '../../redux/actions/deleteGoalAction';

import './ModalDeleteGoal.css';

function PaperComponent(props) {
  return (
    <Draggable>
      <Paper {...props} />
    </Draggable>
  );
}

const ModalDeleteGoal = ({
  isDeleteGoalModalOpen,
  toggleDeleteGoalModal,
  deleteGoal,
  activeGoalID,
}) => {
  return (
    <Grid container>
      <Grid item>
        <Dialog
          open={isDeleteGoalModalOpen}
          onClose={toggleDeleteGoalModal}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle
            id="draggable-dialog-title"
            disableTypography
            className="DialogTitle"
          >
            Are you sure you want to delete this goal?
          </DialogTitle>
          <DialogActions className="DialogActions">
            <Grid container justify="center">
              <Grid item>
                <BasicButton
                  onClickFunc={() => {
                    toggleDeleteGoalModal();
                  }}
                  isDisabled={false}
                  btnColor={'white'}
                  btnText={'Cancel'}
                />
              </Grid>

              <Grid item>
                <BasicButton
                  onClickFunc={() => deleteGoal(activeGoalID)}
                  isDisabled={false}
                  btnColor={'orange'}
                  btnText={'Delete'}
                />
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};

function mapStateToProps(state) {
  return {
    isDeleteGoalModalOpen: state.isDeleteGoalModalOpen,
    activeGoalID: state.goalData.activeGoalID,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteGoal: id => dispatch(deleteGoalAction.asyncDeleteGoal(id)),
    toggleDeleteGoalModal: () =>
      dispatch(ModalDeleteGoalActions.toggleDeleteGoalModal()),
  };
}

ModalDeleteGoal.propTypes = {
  isDeleteGoalModalOpen: PropTypes.bool,
  toggleDeleteGoalModal: PropTypes.func.isRequired,
};

ModalDeleteGoal.defaultProps = {
  isDeleteGoalModalOpen: false,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalDeleteGoal);
