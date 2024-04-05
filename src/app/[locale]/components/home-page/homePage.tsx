'use client';
import AboutUs from './aboutUs';
import BeginAdventure from './beginAdventure';
import Community from './community';
import Explore from './Explore';
import Faq from './faq';
import Feedbacks from './feedbacks';
import WhyUs from './whyUs';
// @ts-ignore
import ReactFullpage, { FullPageApi } from '@fullpage/react-fullpage';
import Footer from '../footer/footer';
import { Grid } from '@mui/material';

const HomePage = () => {
  return (
    <>
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
    </>
  );
  // return (
  //   <main className="main main--home">
  //     <div className="ai-stack">
  //       <div className="ai-stack__card">
  //         <Explore />
  //       </div>
  //       <div className="ai-stack__card">
  //         <BeginAdventure />
  //       </div>
  //       <div className="ai-stack__card" style={{ position: 'relative' }}>
  //         <div className="container">
  //           <Grid container>
  //             <Grid item xs={6}>
  //               <div className="sections-wrapper">
  //                 <AboutUs />
  //                 <WhyUs />
  //               </div>
  //             </Grid>
  //             <Grid item xs={6}>
  //               {RiveComponent && <RiveComponent className="section__graphic section__graphic--about" />}
  //             </Grid>
  //           </Grid>
  //         </div>
  //       </div>
  //       <div className="ai-stack__card">
  //         <Community />
  //       </div>
  //       <div className="ai-stack__card">
  //         <Feedbacks />
  //       </div>
  //       <div className="ai-stack__card ai-stack__card--auto">
  //         <Faq mainPage={true} />
  //       </div>
  //     </div>
  //   </main>
  // );
};

export default HomePage;
