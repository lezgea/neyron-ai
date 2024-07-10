'use client';

import React, { useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Explore from '../components/core/Explore';
import BeginAdventure from '../components/core/BeginAdventure';
import WhyUs from '../components/core/WhyUs';
import Community from '../components/core/Community';
import Feedbacks from '../components/core/Feedbacks';
import Faq from '../components/core/Faq';
import Footer from '../components/partials/Footer';
import AboutUs from '../components/core/AboutUs';
import { FullpageApiProvider } from 'src/contexts';


const HomePage: React.FC = () => {
    const fullpageApiRef = useRef<any>(null);


    return (
        <main className='main main--home'>
            <FullpageApiProvider>
                <ReactFullpage
                    navigation
                    scrollingSpeed={1000}
                    fadingEffect={'sections'}
                    normalScrollElements={'.ai-testimonials'}
                    render={({ fullpageApi }) => {
                        if (fullpageApi) {
                            fullpageApiRef.current = fullpageApi;
                        }

                        return (
                            <ReactFullpage.Wrapper>
                                <div className='section section-1' id='explore'>
                                    <Explore />
                                </div>
                                <div className='section section-2' id='courses'>
                                    <BeginAdventure />
                                </div>
                                <div className='section section-3' id='about'>
                                    <AboutUs />
                                </div>
                                <div className='section'>
                                    <WhyUs />
                                </div>
                                <div className='section'>
                                    <Community />
                                </div>
                                <div className='section'>
                                    <Feedbacks />
                                </div>
                                <div className='section'>
                                    <Faq mainPage={true} />
                                </div>
                                <div className='section fp-auto-height'>
                                    <Footer />
                                </div>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </FullpageApiProvider>
        </main>
    );
};

export default HomePage;
