"use client";

import { AuthModal } from '@components/shared';
import CompetitionsSkeleton from '@components/shared/skeletons/competitions-skeleton';
import { RootState } from '@store/store';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CourseItem from '../course-item';
import { useLazyGetCoursesQuery } from '@api/courses-api';


const TEST_COURSES = [
    {
        id: 1,
        name: 'Test Course 1',
        description: 'This chapter gives you a basic overview of Artificial Intelligence, its key concepts, and technologies.',
        image: {
            id: 1,
            filePath: '',
        }
    },
    {
        id: 2,
        name: 'Test Course 2',
        description: 'This chapter gives you a basic overview of Artificial Intelligence, its key concepts, and technologies.',
        image: {
            id: 1,
            filePath: '',
        }
    },
    {
        id: 3,
        name: 'Test Course 3',
        description: 'This chapter gives you a basic overview of Artificial Intelligence, its key concepts, and technologies.',
        image: {
            id: 1,
            filePath: '',
        }
    },
    {
        id: 4,
        name: 'Test Course 4',
        description: 'This chapter gives you a basic overview of Artificial Intelligence, its key concepts, and technologies.',
        image: {
            id: 1,
            filePath: '',
        }
    },
    {
        id: 5,
        name: 'Test Course 5',
        description: 'This chapter gives you a basic overview of Artificial Intelligence, its key concepts, and technologies.',
        image: {
            id: 1,
            filePath: '',
        }
    },
]

interface ICoursesTable {
    lng?: string,
    t?: (val: string) => string,
}

export const CoursesTable: React.FC<ICoursesTable> = () => {
    const t = useTranslations();
    const lng = useLocale();
    const router = useRouter();

    const { isAuthenticated } = useSelector((state: RootState) => state.user);
    const { loading: coursesLoading } = useSelector((state: RootState) => state.courses);

    const [showAuthModal, setShowAuthModal] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [triggerGetCourses, { data: courses, error, isLoading }] = useLazyGetCoursesQuery();

    const itemsPerPage = 6;

    const CATEGORY_LABELS: Record<number, string> = {
        1: t('all'),
        2: "Environment",
        3: "Education",
        4: "Oil & Industry",
        5: "Technology",
    };


    const onClickCompetition = (e: any) => {
        if (isAuthenticated) {
            e.stopPropagation()
        } else {
            setShowAuthModal(true)
        }
    }


    React.useEffect(() => {
        triggerGetCourses({
            lang: lng
        }).then((response) => {
            // if (response?.data?.totalCount) {
            //     setTotalPages(Math.ceil(response.data.totalCount / itemsPerPage));
            // } else {
            //     setTotalPages(1)
            // }
        });
    }, [lng]);


    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    if (coursesLoading || isLoading) {
        return <CompetitionsSkeleton />;
    }


    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {TEST_COURSES.map((item, i) => (
                    <CourseItem
                        key={i}
                        {...item}
                    // onClick={onClickCompetition}
                    />
                ))}
            </div>

            {/* Pagination Controls */
                // !!competitionsData?.totalCount &&
                // <div className="flex justify-between items-center mt-6">
                //     <button
                //         onClick={handlePreviousPage}
                //         disabled={currentPage === 0}
                //         className={`px-4 py-2 rounded-md ${currentPage === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-primaryDark'}`}
                //     >
                //         {t('previous')}
                //     </button>
                //     <span>{t('page')} {currentPage + 1} of {totalPages}</span>
                //     <button
                //         onClick={handleNextPage}
                //         disabled={currentPage >= totalPages - 1}
                //         className={`px-4 py-2 rounded-md ${currentPage >= totalPages - 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary text-white hover:bg-primaryDark'}`}
                //     >
                //         {t('next')}
                //     </button>
                // </div>
            }
            {/* <AuthModal
                visible={showAuthModal}
                onClose={() => setShowAuthModal(false)}
            /> */}
        </>
    );
};
