import React, {Component} from 'react';
import store from "../store";

export default class MenuBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: store.getState().isChecked
    };
    store.subscribe(() => {
      this.setState({isChecked: store.getState().isChecked});
    });
  }

  render() {
    return(
      <div 
        className='menu-btn' 
        onClick={() => {
          store.dispatch({type: "CHECK", isChecked: !this.state.isChecked});
        }}>
        <span className={
          'hamburger-icon ' + 
          (this.state.isChecked ? 'checked' : '')}>
        </span>
      </div>
    );
  }
}