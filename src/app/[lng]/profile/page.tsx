"use client";

import React, { useState } from 'react';
import { ProfileSectionSkeleton } from '@components/shared';
import Image from 'next/image';
import { RootState } from '@store/store';
import { useSelector } from 'react-redux';
import getImgFromBase64 from '@utils/base64toImg';
import withProtectedRoute from '@utils/withProtectedRoute';
import TabSelects from '@components/shared/tab-selects';
import { useUpdateUserMutation } from '@api/user-api';
import { truncate } from 'lodash';
import { useTranslations } from 'next-intl';
import { AccountSettings } from '@components/features';
import { useUploadFileMutation } from '@api/upload-api';
import { createSelector } from '@reduxjs/toolkit';
import { LogoWhite } from '@assets/icons';



const Profile: React.FC = () => {
    const t = useTranslations();


    const [hovering, setHovering] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const [isClient, setIsClient] = React.useState<boolean>(false);
    const selectAuthData = createSelector(
        (state: RootState) => state.user.user,
        (state: RootState) => state.user.isAuthenticated,
        (state: RootState) => state.user.loading,
        (user, isAuthenticated, loading) => ({ user, isAuthenticated, loading })
    );

    const { user, isAuthenticated, loading } = useSelector(selectAuthData);

    const [uploadFile, { isLoading }] = useUploadFileMutation();
    const [updateUser, { isLoading: updateLoading, isError: updateError, data }] = useUpdateUserMutation();

    const userImage = React.useMemo(
        () => (
            `https://api.neyron.ai/v1/files/streams/${user?.data?.avatar?.filePath}` ||
            '/svg/user.svg'
        ),
        [user?.data]
    );

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];
        if (!uploadedFile) {
            setErrorMessage("Please select a file to upload.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("file", uploadedFile);

            let response = await uploadFile({ file: formData }).unwrap();
            await updateUser({
                id: user?.data?.id || '',
                data: {
                    avatarId: response?.data?.id,
                    name: user?.data?.name,
                    surname: user?.data?.surname,
                }
            }).unwrap();

            setErrorMessage(null);
        } catch (error) {
            setErrorMessage("Profile image upload failed.");
        }
    };


    React.useEffect(() => {
        setIsClient(true);
    }, []);


    if (!isClient) return null;

    if (loading || !isAuthenticated) {
        return <ProfileSectionSkeleton />;
    }

    return (
        <div className="min-h-screen flex flex-col p-5">
            <main className="flex-grow py-20 space-y-5">
                <section className="container relative flex flex-col mx-auto rounded-3xl lg:space-y-0 overflow-hidden shadow-md border-t border-t-primaryExtra">
                    <div className="flex w-full relative">
                        <Image
                            src={"/svg/banner.svg"}
                            alt="Datarace Banner Image"
                            height={200}
                            width={800}
                            className="w-full h-[12rem] md:h-[17rem] object-cover"
                        />
                        <div className='absolute flex flex-col items-end md:justify-center gap-7 p-10 lg:px-20 md:py-[1.5rem] top-0 w-full h-full'>
                            <LogoWhite className='w-[150px] h-[50px] md:w-[200px] md:h-[70px]' />
                            <p className='hidden md:flex text-md text-white font-light md:max-w-[50%] text-end'>
                                Dive into the essentials of AI and see how it shapes our world with beginner-friendly course to ignite your AI passion
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center px-10 lg:px-20 pb-10">
                        <div
                            className="relative -mt-[100px] w-[200px] h-[200px] min-w-[200px] min-h-[200px] rounded-full overflow-hidden border-4 border-white bg-gray-200"
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                        >
                            <Image
                                src={userImage}
                                alt="Avatar"
                                fill={true}
                                className="object-cover"
                                priority={true}
                            />

                            {hovering && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    {/* Label makes the hover area clickable */}
                                    <label
                                        htmlFor="image-upload"
                                        className="cursor-pointer bg-none text-white text-xs px-4 py-2 border border-1 border-white rounded-full"
                                    >
                                        {isLoading ? 'Uploading...' : 'Upload Image'}
                                    </label>
                                </div>
                            )}

                            {/* Invisible input */}
                            <input
                                id="image-upload"
                                type="file"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                accept="image/png, image/jpeg"
                                onChange={handleImageChange}
                                disabled={isLoading}
                            />
                        </div>

                        <div className="w-full flex flex-col md:flex-row py-5 md:pl-5">
                            <div className="w-full flex flex-col items-between">
                                <p className="text-[1.7rem] font-medium">{user?.data?.name} {user?.data?.surname}</p>
                                <p className="text-md text-gray-500">{user?.data?.email}</p>
                            </div>
                            <div>
                                <p className="text-md text-purple">@{user?.data?.role}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container relative flex flex-col mx-auto rounded-3xl lg:space-y-0 overflow-hidden shadow-md border-t border-t-primaryExtra p-10">
                    <AccountSettings />
                </section>
            </main>
        </div>
    );
};

export default withProtectedRoute(Profile);
