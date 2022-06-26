import React from 'react';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import olx from '../public/olx.ico';
import lina from '../public/LOGO.webp'

const Footer = () => {
  console.log(olx);
  return (
    <div className='footer-container'>
      <p>2022 All rights reserved</p>
      <p className='icons'>
        <a href='https://www.facebook.com/hepacobg/' target='_blank'><AiFillFacebook /></a>
        <a href='https://www.instagram.com/hepacobg/' target='_blank'><AiFillInstagram /></a>
        <a href='https://www.olx.bg/' target='_blank'><img src={olx.src} alt="olx" /></a>
      </p>
      <p className='email'><a href = "mailto: hepaco.bg@gmail.com">hepaco.bg@gmail.com</a></p>
      <p className='email'><a className='buy-now' href='tel:+359882710547'>088 2710547</a> / <a className='buy-now' href='tel:+359892698676'>089 2698676</a></p>
      <p>Our Partner:</p><img className='lina-logo' src={lina.src} alt="lina07" />
    </div>
  )
}

export default Footer