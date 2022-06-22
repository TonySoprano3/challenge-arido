
import React from 'react';
import { Profile } from '../../Auth/Profile/Profile';
import './Header.scss';
const Header = () => {
  return (
    <header className='app__header'>
        <h2>Welcome to Árido Challenge</h2>
        <Profile />
       <p className='app-designed'>by: Lautaro Ortiz - FrontEnd Dev</p>
    </header>
  )
}

export default Header