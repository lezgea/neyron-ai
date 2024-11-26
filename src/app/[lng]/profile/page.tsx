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



const Profile: React.FC = () => {
    const t = useTranslations();


    const [hovering, setHovering] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const [isClient, setIsClient] = React.useState<boolean>(false);
    const { user, isAuthenticated, loading } = useSelector((state: RootState) => state.user);

    const [uploadFile, { isLoading }] = useUploadFileMutation();
    const [updateUser, { isLoading: updateLoading, isError: updateError, data }] = useUpdateUserMutation();

    const userImage = React.useMemo(
        () => (
            // user?.data?.avatar?.filePath ||
            '/svg/user.svg'),
        [user?.data?.avatar]
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
            <main className="flex-grow py-20">
                <section className="container flex flex-col items-center justify-between space-y-7 mx-auto p-10 border border-gray-300 rounded-3xl lg:flex-row lg:space-x-10 lg:space-y-0">
                    <div
                        className="relative w-[250px] h-[250px] min-w-[250px] min-h-[250px] rounded-full overflow-hidden border border-bg-gray-200"
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

                    <div className="w-full flex flex-col space-y-5 md:flex-row justify-start md:space-y-0">
                        <div className="w-full flex items-center md:items-start md:justify-end space-y-1">
                            <AccountSettings />
                        </div>
                    </div>
                </section>

                {/* Show error message if invalid file */}
                {errorMessage && (
                    <div className="text-red-500 text-center mt-4">
                        {errorMessage}
                    </div>
                )}

                {/* <section className="container mx-auto py-10 space-y-5">
                    <AccountSettings />
                </section> */}
            </main>
        </div>
    );
};

export default withProtectedRoute(Profile);
