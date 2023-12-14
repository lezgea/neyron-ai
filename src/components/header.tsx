import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HeaderSwitch from './headerSwitch';

import Logo from '/public/logo.svg';

const Header = () => {
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
            <HeaderSwitch />
          </li>
          <li>
            <button type="button">Log in</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
