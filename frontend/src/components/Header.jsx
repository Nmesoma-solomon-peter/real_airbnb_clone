import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';



function Header() {
  return (
    <div className='header'>
        <img 
            className='header__icon' alt='header__icon'
            src='https://i.pinimg.com/564x/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.jpg'
        />
        <div className='header_center'>
            <input type='text'></input>
            <SearchIcon />
        </div>
        <div className='header__right'>
            <h5>Become a Host</h5>
            <LanguageIcon />
            <KeyboardArrowDownIcon />
            <Avatar />
        </div>
    </div>
  )
}

export default Header