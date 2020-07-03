import React, {Component} from 'react';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
  return {
    onSuccess: (response, history) => {
      dispatch({ type: "LOGIN" });
      console.log(response);
      history.push('/');
    },
    onFailure: response => {
      dispatch({ type: "LOGIN_FAIL" });
      alert('Login Failed. Error :', response)
    }
  };
}

class KakaoLoginBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNick: ''
    };
  }

  componentDidMount() {
    window.Kakao.Auth.createLoginButton({
      container: '#create-kakao-login-btn',
      success: response => this.props.onSuccess(response, this.props.history),
      fail: response => this.props.onFailure(response)
    })
  }

  render() {
    return(
      <a id="create-kakao-login-btn" />
    );
  }
}

export default connect(null, mapDispatchToProps)(KakaoLoginBtn);