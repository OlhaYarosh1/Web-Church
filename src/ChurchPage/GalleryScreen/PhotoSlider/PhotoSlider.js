import React from 'react';
import classes from './PhotoSlider.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const PhotoSlider = ({id}) => {
  return (
    <div className={classes.gallery} id={classes[id]}>

<s id='s1' className={classes.s1}></s>
  <s id='s2' className={classes.s2}></s>
  <s id='s3' className={classes.s3}></s>
  <s id='s4' className={classes.s4}></s>

  <div className={classes.slider}>
	<div className={classes.slideBackground}><img src='church1.jpg' className={classes.slide1}/></div>
    <div className={classes.slideBackground}><img src='church2.jpg' className={classes.slide2}/></div>
    <div className={classes.slideBackground}><img src='church3.jpg' className={classes.slide3}/></div>
    <div className={classes.slideBackground}><img src='church4.jpg' className={classes.slide4}/></div>
  </div>

  <div className={classes.prevNext}>
    <div>
        <a href="#s4">
            <FontAwesomeIcon className={classes.icon} icon={faAngleLeft}/>
        </a>
        <a href="#s2">
            <FontAwesomeIcon className={classes.icon} icon={faAngleRight}/>
        </a>
    </div>
    <div>
        <a href="#s1">
            <FontAwesomeIcon className={classes.icon} icon={faAngleLeft}/>
        </a>
        <a href="#s3">
            <FontAwesomeIcon className={classes.icon} icon={faAngleRight}/>
        </a>
    </div>
    <div>
        <a href="#s2">
            <FontAwesomeIcon className={classes.icon} icon={faAngleLeft}/>
        </a>
        <a href="#s4">
            <FontAwesomeIcon className={classes.icon} icon={faAngleRight}/>
        </a>
    </div>
    <div>
        <a href="#s3">
            <FontAwesomeIcon className={classes.icon} icon={faAngleLeft}/>
        </a>
        <a href="#s1">
            <FontAwesomeIcon className={classes.icon} icon={faAngleRight}/>
        </a>
    </div>
  </div>

  <div className={classes.bullets}>
    <a href="#s1"></a>
    <a href="#s2"></a>
    <a href="#s3"></a>
    <a href="#s4"></a>
  </div>

</div>
  )
}

export default PhotoSlider;
