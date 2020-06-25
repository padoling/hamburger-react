import React, {Component} from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    isChecked: state.isChecked
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      dispatch({type: "CHECK"});
    }
  };
}

class MenuBtn extends Component {
  render() {
    return(
      <div 
        className='menu-btn' 
        onClick={this.props.onClick}>
        <span className={
          'hamburger-icon ' + 
          (this.props.isChecked ? 'checked' : '')}>
        </span>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBtn);