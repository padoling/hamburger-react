import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuBtn from '../components/MenuBtn';
import DropdownMenu from '../components/DropdownMenu';

function mapStateToProps(state) {
  return {
    isLogin: state.isLogin,
    userName: state.userName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginCheck: () => {
      const userToken = sessionStorage.getItem("userToken");
      if(userToken) {
        window.Kakao.Auth.setAccessToken(userToken);
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            console.log('User Info :', res);
            dispatch({ type: "LOGIN", userName: res.kakao_account.profile.nickname });
          },
          fail: err => {
            console.log('Failed to get user info :', err);
          }
        });
      }
    }
  }
}

class Header extends Component {
  componentDidMount() {
    this.props.loginCheck();
  }

  render() {
    return (
      <header style={{height: '120px', textAlign: 'center'}}>
        <Link to="/">
          <div style={{
            float: 'left', 
            padding: '19px 30px', 
            cursor: "pointer",
            color: "black"}}>
            <h1>Hamburger with React</h1>
          </div>
        </Link>
        <div 
          className='menu'
          style={{float: 'right', padding: '20px 30px'}}>
          <MenuBtn />
          <DropdownMenu />
        </div>
        <div style={{float: 'right', padding: '20px 30px'}}>
          <h3 style={{margin: '40px 0 17px 0'}}>
            {this.props.isLogin ? 
            'Welcome, ' + this.props.userName + '!' : 
            'Hello, visitor!'}
          </h3>
        </div>
      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);