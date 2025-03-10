"use client";

import CompetitionsSkeleton from '@components/shared/skeletons/competitions-skeleton';
import { RootState } from '@store/store';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CourseItem from '../course-item';
import { useLazyGetCoursesQuery } from '@api/courses-api';
import { AuthModal, NoData, TablePagination } from '@components/shared';


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
    const [currentPage, setCurrentPage] = React.useState(0);
    const [totalPages, setTotalPages] = React.useState(1);
    const [totalElems, setTotalElems] = React.useState(1);
    const [triggerGetCourses, { data: courses, error, isLoading }] = useLazyGetCoursesQuery();

    let itemsPerPage = 6

    const onClickCourse = (e: any) => {
        if (isAuthenticated) {
            e.stopPropagation()
        } else {
            setShowAuthModal(true)
        }
    }


    React.useEffect(() => {
        triggerGetCourses({
            lang: lng,
            dto: { page: currentPage, size: itemsPerPage },
        }).then((response) => {
            if (response?.data?.data?.totalElements) {
                setTotalPages(Math.ceil(response?.data?.data?.totalElements / itemsPerPage));
                setTotalElems(response?.data?.data?.totalElements);
            } else {
                setTotalPages(1)
            }
        });
    }, [lng, currentPage, triggerGetCourses]);


    const onPageChange = (page: number) => {
        if (page >= 0 && page < totalPages) {
            setCurrentPage(page);
        }
    };


    if (coursesLoading || isLoading) {
        return <CompetitionsSkeleton />;
    }

    if (!isLoading && !courses?.data.content.length) {
        return (
            <div className="flex">
                <NoData />
            </div>
        )
    }


    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {courses?.data?.content?.filter(item => item.published).map((item, i) => (
                    <CourseItem
                        key={i}
                        {...item}
                        onClick={onClickCourse}
                    />
                ))}
            </div>
            <TablePagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />

            <AuthModal
                visible={showAuthModal}
                onClose={() => setShowAuthModal(false)}
            />
        </>
    );
};
