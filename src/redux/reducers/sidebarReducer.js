/*eslint-disable*/
function showSidebar(state = false, action) {
  switch (action.type) {
    case 'showSidebar':
      return !state;
    default:
      return state;
  }
}

export default showSidebar;
