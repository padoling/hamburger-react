import React, {Component} from 'react';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    onSuccess: (authObj, history) => {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          console.log('user info :', res);
          dispatch({ type: "LOGIN", userName: res.kakao_account.profile.nickname});
        },
        fail: err => {
          alert('login success, but failed to request user informateion: ', JSON.stringify(err));
        }
      })
      console.log('authObj :', authObj);
      history.push('/');
    },
    onFailure: err => {
      dispatch({ type: "LOGIN_FAIL" });
      alert('login Failed. Error :', err)
    }
  };
}

class KakaoLoginBtn extends Component {
  componentDidMount() {
    window.Kakao.Auth.createLoginButton({
      container: '#create-kakao-login-btn',
      success: response => this.props.onSuccess(response, this.props.history),
      fail: err => this.props.onFailure(err)
    })
  }

  render() {
    return(
      <a id="create-kakao-login-btn" />
    );
  }
}

export default connect(null, mapDispatchToProps)(KakaoLoginBtn);