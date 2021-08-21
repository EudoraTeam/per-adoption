import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Addition.css';

function Addition() {
  return (
    <div className='add-container'>
      <video src='/videos/cute.mp4' autoPlay loop muted />
      <h1>HELLO PET LOVERS</h1>
      <p>Scroll down to see most adorable pets</p>
      <div className='add-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         GET STARTED
        </Button>
       
      </div>
    </div>
  );
}

export default Addition;
