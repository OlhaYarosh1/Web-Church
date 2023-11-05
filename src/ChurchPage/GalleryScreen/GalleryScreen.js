import React from 'react';
import classes from '../GalleryScreen/GalleryScreen.module.css';
import PhotoSlider from './PhotoSlider/PhotoSlider';
import AdditionalGallery from './AdditionalGallery/AdditionalGallery';

const GalleryScreen = () => {
  return (
    <div>
      <AdditionalGallery/>
      <div id='gallery'>
      <PhotoSlider/>
      </div>
    </div>
  )
}

export default GalleryScreen;