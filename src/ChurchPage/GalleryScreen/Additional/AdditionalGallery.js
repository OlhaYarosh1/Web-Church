import React from 'react';
import classes from './AdditionalGallery.module.css'

const AdditionalGallery = () => {
  return (
    <div className={classes.additional}>
        <p className={classes.phrase}>"Просіть — і дасться вам, шукайте — і знайдете, стукайте — і відчинять вам."</p>
        <p className={classes.author}>Мт 7:7</p>
        <div className={classes.line}></div>
    </div>
  )
}

export default AdditionalGallery;
