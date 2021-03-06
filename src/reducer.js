import initialState from "./initial";

export default (state, action) => {
  switch(action.type) {
    case 'CHECK':
      return {
        ...state,
        isChecked: !state.isChecked
      };
    case 'UNCHECK':
      return {
        ...state,
        isChecked: false
      }
    case 'LOGIN':
      return {
        ...state,
        isLogin: true,
        userName: action.userName
      };
    case 'LOGIN_FAIL':
      return {
        ...state,
        isLogin: false
      }
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        userName: ''
      }
    default:
      return initialState;
  }
}