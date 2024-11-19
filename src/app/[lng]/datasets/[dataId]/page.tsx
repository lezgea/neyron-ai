"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useGetDatasetInfoQuery } from '@api/datasets-api';
import { UpdateDatasetSidebar } from '@components/features/datasets/update-dataset-sidebar';
import { DatasetFiles } from '@components/features/datasets/dataset-files';
import { DatasetComments } from '@components/features';


const DatasetDetails: React.FC = () => {
    const t = useTranslations();
    const lng = useLocale();
    const params = useParams();
    const { dataId } = params;
    const datasetId = Array.isArray(dataId) ? dataId[0] : dataId;

    const [isSidebarOpen, setSidebarOpen] = React.useState<boolean>(false);
    const { data: datasetInfo, error, isLoading, refetch } = useGetDatasetInfoQuery({ id: dataId as string }, { skip: !dataId });


    return (
        <div className="min-h-screen px-5 flex flex-col">
            <div className="container mx-auto py-[6rem] space-y-5">
                {/* Breadcrumb */}
                <div className="flex justify-between">
                    <nav className="text-sm flex justify-start items-center text-gray-600 space-x-3">
                        <Link href="/" className="hover:text-primaryLight">{t('mainPage')}</Link>
                        <span className="text-lg">&gt;</span>
                        <Link href={`/${lng}/datasets`} className="hover:text-primaryLight">{t('datasets')}</Link>
                        <span className="text-lg">&gt;</span>
                        <span>{datasetInfo?.title}</span>
                    </nav>

                    {
                        datasetInfo?.isEditable &&
                        <button
                            aria-label="Upload Dataset"
                            className="inline-flex w-auto text-center items-center px-6 py-2.5 text-white transition-all bg-gray-700 rounded-lg sm:w-auto hover:bg-dark hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                            onClick={() => setSidebarOpen(true)}
                        >
                            Edit Dataset
                        </button>
                    }
                </div>

                <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>

                {/* Main Content */}
                <main id="#main-content" className="space-y-5">
                    <section className="relative border rounded-2xl">
                        <img src={datasetInfo?.imageUrl || "/svg/noimg_large.svg"} alt="Race Image" className="w-full h-[20rem] rounded-2xl object-cover" />
                        <h1 className="absolute w-full bottom-0 left-0 text-2xl text-white font-regmed px-7 py-2 backdrop-blur-xl bg-dark/30">
                            {datasetInfo?.title}
                        </h1>
                    </section>
                    <section className="p-8 grid grid-cols-1 lg:grid-cols-4 gap-8 rounded-2xl border border-gray-30">
                        <div className="lg:col-span-3 gap-8">
                            <div dangerouslySetInnerHTML={{ __html: datasetInfo?.description || '' }}></div>
                        </div>
                        {/* Tags */
                            !!datasetInfo?.tags?.length &&
                            <div className="space-y-2">
                                <div className="flex space-x-3 mb-5">
                                    <div className="h-[30px] w-[2px] bg-primaryLight" />
                                    <span className="text-xl font-medium">Tags</span>
                                </div>
                                <div className="space-y-2">
                                    {
                                        datasetInfo?.tags?.map((tag, index) =>
                                            <div className="inline-block text-sm px-4 py-2 text-[1rem] rounded-lg space-x-2 mr-2 bg-gray-100">
                                                <span className="text-primaryLight">#</span>
                                                <span>{tag.name}</span>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        }
                    </section>
                    <section>
                        <DatasetFiles
                            datasetId={datasetId}
                            isEditable={datasetInfo?.isEditable}
                            files={datasetInfo?.datasetFileDownloadDto}
                            refetch={refetch}
                        />
                    </section>
                    <section>
                        <DatasetComments
                            datasetId={datasetId}
                            isEditable={datasetInfo?.isEditable}
                        />
                    </section>
                </main>
            </div>

            <UpdateDatasetSidebar
                visible={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />
        </div >
    );
};

export default DatasetDetails;
