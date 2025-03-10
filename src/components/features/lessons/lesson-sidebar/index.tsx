"use client"

import React from 'react';
import { useParams } from 'next/navigation';
import { useLazyGetChaptersQuery } from '@api/chapters-api';
import { useLazyGetLessonsQuery } from '@api/lessons-api';
import { ArrowDownIcon, MedalGrayIcon, MedalIcon } from '@assets/icons';
import { useDispatch } from 'react-redux';
import { setSelectedLessonId } from '@slices/lessons-slice';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { setSelectedChapterId } from '@slices/chapters-slice';


export const LessonSidebar = () => {
    const { courseId } = useParams();

    const [lang, setLang] = React.useState<string>('en');

    const dispatch = useDispatch();

    const { selectedChapterId } = useSelector((state: RootState) => state.chapters);
    const { selectedLessonId } = useSelector((state: RootState) => state.lessons);

    const [triggerGetChapters, { data: chaptersData, error, isLoading }] = useLazyGetChaptersQuery();
    const [triggerGetLessons, { data: lessons, isLoading: isLessonsLoading }] = useLazyGetLessonsQuery();


    async function getLessons() {
        try {
            let response = await triggerGetLessons({ chapterId: Number(selectedChapterId), lang: lang, dto: {} }).unwrap();
            dispatch(setSelectedLessonId(Number(response?.data?.content[0]?.id)));
        } catch (err: any) {
            console.log('Error while fetching lessons list: ', err)
        }
    }


    React.useEffect(() => {
        triggerGetChapters({
            courseId: Number(courseId),
            lang: lang,
            dto: { page: 0, size: 10 },
        }).then(() => { });
    }, [lang, courseId, triggerGetChapters]);


    React.useEffect(() => {
        if (selectedChapterId) getLessons()
    }, [selectedChapterId])



    return (
        <div className='flex flex-col gap-2 max-w-[300px] min-w-[300px]'>
            {
                chaptersData?.data?.content?.map((chapter, i) =>
                    <div key={i} className='flex flex-col cursor-pointer bg-white rounded-lg shadow-sm overflow-hidden select-none'>
                        <div
                            className={`flex py-2 px-3 group hover:gray-100 duration-300 ease-in-out transform`}
                            onClick={() => dispatch(setSelectedChapterId(chapter.id || 0))}
                        >
                            <div className='w-full flex flex-col'>
                                <div className={`text-sm text-gray-400`}>
                                    Chapter
                                    <span className={`text-primaryBlue font-semibold ml-1`}>
                                        {i + 1}
                                    </span>
                                </div>
                                <div className={`text-sm font-semibold truncate-text-1 group-hover:text-purpleDark text-[#2C2C30]`}>
                                    {chapter.name}
                                </div>
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                {i == 0 ? <MedalGrayIcon /> : <MedalIcon />}
                                <ArrowDownIcon className={`transition-transform ${selectedChapterId === chapter.id ? 'animate-rotateDown' : 'animate-rotateUp'}`} />
                            </div>
                        </div>

                        {/* ~~~ Lessons list */
                            selectedChapterId == chapter.id &&
                            <div className='flex flex-col py-2 px-3 gap-2'>
                                {
                                    isLessonsLoading
                                        ?
                                        <div>Loading..</div>
                                        :
                                        lessons?.data?.content?.map((lesson, j) =>
                                            <div
                                                key={j}
                                                onClick={() => dispatch(setSelectedLessonId(lesson.id || 0))}
                                                className={`w-full flex gap-2 text-[#515151] text-sm items-center justify-between px-3 py-2.5 hover:text-white hover:bg-primaryBlue rounded-lg group duration-300 ease-in-out transform cursor-pointer truncate-text ${selectedLessonId == lesson.id ? 'bg-primaryBlue text-white' : 'bg-[#F6F7FA]'}`}
                                            >
                                                <strong className={`mr-1 group-hover:text-white duration-300 ease-in-out transform ${selectedLessonId == lesson.id ? 'text-white' : 'text-primaryBlue'}`}>{j + 1}</strong> {lesson.name}
                                            </div>
                                        )
                                }
                            </div>
                        }
                    </div>
                )
            }
        </div>
    )
}