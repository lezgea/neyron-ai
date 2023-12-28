import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from 'src/assets/images/logo.svg';

import HeaderSwitch from './headerSwitch';

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
              <Link href="/aboutUs">About us</Link>
            </li>
            <li>
              <Link href="/">Courses</Link>
            </li>
            <li>
              {' '}
              <Link href="/">Community</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
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
