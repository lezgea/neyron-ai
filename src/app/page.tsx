import React from 'react';

import BeginAdventure from 'src/components/home-page/beginAdventure';
import Community from 'src/components/home-page/community';
import Explore from 'src/components/home-page/Explore';
import Faq from 'src/components/home-page/faq';
import Feedbacks from 'src/components/home-page/feedbacks';
import WhyUs from 'src/components/home-page/whyUs';

import AboutUs from '../components/home-page/aboutUs';

const App = () => {
  return (
    <div>
      <Explore />
      <AboutUs />
      <WhyUs />
      <BeginAdventure />
      <Community />
      <Feedbacks />
      <Faq />
    </div>
  );
};

export default App;
