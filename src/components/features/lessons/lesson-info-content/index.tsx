"use client"

import React from 'react';
import { LessonSidebar } from '../lesson-sidebar';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { useLazyGetLessonInfoQuery } from '@api/lessons-api';


interface ILessonInfoProps {

}


const LessonInfoContent: React.FC<ILessonInfoProps> = () => {
    const [lang, setLang] = React.useState<string>('en');

    const { selectedLessonId } = useSelector((state: RootState) => state.lessons);
    const [triggerGetLessonInfo, { data: lessonInfo }] = useLazyGetLessonInfoQuery();


    async function getLessonInfo() {
        try {
            await triggerGetLessonInfo({ id: Number(selectedLessonId), lang: lang })
        } catch (err: any) {
            console.log('Error while fetching lesson info: ', err)
        }
    }


    React.useEffect(() => {
        if (selectedLessonId) getLessonInfo();
    }, [selectedLessonId])


    return (
        <div className='flex container mx-auto min-h-screen gap-5 py-5'>
            <LessonSidebar />

            <div className='w-full rounded-lg overflow-hidden'>
                <div className="flex gap-2 w-full text-xl font-semibold items-center bg-primaryBlue px-10 py-3.5">
                    <span className='text-[#222223]'>Lesson 1.</span>
                    <span className='text-white'>{lessonInfo?.data?.name}</span>
                </div>

                <div className='py-5 px-10 bg-white'>
                    <div dangerouslySetInnerHTML={{ __html: lessonInfo?.data?.textContent || '' }}></div>
                </div>
            </div>
        </div>
    );
};

export default LessonInfoContent;
