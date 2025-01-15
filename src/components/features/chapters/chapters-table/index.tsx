"use client";

import CompetitionsSkeleton from '@components/shared/skeletons/competitions-skeleton';
import { RootState } from '@store/store';
import { useLocale, useTranslations } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLazyGetChaptersQuery } from '@api/chapters-api';


interface IChaptersTable {
    lng?: string,
    t?: (val: string) => string,
}

export const ChaptersTable: React.FC<IChaptersTable> = () => {
    const t = useTranslations();
    const lng = useLocale();
    const router = useRouter();
    const { courseId } = useParams();

    const { isAuthenticated } = useSelector((state: RootState) => state.user);
    const { loading: coursesLoading } = useSelector((state: RootState) => state.courses);

    const [showAuthModal, setShowAuthModal] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [triggerGetChapters, { data: chapters, error, isLoading }] = useLazyGetChaptersQuery();

    const itemsPerPage = 6;


    React.useEffect(() => {
        triggerGetChapters({
            lang: lng,
            courseId: courseId as string,
        }).then((response) => {

        });
    }, [lng]);


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
                {/* {TEST_CHAPTERS.map((item, i) => (
                    <ChapterItem
                        key={i}
                        {...item}
                    // onClick={onClickCompetition}
                    />
                ))} */}
            </div>
        </>
    );
};
