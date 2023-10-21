import React from 'react';
import classes from './MainScreen.module.css';

const MainScreen = () => {
    return (
        <div className={classes.mainScreen}>
                <video autoPlay loop muted playsInline className={classes.background}>
                    <source src='church.mp4' type='video/mp4'/>
                </video>
                <div className={classes.middleText}>
                    <div className={classes.church}>
                        Церква Покрови Пресвятої Богородиці
                    </div>
                    <div className={classes.eparchy}>
                        Самбірсько-Дрогобицька єпархія
                    </div>
                    <div className={classes.ugcc}>
                        Українська греко-католицька церква
                    </div>
                </div>
        </div>
    )
}

export default MainScreen;
