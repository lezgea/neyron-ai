import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HeaderSwitch from './headerSwitch';

import Logo from '/public/logo.svg';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <Link href="/" className="logo">
          <Image src={Logo} alt="logo" />
        </Link>
        <nav>
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
              <Link href="/contact">Contact us</Link>
            </li>
            <li>
              <HeaderSwitch />
            </li>
            <li>
              <Link href="/login">
                {' '}
                <button type="button">Log in</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
