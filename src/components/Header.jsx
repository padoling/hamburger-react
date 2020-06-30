import React, {Component} from 'react';
import MenuBtn from '../components/MenuBtn';
import DropdownMenu from '../components/DropdownMenu';

export default class Header extends Component {
  render() {
    return (
      <header
        style={{height: '120px', textAlign: 'center'}}>
        <div 
          className='title'
          style={{float: 'left', padding: '20px 30px'}}>
          <h1>Hamburger with React</h1>
        </div>
        <div 
          className='menu'
          style={{float: 'right', padding: '20px 30px'}}>
          <MenuBtn />
          <DropdownMenu />
        </div>
      </header>
    );
  }
}