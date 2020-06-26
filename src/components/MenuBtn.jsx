import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledSpan = styled.span`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 3px;
  background: ${props => (props.isChecked ? 'transparent' : 'gray')};

  &::before, &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 30px;
    height: 3px;
    background: gray;
    transition: all .2s ease-out;
  }

  &::before {
    top: ${props => (props.isChecked ? '0' : '-10px')};
    transform: ${props => (props.isChecked ? 'rotate(-45deg)' : '')};
  }

  &::after {
    top: ${props => (props.isChecked ? '0' : '10px')};
    transform: ${props => (props.isChecked ? 'rotate(45deg)' : '')};
  }
`;

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
        style={{display: 'inline-block', padding: '30px 20px'}}
        onClick={this.props.onClick}>
        <StyledSpan isChecked={this.props.isChecked}>
        </StyledSpan>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuBtn);