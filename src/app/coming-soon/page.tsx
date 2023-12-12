import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Icon from 'src/assets/images/comingSoonIcon.svg';
import Logo from 'src/assets/images/logo.svg';
import RightCircles from 'src/components/RightCircles';

import SubscribeForm from './subscribeForm';

const ComingSoon = () => {
  return (
    <div className="home-page">
      <div className="left">
        <div className="left-content">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
          <h2>Get ready</h2>
          <p>for an inclusive AI learning experience - designed for everyone!</p>
          <div className="icon-text">
            <Image src={Icon} alt="icon" />
            <p>
              On this beginner-friendly platform, explore interactive challenges, unlock achievements, and
              enhance your AI skills in a gamified way.
            </p>
          </div>
          <SubscribeForm />
        </div>
      </div>
      <div className="right">
        <RightCircles />
        <h2>COMING SOON...</h2>
      </div>
    </div>
  );
};

export default ComingSoon;
