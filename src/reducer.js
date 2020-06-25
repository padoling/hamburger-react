export default (state, action) => {
  switch(action.type) {
    case 'CHECK':
      return {
        ...state,
        isChecked: !state.isChecked
      };
    default:
      return {isChecked: false};
  }
}