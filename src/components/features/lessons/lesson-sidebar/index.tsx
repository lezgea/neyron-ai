"use client"

import React from 'react';
import { useParams } from 'next/navigation';
import { useLazyGetChaptersQuery } from '@api/chapters-api';
import { useLazyGetLessonsQuery } from '@api/lessons-api';
import { ArrowUpIcon, MedalGrayIcon, MedalIcon } from '@assets/icons';


export const LessonSidebar = () => {
    const { courseId } = useParams();

    const [lang, setLang] = React.useState<string>('en');
    const [lessonsVisible, showLessons] = React.useState<boolean>(false);
    const [selectedChapterId, setSelectedChapterId] = React.useState<number | null>(null);
    const [selectedLessonId, setSelectedLessonId] = React.useState<number | null>(null);

    const [triggerGetChapters, { data: chaptersData, error, isLoading }] = useLazyGetChaptersQuery();
    const [triggerGetLessons, { data: lessons, isLoading: isLessonsLoading }] = useLazyGetLessonsQuery();


    async function getLessons() {
        try {
            await triggerGetLessons({ chapterId: Number(selectedChapterId), lang: lang, dto: {} }).unwrap();
        } catch (err: any) {
            console.log('Error while fetching lessons list: ', err)
        }
    }


    React.useEffect(() => {
        triggerGetChapters({
            courseId: Number(courseId),
            lang: lang,
            dto: { page: 0, size: 10 },
        }).then((response) => {
            // if (response?.data?.data?.totalElements) {
            //     setTotalPages(Math.ceil(response?.data?.data?.totalElements / itemsPerPage));
            //     setTotalElems(response?.data?.data?.totalElements);
            // } else {
            //     setTotalPages(1)
            // }
        });
    }, [lang, courseId, triggerGetChapters]);


    React.useEffect(() => {
        if (selectedChapterId) getLessons()
    }, [selectedChapterId])


    return (
        <div className='flex flex-col gap-2 max-w-[300px] min-w-[300px]'>
            {
                chaptersData?.data?.content?.map((chapter, i) =>
                    <div className='flex flex-col cursor-pointer bg-white rounded-lg shadow-sm overflow-hidden'>
                        <div
                            className='flex hover:bg-primaryBlue py-2 px-3 chapter-group duration-300 ease-in-out transform'
                            onClick={() => setSelectedChapterId(chapter.id)}
                        >
                            <div className='w-full flex flex-col'>
                                <div className='text-sm text-gray-400'>Chapter <span className='text-primaryBlue font-semibold'>{i + 1}</span></div>
                                <div className='text-sm font-semibold truncate-text-1 chapter-group-hover:text-primaryBlue'>{chapter.name}</div>
                            </div>
                            <div className='flex items-center justify-center gap-2'>
                                {i == 0 ? <MedalGrayIcon /> : <MedalIcon />}
                                <ArrowUpIcon />
                            </div>
                        </div>

                        {/* ~~~ Lessons list */
                            selectedChapterId == chapter.id &&
                            <div className='flex flex-col py-2 px-3 gap-2'>
                                {
                                    isLessonsLoading && <div>Loading..</div>
                                }
                                {
                                    !!lessons?.data?.content?.length && !isLessonsLoading &&
                                    lessons?.data?.content?.map((lesson, j) =>
                                        <div
                                            // onClick={() => navigate(`/content/${courseId}/chapters/${id}/${lesson.id}`)}
                                            className='w-full flex gap-2 text-[#515151] text-sm items-center justify-between px-3 py-2.5 bg-[#F6F7FA] hover:text-white hover:bg-primaryBlue rounded-lg group duration-300 ease-in-out transform cursor-pointer truncate-text'
                                        >
                                            <strong className='text-primaryBlue mr-1 group-hover:text-white duration-300 ease-in-out transform'>{j + 1}</strong> {lesson.name}
                                        </div>
                                    )
                                }
                                {/* <button
                                    onClick={() => setLessonCreateModal(true)}
                                    className='w-full flex gap-2 items-center px-3 py-2 rounded-lg border-2 border-dashed group hover:border-primary hover:border-solid duration-300 ease-in-out transform'
                                >
                                    <PlusIcon />
                                    <span className='text-gray-400 group-hover:text-primary'>Add lesson</span>
                                </button>
                                <button className='w-full flex gap-2 items-center px-3 py-2 rounded-lg border-2 border-dashed group hover:border-primary hover:border-solid duration-300 ease-in-out transform'>
                                    <PlusIcon />
                                    <span className='text-gray-400 group-hover:text-primary'>Add quiz</span>
                                </button> */}
                            </div>
                        }
                    </div>
                )
            }
        </div>
    )
}