import React from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 All rights reserved</p>
      <p className='icons'>
        <a href='https://www.facebook.com/' target='_blank'><AiFillFacebook /></a>
        <a href='https://www.instagram.com/' target='_blank'><AiFillInstagram /></a>
      </p>
    </div>
  )
}

export default Footer