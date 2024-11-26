import React, { Suspense } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Loader } from '@components/shared';
import { HelpSection } from '@components/features';
import { useTranslations } from 'next-intl';


export const metadata: Metadata = {
    title: "FAQ | Neyron AI",
    description: "Neyron AI is an innovative platform designed to bring data scientists and Al enthusiasts together to compete in data-driven challenges.",
};


const FAQ: React.FC = () => {
    const t = useTranslations();

    return (
        <Suspense fallback={<Loader />}>
            <div className="min-h-screen flex flex-col">
                <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
                {/* Breadcrumb */}
                <main id="main-content" className="container mx-auto flex-grow px-5 py-10 md:px-0 md:py-[6rem]">
                    <nav className="text-sm flex justify-start items-center text-gray-600 space-x-3">
                        <Link href="/" className="hover:text-purple">{t('main.mainPage')}</Link>
                        <span className="text-lg">&gt;</span>
                        <span>{t('navbar.faq')}</span>
                    </nav>
                    <h1 className="ai-section__title ai-highlight text-center text-4xl font-semi leading-[3rem] tracking-tighter md:text-6xl md:leading-[4.5rem]">
                        {t('navbar.faq')}
                    </h1>
                    <HelpSection />
                </main>
            </div>
        </Suspense>
    );
};

export default FAQ;
