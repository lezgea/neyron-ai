import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { CoursesTable } from '@components/features/courses';
import Image from 'next/image';


export const metadata: Metadata = {
    title: "Courses | Neyron AI",
    description: "Neyron AI is an innovative platform designed to bring data scientists and AI enthusiasts together to compete in data-driven challenges.",
};


const Courses: React.FC = () => {
    const t = useTranslations();

    return (
        <div className="min-h-screen flex flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
            <main id="main-content" className="flex-grow px-5 py-10 md:px-0 md:py-[5rem]">
                {/* Breadcrumb */}
                <nav className="container mx-auto text-sm flex justify-start items-center text-gray-600 space-x-3">
                    <Link href="/" className="hover:text-purple">{t('main.mainPage')}</Link>
                    <span className="text-lg">&gt;</span>
                    <span>{t('footer.courses')}</span>
                </nav>
                <section className="flex flex-col items-center jusitfy-center h-[12rem] md:h-[14rem] w-full relative">
                    <div className="flex w-screen mt-3">
                        <Image
                            src={"/svg/courses-banner.svg"}
                            alt="Neyron Courses Banner"
                            height={200}
                            width={800}
                            className="w-full h-[12rem] md:h-[14rem] object-cover"
                        />
                    </div>
                    <div className="container mx-auto flex flex-col justify-end items-center w-full absolute h-full pb-6 gap-3">
                        <h2 className="text-[32px] text-center md:text-[2.3rem] font-medium text-white">Let's Learn AI Together!</h2>
                        <p className="text-sm text-white font-light text-center max-w-[80%]">Join our AI courses and explore machine learning, deep learning, and data science with hands-on projects. Whether you're a beginner or an advanced learner, gain the skills to build intelligent systems and stay ahead in the AI revolution!</p>
                    </div>
                </section>
                <section className="container mx-auto w-full mt-10">
                    <CoursesTable />
                </section>
            </main>
        </div>
    );
};

export default Courses;
