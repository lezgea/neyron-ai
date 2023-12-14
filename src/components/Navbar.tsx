'use client';
import { Switch } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import Logo from '../../public/logo.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="logo">
          <Image src={Logo} alt="logo" />
        </div>
        <ul className="list-item">
          <li>
            <Link href="/">About us</Link>
          </li>
          <li>
            <Link href="/">Courses</Link>
          </li>
          <li>
            {' '}
            <Link href="/">Community</Link>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
          <li>
            <Link href="/">Contact us</Link>
          </li>
          <li>
            {' '}
            <Switch
              defaultChecked
              className="switch-button"
              checked={true}
              onChange={() => {}}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </li>
          <li>
            <button type="button">Log in</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
