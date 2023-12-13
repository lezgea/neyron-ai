import React from 'react';
import Image from 'next/image';

import AilabLogo from 'src/assets/images/ailabLogo.svg';

const Footer = () => {
  return (
    <footer>
      <div>
        <span>Product of</span>
        <Image src={AilabLogo} alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
