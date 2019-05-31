/* eslint-disable */
import uuid from 'uuid/v4';

const initialTaskWeekRange = [
  {
    week: 1,
    status: false,
  },
  {
    week: 2,
    status: false,
  },
  {
    week: 3,
    status: false,
  },
  {
    week: 4,
    status: false,
  },
  {
    week: 5,
    status: false,
  },
  {
    week: 6,
    status: false,
  },
  {
    week: 7,
    status: false,
  },
  {
    week: 8,
    status: false,
  },
  {
    week: 9,
    status: false,
  },
];

const initialTask = {
  taskTitle: '',
  name: String(Date.now()),
  _id: uuid(),
  taskWeekRange: initialTaskWeekRange,
};

// const goalTasks = [{
//   ...initialTask,
// }, ];

function editGoal(
  state = {
    editing: false,
    modalType: '',
    data: {},
  },
  { type, modalType, data, id },
) {
  switch (type) {
    case 'EDIT_GOAL':
      return {
        editing: true,
        modalType,
        data: modalType === 'UPDATE' ? data : {},
      };
    case 'EDIT_GOAL_CANCEL':
      if (id === 'Backdrop') {
        return {
          editing: false,
          modalType: '',
          data: {},
        };
      }
      return {
        editing: true,
        modalType,
      };
    case 'SAVE_GOAL':
      return {
        editing: false,
        modalType: '',
      };
    case 'ADD_GOAL':
      return {
        editing: false,
        modalType: '',
      };
    case 'DELETE_TASK_FROM_EDIT_GOAL':
      return {
        ...state,
        data: {
          ...state.data,
          goalTasks: state.data.goalTasks.filter(item => item._id !== id),
        },
      };
    case 'ADD_TASK_IN_EDIT_GOAL':
      return {
        ...state,
        data: {
          ...state.data,
          goalTasks: [
            ...state.data.goalTasks,
            {
              ...initialTask,
              _id: uuid(),
              name: String(Date.now()),
              taskWeekRange: initialTaskWeekRange,
            },
          ],
        },
      };
    default:
      return state;
  }
}

export default editGoal;
