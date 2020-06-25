import React, {Component} from 'react';
import store from "../store";

export default class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: store.getState().isChecked
    };
    store.subscribe(() => {
      this.setState({isChecked: store.getState().isChecked})
    });
  }

  render() {
    return(
      <ul className={
        'dropdown-menu ' + 
        (this.state.isChecked ? 'checked' : '')}>
        <li>first</li>
        <li>second</li>
        <li>third</li>
        <li>fourth</li>
      </ul>
    );
  }
}