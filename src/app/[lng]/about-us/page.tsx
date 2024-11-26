import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { Loader } from '@components/shared';
import Link from 'next/link';
import { AboutSection } from '@components/features/about';
import { useTranslations } from 'next-intl';


export const metadata: Metadata = {
    title: "About Us | Neyron AI",
    description: "Neyron AI is an innovative platform designed to bring data scientists and Al enthusiasts together to compete in data-driven challenges.",
};


const AboutUs: React.FC = () => {
    const t = useTranslations();

    return (
        <Suspense fallback={<Loader />}>
            <div className="min-h-screen flex flex-col">
                <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
                <main id="main-content" className="container mx-auto flex-grow px-5 py-10 md:px-0 md:py-[6rem]">
                    {/* Breadcrumb */}
                    <nav className="text-sm flex justify-start items-center text-gray-600 space-x-3">
                        <Link href="/" className="hover:text-purple">{t('main.mainPage')}</Link>
                        <span className="text-lg">&gt;</span>
                        <span>{t('main.aboutHead')}</span>
                    </nav>
                    <div className="ai-section flex flex-col items-center justify-center text-center px-40 pt-20 gap-10">
                        <h1 className="ai-section__title ai-highlight text-4xl font-semi leading-[3rem] tracking-tighter md:text-6xl md:leading-[4.5rem]">
                            Welcome to <span>Neyron.ai</span> - Your AI Learning Companion
                        </h1>

                        <div className="ai-highlight flex flex-col gap-5">
                            <p>
                                At <span>Neyron.ai</span>, our mission is to make Artificial Intelligence not just
                                understandable but also enjoyable. Whether you're an AI enthusiast or a seasoned
                                professional, we've created an environment where AI is accessible to everyone.
                            </p>
                            <div>
                                <h4 className='text-xl font-semi mb-2'>Learning, Gamified:</h4>
                                <p>
                                    Say goodbye to the ordinary. Our gamified approach transforms education into an irresistibly
                                    addictive adventure. Because learning should be as exciting as the subject itself, right?
                                </p>
                            </div>
                            <div>
                                <h4 className='text-xl font-semi mb-2'>Smart Learning, Simplified:</h4>
                                <p>
                                    Demystify AI effortlessly! Dive into interactive chapters, ace quizzes, and earn
                                    points—ranking up your journey. With various ways to score, your AI adventure is not just
                                    educational but also fun and rewarding!
                                </p>
                            </div>
                            <div>
                                <h4 className='text-xl font-semi mb-2'>Ready to Redefine Your AI Journey?</h4>
                                <p>
                                    Join <span>Neyron.ai</span> — where learning is not just friendly, engaging, and downright
                                    awesome, but also designed for everyone. Let's embark on this AI adventure together!
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Suspense>
    );
};

export default AboutUs;
