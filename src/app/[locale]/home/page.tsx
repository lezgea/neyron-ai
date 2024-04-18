'use client';

// @ts-ignore
import ReactFullpage, { FullPageApi } from '@fullpage/react-fullpage';
import Explore from '../components/core/Explore';
import BeginAdventure from '../components/core/BeginAdventure';
import WhyUs from '../components/core/WhyUs';
import Community from '../components/core/Community';
import Feedbacks from '../components/core/Feedbacks';
import Faq from '../components/core/Faq';
import Footer from '../components/partials/Footer';
import AboutUs from '../components/core/AboutUs';

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
