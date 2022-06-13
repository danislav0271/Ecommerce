import React from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import olx from '../public/olx.ico';

const Footer = () => {
  console.log(olx);
  return (
    <div className='footer-container'>
      <p>2022 All rights reserved</p>
      <p className='icons'>
        <a href='https://www.facebook.com/' target='_blank'><AiFillFacebook /></a>
        <a href='https://www.olx.bg/' target='_blank'><img src={olx.src} alt="olx" /></a>
      </p>
    </div>
  )
}

export default Footer