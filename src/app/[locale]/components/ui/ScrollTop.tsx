import Image from 'next/image';
import React, { useState } from 'react';
import ArrowTop from 'src/assets/images/arrow-top.svg';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <button className={'ai-scroll-top' + (visible ? ' ai-scroll-top--show' : '')} onClick={scrollToTop}>
      <Image src={ArrowTop} alt="Scroll to top" width="20" height="20" />
    </button>
  );
};

export default ScrollTop;
