import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { LessonsTable } from '@components/features/lessons';
import Image from 'next/image';
import LessonInfoContent from '@components/features/lessons/lesson-info-content';


export const metadata: Metadata = {
    title: "Lessons | Neyron AI",
    description: "Neyron AI is an innovative platform designed to bring data scientists and AI enthusiasts together to compete in data-driven challenges.",
};


const Lessons: React.FC = () => {
    const t = useTranslations();
    const lng = useLocale();

    return (
        <div className="min-h-screen flex flex-col bg-[#F6F7FA]">
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
            <main id="main-content" className="flex-grow px-5 py-10 md:px-0 md:py-[5rem]">
                {/* Breadcrumb */}
                <nav className="container mx-auto text-sm flex justify-start items-center text-gray-600 space-x-3">
                    <Link href="/" className="hover:text-purple">{t('main.mainPage')}</Link>
                    <span className="text-lg">&gt;</span>
                    <Link href={`/${lng}/courses`} className="hover:text-purple">{t('navbar.courses')}</Link>
                    <span className="text-lg">&gt;</span>
                    <Link href={`/${lng}/courses`} className="hover:text-purple">{t('navbar.chapters')}</Link>
                    <span className="text-lg">&gt;</span>
                    <span>{t('navbar.lessons')}</span>
                </nav>
                <LessonInfoContent />
            </main>
        </div>
    );
};

export default Lessons;
