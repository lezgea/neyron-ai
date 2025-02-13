"use client";

import CompetitionsSkeleton from '@components/shared/skeletons/competitions-skeleton';
import { RootState } from '@store/store';
import { useLocale, useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLazyGetLessonsQuery } from '@api/lessons-api';
import LessonItem from '../lesson-item';


interface ILessonsTable {
    lng?: string,
    t?: (val: string) => string,
}

export const LessonsTable: React.FC<ILessonsTable> = () => {
    const t = useTranslations();
    const lng = useLocale();
    const router = useRouter();
    const { chapterId } = useParams();

    const { loading: coursesLoading } = useSelector((state: RootState) => state.courses);

    const [showAuthModal, setShowAuthModal] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [triggerGetLessons, { data: lessons, error, isLoading }] = useLazyGetLessonsQuery();

    const itemsPerPage = 6;

    async function getLessons() {
        try {
            triggerGetLessons({
                lang: lng,
                chapterId: chapterId as string,
                dto: {},
            }).unwrap()
        } catch (err: any) {
            console.log('Error: ', err)
        }
    }

    React.useEffect(() => {
        if (chapterId)
            getLessons();
    }, [chapterId]);


    const onPageChange = (page: number) => {
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }
    };


    if (coursesLoading || isLoading) {
        return <CompetitionsSkeleton />;
    }


    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {lessons?.data?.content.map((item, i) => (
                    <LessonItem
                        key={i}
                        {...item}
                        onClick={() => { }}
                    // onClick={onClickCompetition}
                    />
                ))}
            </div>
        </>
    );
};
