function filter(state=true, action) {
  switch(action.type) {
    case 'TOGGLE_FILTER':
      return !state;
    default:
      return state;
  }
}

export default filter;