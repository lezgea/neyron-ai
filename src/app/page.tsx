import React from 'react';
import Image from 'next/image';

import CloudIcon from 'src/assets/images/cloud-coming-soon.svg';
import MonsterIcon from 'src/assets/images/monster.svg';
import SubscribeForm from 'src/components/home-page/subscribeForm';
import RightCircles from 'src/components/RightCircles';

const App = () => {
  return (
    <section className="home-page">
      <div className="left">
        <div className="monster-div">
          <div className="cloud-img">
            <Image src={CloudIcon} alt="cloud" />
          </div>
          <div className="monster-img">
            <Image src={MonsterIcon} alt="monster" />
          </div>
        </div>
        <div className="left-content">
          <div className="left-texts">
            <span>JOIN US</span>
            <h2>for interactive and fun AI learning!</h2>
            <p>
              Our interactive, gamified platform is designed for everyone. Stay tuned for an awesome
              experience!
            </p>
          </div>
          <SubscribeForm />
        </div>
      </div>
      <div className="right">
        <RightCircles />
        <h2>COMING SOON...</h2>
      </div>
    </section>
  );
};

export default App;
