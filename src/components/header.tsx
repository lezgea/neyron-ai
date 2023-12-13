import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from 'src/assets/images/logo.svg';

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image src={Logo} alt="logo" />
      </Link>
    </header>
  );
};

export default Header;
