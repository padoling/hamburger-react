import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledButton = styled.button`
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

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => {
      dispatch({type: "UNCHECK"});
      if(!window.Kakao.Auth.getAccessToken()) {
        alert('Not logged in.');
        return;
      }
      window.Kakao.Auth.logout(() => {
        dispatch({ type: "LOGOUT" })
        console.log('AceessToken :', window.Kakao.Auth.getAccessToken());
      })
    }
  }
}

class LogoutBtn extends Component {
  render() {
    return(
      <StyledButton 
        className="api-btn"
        onClick={this.props.onClick}
      >로그아웃
      </StyledButton>
    );
  }
}

export default connect(null, mapDispatchToProps)(LogoutBtn);