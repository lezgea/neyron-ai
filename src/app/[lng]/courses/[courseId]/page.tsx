"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';
import TabSelects from '@components/shared/tab-selects';
import { GeneralSection } from '@components/features/races/general-section';
import { DatasetsSection, RigthContent, ScoreBoardSection } from '@components/features';
import { useGetCompetitionInfoQuery } from '@api/courses-api';
import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { CompetitionComments } from '@components/features/races/competition-comments';


const RaceDetails: React.FC = () => {
    const t = useTranslations();
    const lng = useLocale();
    const params = useParams();
    const { raceId } = params;
    const competitionId = Array.isArray(raceId) ? raceId[0] : raceId;
    const { data: competitionInfo, error, isLoading, refetch } = useGetCompetitionInfoQuery({ id: competitionId as string }, { skip: !competitionId });

    const TABS: { title: string, content: ReactNode }[] = [
        {
            title: t('generalOverview'),
            content: <GeneralSection />,
        },
        {
            title: t('data'),
            content: <DatasetsSection />,
        },
        {
            title: t('scoreBoard'),
            content: <ScoreBoardSection />,
        },
    ]


    return (
        <div className="min-h-screen flex flex-col">
            <div className="container mx-auto py-[6rem] space-y-5">
                {/* Breadcrumb */}
                <nav className="text-sm flex justify-start items-center text-gray-600 space-x-3">
                    <Link href="/" className="hover:text-primaryLight">{t('mainPage')}</Link>
                    <span className="text-lg">&gt;</span>
                    <Link href={`/${lng}/races`} className="hover:text-primaryLight">{t('races')}</Link>
                    <span className="text-lg">&gt;</span>
                    <span>{competitionInfo?.name}</span>
                </nav>

                <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>

                {/* Main Content */}
                <main id="#main-content" className="space-y-5">
                    <section className="relative border rounded-2xl">
                        <img src={competitionInfo?.imageUrl || "/svg/noimg_large.svg"} alt="Race Image" className="w-full h-[20rem] rounded-2xl object-cover" />
                        <h1 className="absolute w-full bottom-0 left-0 text-2xl text-white font-regmed px-7 py-2 backdrop-blur-xl bg-dark/30">
                            {competitionInfo?.name}
                        </h1>
                    </section>

                    <section className="p-8 grid grid-cols-1 lg:grid-cols-4 gap-8 rounded-2xl border border-gray-30">
                        {/* Left Content */}
                        <div className="lg:col-span-3">
                            <TabSelects tabs={TABS} />
                        </div>

                        {/* Right Sidebar */}
                        <RigthContent raceId={competitionId} />
                    </section>
                    <section>
                        <CompetitionComments
                            competitionId={competitionId}
                            isEditable={competitionInfo?.isEditable}
                        />
                    </section>
                </main>
            </div>
        </div>
    );
};

export default RaceDetails;
