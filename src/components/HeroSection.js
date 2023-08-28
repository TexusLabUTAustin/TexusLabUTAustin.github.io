import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='video-container'>
      <video src={process.env.PUBLIC_URL + '/videos/video-1.mp4'} autoPlay loop muted />
      </div>

      <f>Welcome to</f>

      <h1>TExUS LAB </h1>
      <p>UT AUSTIN</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--largest'
          to= '/Graph1'
        >
          EMPTY BUTTON
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--largest'
          onClick={console.log('hey')}
        >
          EMPTY BUTTON 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
