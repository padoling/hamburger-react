import {createStore} from 'redux';

export default createStore(function(state, action) {
  if(state === undefined) {
    return {isChecked: false};
  }
  if(action.type === 'CHECK') {
    return {...state, isChecked: !state.isChecked};
  }
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());