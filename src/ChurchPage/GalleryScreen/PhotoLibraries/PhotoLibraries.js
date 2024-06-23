import React from 'react';
import classes from './PhotoLibraries.module.css';

const PhotoLibraries = ({id}) => {
    return (
        <div className={classes.libraries} id={classes[id]}>
                <div className={classes.folderPokrova}>
                    <img src='church1.jpg' className={classes.slide1}/>
                    <img src='church2.jpg' className={classes.slide2}/>
                    <img src='church3.jpg' className={classes.slide3}/>
                    <img src='church4.jpg' className={classes.slide4}/>
                    <a className={classes.href} href='/'>
                        <div className={classes.labelPokrova}>Покрови</div>
                    </a>
                </div>
                <div className={classes.folderRizdvo}>
                    <img src='church1.jpg' className={classes.slide1}/>
                    <img src='church2.jpg' className={classes.slide2}/>
                    <img src='church3.jpg' className={classes.slide3}/>
                    <img src='church4.jpg' className={classes.slide4}/>
                    <a className={classes.href} href='/'>
                        <div className={classes.labelRizdvo}>Різдво</div>
                    </a>
                </div>
                <div className={classes.folderVelykden}>
                    <img src='church1.jpg' className={classes.slide1}/>
                    <img src='church2.jpg' className={classes.slide2}/>
                    <img src='church3.jpg' className={classes.slide3}/>
                    <img src='church4.jpg' className={classes.slide4}/>
                    <a className={classes.href} href='/'>
                        <div className={classes.labelVelykden}>Великдень</div>
                    </a>
                </div>
                <div className={classes.folderVolontery}>
                    <img src='church1.jpg' className={classes.slide1}/>
                    <img src='church2.jpg' className={classes.slide2}/>
                    <img src='church3.jpg' className={classes.slide3}/>
                    <img src='church4.jpg' className={classes.slide4}/>
                    <a className={classes.href} href='/'>
                        <div className={classes.labelVolontery}>Волонтери</div>
                    </a>
                </div>
                <div className={classes.folderVertep}>
                    <img src='church1.jpg' className={classes.slide1}/>
                    <img src='church2.jpg' className={classes.slide2}/>
                    <img src='church3.jpg' className={classes.slide3}/>
                    <img src='church4.jpg' className={classes.slide4}/>
                    <a className={classes.href} href='/'>
                        <div className={classes.labelVertep}>Вертеп</div>
                    </a>
                </div>
                <div className={classes.folderHaivky}>
                    <img src='church1.jpg' className={classes.slide1}/>
                    <img src='church2.jpg' className={classes.slide2}/>
                    <img src='church3.jpg' className={classes.slide3}/>
                    <img src='church4.jpg' className={classes.slide4}/>
                    <a className={classes.href} href='/'>
                        <div className={classes.labelHaivky}>Гаївки</div>
                    </a>
                </div>
        </div>
    )
}

export default PhotoLibraries;
