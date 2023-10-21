import React from 'react';
import Menu from './Menu/Menu'
import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
        <div className={classes.imgLogo}>
            <img src='Logo.png' alt='' align="middle"/>
        </div>
        <div>
            <Menu/>
        </div>
    </div>
  )
}

export default Header;
