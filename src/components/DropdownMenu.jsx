import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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
    padding: 20px 70px;
  }

  & li:hover {
    background-color: #f1f1f1;
  }
`;

function mapStateToProps(state) {
  return {
    isChecked: state.isChecked
  };
}

class DropdownMenu extends Component {
  render() {
    return(
      <StyledUl 
        className='dropdown-menu'
        isChecked={this.props.isChecked}>
        <li>카카오 로그인</li>
        <li>second</li>
        <li>third</li>
        <li>fourth</li>
      </StyledUl>
    );
  }
}

export default connect(mapStateToProps)(DropdownMenu);