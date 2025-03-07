"use client"

import React from 'react';
import { LessonSidebar } from '../lesson-sidebar';

// import { useParams } from 'react-router-dom';
// import LanguageSelect from '@components/shared/language-select';
// import { useDeleteLessonMutation, useLazyGetLessonInfoQuery } from '@api/lessons-api';
// import { LessonSidebar } from '../lesson-sidebar';
// import { EditIcon, TrashIcon } from '@assets/icons';
// import { LessonUpdateModal } from '../lesson-update-modal';


interface ILessonInfoProps {

}


const LessonInfoContent: React.FC<ILessonInfoProps> = () => {
    // const { id, lessonId } = useParams();

    const [lang, setLang] = React.useState<string>('en');
    const [showLessonUpdateModal, setLessonUpdateModal] = React.useState(false);
    const [lessonIdToUpdate, setLessonIdToUpdate] = React.useState<number>(0);

    // const [triggerGetLessonInfo, { data: lessonInfo }] = useLazyGetLessonInfoQuery();
    // const [deleteLesson] = useDeleteLessonMutation();

    // let isTranslated = languages[lang];

    // const imageUrl = React.useMemo(
    //     () => (
    //         lessonInfo?.data?.contentFile?.filePath
    //             ? `https://api.neyron.ai/v1/files/streams/${lessonInfo?.data?.contentFile?.filePath}`
    //             : "/images/svg/nolesson.svg"
    //     ),
    //     [lessonInfo?.data?.contentFile]
    // );

    async function getLessonInfo() {
        try {
            // await triggerGetLessonInfo({ id: Number(lessonId), lang: lang })
        } catch (err: any) {
            console.log('Error while fetching lesson info: ', err)
        }
    }


    // React.useEffect(() => {
    //     if (lessonId) getLessonInfo();
    // }, [lessonId])


    return (
        <div className='flex container mx-auto min-h-screen gap-5 py-5'>
            <LessonSidebar />
            <div className='w-full'>
                <div className="flex gap-2 w-full text-2xl font-semibold items-center bg-primaryBlue px-20 py-3">
                    <span className='text-[#222223]'>Lesson 1.</span>
                    <span className='text-white'>Test Lesson Name</span>
                </div>

                <div className='flex flex-col gap-5 py-5'>
                    {/* <div className={`relative overflow-hidden rounded-xl`}>
                        <img
                            src={imageUrl}
                            height="300"
                            width="300"
                            className="w-full transition-transform duration-300 ease-in-out transform group-hover:scale-110 min-h-[20rem] max-h-[20rem] object-cover"
                            alt={lessonInfo?.data?.name}
                        />
                    </div> */}
                    {/* <p className='text-sm text-primaryDark'>{lessonInfo?.data?.description}</p> */}
                    {/* <div dangerouslySetInnerHTML={{ __html: lessonInfo?.data?.textContent || '' }}></div> */}
                </div>
            </div>
        </div>
    );
};

export default LessonInfoContent;
