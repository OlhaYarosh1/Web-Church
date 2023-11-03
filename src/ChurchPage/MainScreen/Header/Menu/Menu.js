import React from 'react';
import classes from "./Menu.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Menu = () => {
    return (
        <div className={classes.menuBox}>
            <div className={classes.menuGrid}>
                <a href='/'><div>Галерея</div></a>
                <a href='/'><div>Історія</div></a>
                <a href='/'><div>Хор</div></a>
                <a href='/'><div>Спільноти</div></a>
                <a href='/'><div>Контакти</div></a>
                <a href='/'><div>Мапа</div></a>
                <a href=''><div className={classes.iconShare}>
                  <FontAwesomeIcon icon={faShareNodes}/>
                  <div className={classes.socialIcons}>
                      <a href='/' className={classes.iconItem}><p><FontAwesomeIcon icon={faFacebook}/></p></a>
                      <a href='/' className={classes.iconItem}><p><FontAwesomeIcon icon={faYoutube}/></p></a>
                      <a href='/' className={classes.iconItem}><p><FontAwesomeIcon icon={faInstagram}/></p></a>
                  </div>
                </div></a>
            </div>
        </div>
    )
}

export default Menu;
