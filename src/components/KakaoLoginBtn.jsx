import React, {Component} from 'react';
import KakaoLogin from 'react-kakao-login';

export default class KakaoLoginBtn extends Component {
  state = {
    imgSrc: 'https://kauth.kakao.com/public/widget/login/kr/kr_02_medium.png'
  }

  render() {
    return(
      <KakaoLogin 
        render={() => (
          <a id='create-kakao-login-btn'>
            <img 
              id='kakao-login-btn' 
              src={this.state.imgSrc}
              style={{cursor: "pointer"}} 
              onMouseOver={() => {
                this.setState({
                  imgSrc: 'https://kauth.kakao.com/public/widget/login/kr/kr_02_medium_press.png'
                })
              }} 
              onMouseOut={() => {
                this.setState({
                  imgSrc: 'https://kauth.kakao.com/public/widget/login/kr/kr_02_medium.png'
                })
              }} />
          </a>
        )}
      />
    );
  }
}