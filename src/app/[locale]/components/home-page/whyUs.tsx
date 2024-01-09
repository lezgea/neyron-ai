import React from 'react';
import Image from 'next/image';

import BeginnerFriendly from 'src/assets/images/beginnerFriendly.svg';
import CommunityDriven from 'src/assets/images/communityDriven.svg';
import Interactive from 'src/assets/images/interactive.svg';

const WhyUs = () => {
  return (
    <section id="why-us">
      <h1 className="page-head">Why us?</h1>
      <div className="boxes">
        <div className="box">
          <div className="image">
            <Image src={BeginnerFriendly} alt="beginner-friendly" />
          </div>
          <div className="box-text">
            <div className="box-head">Beginner-Friendly</div>
            <div className="box-info">Start with 'Introduction to AI' - No Prior Experience Needed!</div>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <Image src={Interactive} alt="beginner-friendly" />
          </div>
          <div className="box-text">
            <div className="box-head">Interactive & Addictive</div>
            <div className="box-info">Experience Gamified Learning - Engage with Every Lesson!</div>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <Image src={CommunityDriven} alt="beginner-friendly" />
          </div>
          <div className="box-text">
            <div className="box-head">Community-Driven</div>
            <div className="box-info">Join Learners from all countries - Collaborate and Grow!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
