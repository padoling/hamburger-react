import React, {Component} from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    isChecked: state.isChecked
  };
}

class DropdownMenu extends Component {
  render() {
    return(
      <ul className={
        'dropdown-menu ' + 
        (this.props.isChecked ? 'checked' : '')}>
        <li>first</li>
        <li>second</li>
        <li>third</li>
        <li>fourth</li>
      </ul>
    );
  }
}

export default connect(mapStateToProps)(DropdownMenu);