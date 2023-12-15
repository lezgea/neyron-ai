import React from 'react';

import BeginAdventure from 'src/components/beginAdventure/beginAdventure';
import Explore from 'src/components/explore/Explore';
import WhyUs from 'src/components/whyUs/whyUs';

import AboutUs from '../components/aboutUs/page';
import Faq from '../components/faq/page';

const App = () => {
  return (
    <div>
      <Explore />
      <AboutUs />
      <WhyUs />
      <BeginAdventure />
      <Faq />
    </div>
  );
};

export default App;
