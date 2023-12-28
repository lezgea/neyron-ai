'use client';

import AboutUs from './aboutUs';
import BeginAdventure from './beginAdventure';
import Community from './community';
import Explore from './Explore';
import Faq from './faq';
import Feedbacks from './feedbacks';
import WhyUs from './whyUs';

const ContainerPage = () => {
  return (
    <div className="stack">
      <div className="stack__card">
        <Explore />
      </div>
      <div className="stack__card">
        <BeginAdventure />
      </div>
      <div className="stack__card">
        <AboutUs />
      </div>
      <div className="stack__card">
        <WhyUs />
      </div>
      <div className="stack__card">
        <Community />
      </div>
      <div className="stack__card">
        <Faq mainPage={true} />
      </div>
      <div className="stack__card">
        <Feedbacks />
      </div>
    </div>
  );
};

export default ContainerPage;
