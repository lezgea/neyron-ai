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
import { useFullpageApi } from 'src/contexts';


const HomePage: React.FC = () => {
    const fullpageApiRef = useFullpageApi();

    return (
        <main className='main main--home' style={{ scrollBehavior: 'smooth' }}>
            <ReactFullpage
                navigation
                scrollingSpeed={1000}
                fadingEffect={'sections'}
                normalScrollElements={'.ai-testimonials'}
                credits={{ enabled: true, label: 'My Custom Credits', position: 'right' }} // Add the credits property here
                render={({ fullpageApi }) => {
                    if (!fullpageApiRef.current) {
                        fullpageApiRef.current = fullpageApi;
                    }

                    return (
                        <ReactFullpage.Wrapper>
                            <div className='section section-1'>
                                <Explore />
                            </div>
                            <div className='section section-2'>
                                <BeginAdventure />
                            </div>
                            <div className='section section-3'>
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
        </main>
    );
};

export default HomePage;
