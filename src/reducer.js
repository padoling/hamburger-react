import initialState from "./initial";

export default (state, action) => {
  switch(action.type) {
    case 'CHECK':
      return {
        ...state,
        isChecked: !state.isChecked
      };
    case 'LOGIN':
      return {
        ...state,
        isLogin: true
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        isLogin: false
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false
      }
    default:
      return initialState;
  }
}