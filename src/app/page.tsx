'use client';
import React from 'react';

import AboutUs from 'src/components/home-page/aboutUs';
import BeginAdventure from 'src/components/home-page/beginAdventure';
import Community from 'src/components/home-page/community';
import Explore from 'src/components/home-page/Explore';
import Faq from 'src/components/home-page/faq';
import Feedbacks from 'src/components/home-page/feedbacks';
import WhyUs from 'src/components/home-page/whyUs';

const App = () => {
  return (
    <>
      <Explore />
      <AboutUs />
      <WhyUs />
      <BeginAdventure />
      <Community />
      <Feedbacks />
      <Faq />
    </>
  );
};

export default App;
