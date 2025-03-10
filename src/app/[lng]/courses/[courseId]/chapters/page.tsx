"use client"

import React from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ChaptersTable } from '@components/features';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useLazyGetCoursesInfoQuery } from '@api/courses-api';


// export const metadata: Metadata = {
//     title: "Chapters | Neyron AI",
//     description: "Neyron AI is an innovative platform designed to bring data scientists and AI enthusiasts together to compete in data-driven challenges.",
// };


const Chapters: React.FC = () => {
    const t = useTranslations();
    const lng = useLocale();

    const { courseId } = useParams();
    const [triggerGetCourseInfo, { data: courseInfo }] = useLazyGetCoursesInfoQuery();

    const imageUrl = React.useMemo(
        () => (
            courseInfo?.data?.image?.filePath
                ? `https://api.neyron.ai/v1/files/streams/${courseInfo?.data?.image?.filePath}`
                : "/svg/chapters-banner.svg"
        ),
        [courseInfo?.data?.image]
    );

    async function getCourseInfo() {
        try {
            await triggerGetCourseInfo({ id: Number(courseId), lang: lng }).unwrap();
        } catch (err: any) {
            console.log('Error while fetching course info: ', err)
        }
    }


    React.useEffect(() => {
        if (courseId) getCourseInfo()
    }, [courseId])


    return (
        <div className="min-h-screen flex flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
            <main id="main-content" className="flex-grow px-5 py-10 md:px-0 md:py-[5rem]">
                {/* Breadcrumb */}
                <nav className="container mx-auto text-sm flex justify-start items-center text-gray-600 space-x-3">
                    <Link href="/" className="hover:text-purple">{t('main.mainPage')}</Link>
                    <span className="text-lg">&gt;</span>
                    <Link href={`/${lng}/courses`} className="hover:text-purple">{t('navbar.courses')}</Link>
                    <span className="text-lg">&gt;</span>
                    <span>{t('navbar.chapters')}</span>
                </nav>
                <section className="flex flex-col items-center jusitfy-center h-[12rem] md:h-[14rem] w-full relative">
                    <div className="relative flex w-screen mt-3">
                        <div className='absolute w-full h-[12rem] md:h-[14rem] backdrop-blur-md' />
                        <Image
                            src={imageUrl}
                            alt="Neyron Chapter Banner"
                            height={200}
                            width={800}
                            className="w-full h-[12rem] md:h-[14rem] object-cover"
                        />
                    </div>
                    <div className="container mx-auto flex flex-col justify-end items-center w-full absolute h-full pb-6 gap-3">
                        <h2 className="text-[32px] text-center md:text-[2.3rem] font-medium text-white">{courseInfo?.data?.name}</h2>
                        <p className="text-sm text-white font-light text-center max-w-[80%]">{courseInfo?.data?.description}</p>
                    </div>
                </section>
                <section className="container mx-auto w-full mt-10">
                    <ChaptersTable />
                </section>
            </main>
        </div>
    );
};

export default Chapters;
