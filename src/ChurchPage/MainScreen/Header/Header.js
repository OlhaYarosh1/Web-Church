import React from 'react';
import classes from './Header.module.css';
import Menu from './Menu/Menu';

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
