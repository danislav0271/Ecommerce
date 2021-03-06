import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">HEPACO</Link>
      </p>
    </div>
  )
}

export default Navbar