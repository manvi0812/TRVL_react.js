import React from 'react';
import '../App.css';
import { Button } from './button';
import './HeroSection.css';

import video from '../videos/video-2.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
          GET STARTED
        </Button>
        <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large'>
          WATCH TRAILER <i className='fa fa-play-circle-o' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
