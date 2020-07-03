import React, {Component} from 'react';
import KakaoLoginBtn from './KakaoLoginBtn';

export default class Login extends Component {
  render() {
    return(
      <div style={{padding: '20px 30px', textAlign: 'center'}}>
        <h1>로그인<span role="img" aria-label="hamburger">🍔</span></h1>
        <KakaoLoginBtn history={this.props.history} />
      </div>
    )
  }
}