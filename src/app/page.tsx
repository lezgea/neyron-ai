import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import Icon from 'src/assets/images/comingSoonIcon.svg';
import Logo from 'src/assets/images/logo.svg';
import SubscribeForm from 'src/components/home-page/subscribeForm';
import RightCircles from 'src/components/RightCircles';

const App = () => {
  return (
    <div className="home-page">
      <div className="left">
        <div className="left-content">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
          <div className='coming-soon-mobile-text'>Coming soon...</div>
          <h2>Join us for fun AI learning!</h2>
          <p>
            Our interactive, gamified platform is designed for everyone. Stay tuned for an awesome experience!
          </p>
          {/* <div className="icon-text">
            <Image src={Icon} alt="icon" />
            <p>
              On this beginner-friendly platform, explore interactive challenges, unlock achievements, and
              enhance your AI skills in a gamified way.
            </p>
          </div> */}
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

export default App;
