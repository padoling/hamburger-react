import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import KakaoLoginBtn from './KakaoLoginBtn';
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

  & li {
    font-size: 20px;
    max-height: 49px;
  }

  & li:hover {
    background-color: #f1f1f1;
  }
`;

function mapStateToProps(state) {
  return {
    isChecked: state.isChecked,
    isLogin: state.isLogin
  };
}

class DropdownMenu extends Component {
  render() {
    return(
      <StyledUl 
        className='dropdown-menu'
        isChecked={this.props.isChecked}>
        <li>{this.props.isLogin ? <LogoutBtn /> : <KakaoLoginBtn />}</li>
        <li>second</li>
        <li>third</li>
      </StyledUl>
    );
  }
}

export default connect(mapStateToProps)(DropdownMenu);