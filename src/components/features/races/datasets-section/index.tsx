"use client";

import { useLazyGetDatasetQuery } from '@api/upload-api';
import { CompetitionInfoSectionSkeleton, NoData } from '@components/shared';
import { RootState } from '@store/store';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { saveAs } from 'file-saver';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL || '';


export const DatasetsSection: React.FC = () => {
    const t = useTranslations();
    const { loading: competitionLoading, competitionInfo } = useSelector((state: RootState) => state.competitions);
    const [isClient, setIsClient] = useState(false);

    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [triggerGetDataset, { data: dataSet, error, isLoading }] = useLazyGetDatasetQuery();

    const itemsPerPage = 10;


    React.useEffect(() => {
        triggerGetDataset({
            competitionId: competitionInfo?.id
        }).then((response) => {
            // if (response?.data?.totalElements) {
            //     setTotalPages(Math.ceil(response.data.totalElements / itemsPerPage));
            // } else {
            //     setTotalPages(1)
            // }
        });
    }, [currentPage, triggerGetDataset, competitionInfo?.id]);


    React.useEffect(() => {
        setCurrentPage(0);
    }, []);

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


    const handleDownload = async (fileName: string, dataFileId: number) => {
        try {
            const token = Cookies.get('dtr-token');
            const response = await fetch(BASE_URL + `/files/download/data/${dataFileId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'text/csv', // Update to the appropriate content type for CSV
                },
            });

            if (!response.ok) {
                throw new Error('Failed to download the file');
            }

            const blob = await response.blob();
            saveAs(blob, `${fileName}`); // Change the file extension to .csv
        } catch (error) {
            console.error('Error downloading the file:', error);
        }
    };


    useEffect(() => {
        setIsClient(true);  // This ensures the code runs only on the client side
    }, []);

    if (!isClient) return null; // Avoid rendering on the server to prevent mismatch


    if (!competitionLoading && !isLoading && !dataSet?.length) {
        return <NoData />
    }

    return (
        <Suspense fallback={<CompetitionInfoSectionSkeleton />}>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-600 rounded-lg overflow-hidden">
                    {/* Table Header */}
                    <thead className="text-gray-600">
                        <tr>
                            <th className="py-3 px-6 text-left font-semibold">Id</th>
                            <th className="py-3 px-6 text-left font-semibold">Filename</th>
                            <th className="py-3 px-6 text-left font-semibold"></th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {dataSet?.map((row, index) => (
                            <tr
                                key={row.dataFileId}
                                className={`border-t border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    }`}
                            >
                                <td className="py-3 px-6">{row.dataFileId}</td>
                                <td className="w-full py-3 px-6">{row.fileName}</td>
                                <td className="py-3 px-6 text-primary hover:text-primaryLight cursor-pointer" onClick={() => handleDownload(row.fileName, row.dataFileId)}>
                                    Download
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* Pagination Controls */
                // !!dataSet?.totalElements &&
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
        </Suspense>
    )
}
