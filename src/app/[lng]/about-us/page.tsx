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
                    <h1 className="text-[32px] md:text-[2.3rem] font-medium">{t('aboutUs')}</h1>
                    {/* Breadcrumb */}
                    <nav className="text-sm flex justify-start items-center text-gray-600 space-x-3">
                        <Link href="/" className="hover:text-primaryLight">{t('mainPage')}</Link>
                        <span className="text-lg">&gt;</span>
                        <span>{t('aboutUs')}</span>
                    </nav>
                    <AboutSection description={t('aboutUsText1')} />
                    <AboutSection description={t('aboutUsText2')} />
                    <AboutSection description={t('aboutUsText3')} />
                </main>
            </div>
        </Suspense>
    );
};

export default AboutUs;
