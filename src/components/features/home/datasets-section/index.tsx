"use client";

import { useLazyGetCompetitionsQuery } from '@api/competition-api';
import { useLazyGetAllDatasetsQuery } from '@api/datasets-api';
import { NoData } from '@components/shared';
import DatasetItem from '@components/shared/dataset-item';
import CompetitionsSkeleton from '@components/shared/skeletons/competitions-skeleton';
import { RootState } from '@store/store';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';


export const DatasetsSection: React.FC = () => {
    const lng = useLocale();
    const t = useTranslations();

    const { loading: datasetsLoading } = useSelector((state: RootState) => state.datasets);
    const [triggerGetDatasets, { data: datasetsData, error, isLoading }] = useLazyGetAllDatasetsQuery();


    React.useEffect(() => {
        triggerGetDatasets({
            data: { page: 0, count: 6 },
        });
    }, [triggerGetDatasets]);

    if (datasetsLoading)
        return <CompetitionsSkeleton />

    if (!datasetsLoading && !isLoading && !datasetsData?.userDatasets?.length) {
        return (
            <div>
                <h2 className="text-[32px] md:text-[2.3rem]">Datasets</h2>
                <p className="text-md text-gray-700">{t('competitionDescription')}</p>
                <NoData />
            </div>
        )
    }

    return (
        <>
            <div className="flex justify-between">
                <div className="w-full space-y-3">
                    <h2 className="text-[32px] md:text-[2.3rem]">{t('datasets')}</h2>
                    <p className="text-md text-gray-700">{t('competitionDescription')}</p>
                </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {datasetsData?.userDatasets?.map((item, i) => (
                    <DatasetItem key={i} {...item} />
                ))}
            </div>
            <div className="flex justify-center">
                <Link href={`/${lng}/datasets`} className="inline-flex w-auto text-center font-medium items-center px-6 py-3 text-gray-900 transition-all dark:bg-white dark:text-gray-800 rounded-xl sm:w-auto hover:bg-primaryDark hover:text-white hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 dark:shadow-neutral-700 focus:shadow-none">
                    {t('allDatasets')}
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>
            </div>
        </>
    )
}