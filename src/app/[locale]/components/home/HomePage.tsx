'use client';
import AboutUs from './AboutUs';
import BeginAdventure from './BeginAdventure';
import Community from './Community';
import Explore from './Explore';
import Faq from './Faq';
import Feedbacks from './Feedbacks';
import WhyUs from './WhyUs';
// @ts-ignore
import ReactFullpage, { FullPageApi } from '@fullpage/react-fullpage';
import Footer from '../footer/Footer';

const HomePage = () => {
  return (
    <main className="main main--home">
      <ReactFullpage
        navigation
        scrollingSpeed={1000}
        scrollOverflow={true}
        fadingEffect={'sections'}
        normalScrollElements={'.ai-testimonials'}
        render={({ fullpageApi }: any) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section section-1">
                <Explore />
              </div>
              <div className="section section-2">
                <BeginAdventure />
              </div>
              <div className="section section-3">
                <AboutUs />
              </div>
              <div className="section">
                <WhyUs />
              </div>
              <div className="section">
                <Community />
              </div>
              <div className="section">
                <Feedbacks />
              </div>
              <div className="section">
                <Faq mainPage={true} />
              </div>
              <div className="section fp-auto-height">
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </main>
  );
};

export default HomePage;
