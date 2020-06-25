import React, {Component} from 'react';
import MenuBtn from '../components/MenuBtn';
import DropdownMenu from '../components/DropdownMenu';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className='title'>
          <h1>Hamburger with React</h1>
        </div>
        <div className='menu'>
          <MenuBtn />
          <DropdownMenu />
        </div>
      </header>
    );
  }
}