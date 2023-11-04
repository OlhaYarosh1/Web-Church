import React from 'react';
import classes from '../GalleryScreen/GalleryScreen.module.css';
import PhotoSlider from './PhotoSlider/PhotoSlider';

const GalleryScreen = () => {
  return (
    <div id='gallery'>
      <PhotoSlider/>
    </div>
  )
}

export default GalleryScreen;