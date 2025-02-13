import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { LessonsTable } from '@components/features/lessons';


export const metadata: Metadata = {
    title: "Lessons | Neyron AI",
    description: "Neyron AI is an innovative platform designed to bring data scientists and AI enthusiasts together to compete in data-driven challenges.",
};


const Lessons: React.FC = () => {
    const t = useTranslations();
    const lng = useLocale();

    return (
        <div className="min-h-screen flex flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
            <main id="main-content" className="container mx-auto flex-grow px-5 py-10 md:px-0 md:py-[6rem]">
                {/* Breadcrumb */}
                <nav className="text-sm flex justify-start items-center text-gray-600 space-x-3">
                    <Link href="/" className="hover:text-purple">{t('main.mainPage')}</Link>
                    <span className="text-lg">&gt;</span>
                    <Link href={`/${lng}/courses`} className="hover:text-purple">{t('navbar.courses')}</Link>
                    <span className="text-lg">&gt;</span>
                    <Link href={`/${lng}/courses`} className="hover:text-purple">{t('navbar.chapters')}</Link>
                    <span className="text-lg">&gt;</span>
                    <span>{t('navbar.lessons')}</span>
                </nav>
                {/* <section className="container mx-auto w-full">
                    <div className="flex flex-col text-center justify-between items-center w-full">
                        <h2 className="text-[32px] md:text-[2.3rem] font-medium">Introduction to AI</h2>
                        <p className="text-md text-gray-700">This lesson gives you a basic overview of Artificial Intelligence, its key concepts, and technologies.</p>
                    </div>
                </section> */}
                <section className="container mx-auto w-full mt-10">
                    <LessonsTable />
                </section>
            </main>
        </div>
    );
};

export default Lessons;
