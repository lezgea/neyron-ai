import React, { useEffect, useState } from 'react';
import { ArrowUpIcon } from 'src/assets/icons';

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

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button className={'ai-scroll-top' + (visible ? ' ai-scroll-top--show' : '')} onClick={scrollToTop}>
      <ArrowUpIcon />
    </button>
  );
};

export default ScrollTop;
