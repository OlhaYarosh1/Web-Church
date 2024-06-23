import React from 'react';
import classes from '../GalleryScreen/GalleryScreen.module.css';
import PhotoSlider from './PhotoSlider/PhotoSlider';
import AdditionalGallery from './Additional/AdditionalGallery';
import PhotoLibraries from './PhotoLibraries/PhotoLibraries';

const GalleryScreen = () => {
  return (
    <div className={classes.galleryScreen}>
      <AdditionalGallery/>
      <div id='gallery'>
        <PhotoLibraries/>
      </div>
      {/* <PhotoSlider/> */}
    </div>
  )
}

export default GalleryScreen;