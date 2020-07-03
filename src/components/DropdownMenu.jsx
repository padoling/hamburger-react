import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';

const StyledUl = styled.ul`
  position: absolute;
  right: 50px;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  max-height: ${props => (props.isChecked ? '300px' : '0')};
  background-color: white;
  z-index: 1;
  transition: max-height .2s ease-out;
`;

const StyledBtn = styled.button`
  min-width: 222px;
  height: 49px;
  line-height: 49px;
  font-size: 16px;
  font-weight: 600;
  background-color: white;
  outline: none;
  border: 0 none;
  cursor: pointer;
  vertical-align: middle;

  &:hover {
    background-color: #b2bec3;
  }
`;

function mapStateToProps(state) {
  return {
    isChecked: state.isChecked,
    isLogin: state.isLogin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      dispatch({type: "UNCHECK"});
    }
  }
}

class DropdownMenu extends Component {
  render() {
    return(
      <StyledUl 
        className='dropdown-menu'
        isChecked={this.props.isChecked}>
        <li>{this.props.isLogin ? 
          <LogoutBtn onClick={this.props.onClick}>로그아웃</LogoutBtn> : 
          <Link to="/login">
            <StyledBtn onClick={this.props.onClick}>로그인</StyledBtn>
          </Link>}
        </li>
        <li><StyledBtn onClick={this.props.onClick}>second</StyledBtn></li>
        <li><StyledBtn onClick={this.props.onClick}>third</StyledBtn></li>
      </StyledUl>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownMenu);