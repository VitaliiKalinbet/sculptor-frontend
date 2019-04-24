import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// import Container from '../Container/Container';
import Sidebar from '../components/Sidebar/Sidebar';

// Dashboard
import Dashboard from '../components/Dashboard/Dashboard';
import Header from '../components/Header/Header';
import Backdrop from '../components/Backdrop/Backdrop';
import SetGoalModal from '../components/SetGoalModal/SetGoalModal';

// import LoginButton from '../Button/LoginButton/LoginButton';
// import DeleteButton from '../Button/DeleteButton/DeleteButton';
// import SetButton from '../Button/SetButton/SetButton';
// import EditButton from '../Button/EditButton/EditButton';
import SetEditGoalModal from '../redux/actions/toggleSetEditGoalModalActions';

// import './App.css';
import Statistics from '../components/Statistics/Statistics';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      // openModal,
      editGoal,
      // goals,
      // btnID
    } = this.props;

    return (
      <>
        {editGoal.editing && (
          <Backdrop>
            <SetGoalModal modalType={editGoal.modalType} />
          </Backdrop>
        )}
        <div className="main">
          <Sidebar className="main__left" />
          <div className="main__right">
            <Header />
            <Router>
              <div className="main__container">
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/results" component={Statistics} />
                {/* <Route path="/results" component={TestResults} /> */}
              </div>
            </Router>
          </div>
        </div>
      </>
    );
  }
}

App.propTypes = {
  // openModal: PropTypes.func.isRequired,
  editGoal: PropTypes.bool.isRequired,
  // goals: PropTypes.arrayOf(PropTypes.object).isRequired,
  // btnID: PropTypes.string.isRequired,
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

    isLogoutModalOpen: state.toggleLogoutModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: (e, goals, type) =>
      dispatch(SetEditGoalModal.openSetEditGoalModal(e, goals, type)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// export default hot(App);

// import React, { Component } from 'react';
// import { hot } from 'react-hot-loader/root';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import Backdrop from '../Backdrop/Backdrop';
// import SetGoalModal from '../SetGoalModal/SetGoalModal';
// import LoginButton from '../Button/LoginButton/LoginButton';
// import DeleteButton from '../Button/DeleteButton/DeleteButton';
// import SetButtonButton from '../Button/SetButton/SetButton';
// import EditButton from '../Button/EditButton/EditButton';
// import SetEditGoalModal from '../../redux/actions/toggleSetEditGoalModalActions';
// import './App.css';

// // eslint-disable-next-line react/prefer-stateless-function
// class App extends Component {
//   render() {
//     const { openModal, editGoal, goals, btnID } = this.props;

//     return (
//       <>
//         {/* <h1>Hello</h1> */}
//         <LoginButton />
//         <DeleteButton />
//         <SetButtonButton />
//         <EditButton />

//         <button
//           type="button"
//           value={btnID}
//           onClick={e => openModal(e, goals, 'SET')}
//         >
//           SET A GOAL
//         </button>

//         <button
//           type="button"
//           data-id="5cb9d14ffeb784bcfadde809"
//           onClick={e => openModal(e, goals, 'UPDATE')}
//         >
//           EDIT GOAL
//         </button>

//         {editGoal.editing && (
//           <Backdrop>
//             <SetGoalModal modalType={editGoal.modalType} />
//           </Backdrop>
//         )}
//       </>
//     );
//   }
// }

// App.propTypes = {
//   openModal: PropTypes.func.isRequired,
//   editGoal: PropTypes.bool.isRequired,
//   goals: PropTypes.arrayOf(PropTypes.object).isRequired,
//   btnID: PropTypes.string.isRequired,
// };

// function mapStateToProps(state) {
//   return {
//     editGoal: state.editGoal,
//     goals: state.goals,
//     btnID: state.goalData.goalTasks[0].id,
//     // goalTitle: state.goalTitle,
//     // goalColor: state.goalColor,
//     // goalMotivation: state.goalMotivation,
//     // goalTasks: state.goalTasks,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     openModal: (e, goals, type) =>
//       dispatch(SetEditGoalModal.openSetEditGoalModal(e, goals, type)),
//   };
// }

// export default hot(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps,
//   )(App),
// );
