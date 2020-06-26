import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledUl = styled.ul`
  position: absolute;
  right: 30px;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  max-height: ${props => (props.isChecked ? '250px' : '0')};
  background-color: wheat;
  z-index: 1;
  transition: max-height .2s ease-out;

  & li {
    font-size: 20px;
    padding: 20px 100px;
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
        <li>first</li>
        <li>second</li>
        <li>third</li>
        <li>fourth</li>
      </StyledUl>
    );
  }
}

export default connect(mapStateToProps)(DropdownMenu);