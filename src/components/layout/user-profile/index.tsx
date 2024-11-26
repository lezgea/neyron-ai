"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ConfirmationModal, UserProfileSkeleton } from '@components/shared';
import { Button } from '@components/shared/buttons';
import { Dropdown } from '@components/shared/dropdown';
import { useAuthenticate } from '@hooks/use-auth';
import { logout } from '@slices/user-slice';
import { RootState } from '@store/store';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


const DROPDOWN_MENU: { route: string; label: string }[] = [
    { route: '/profile', label: 'profile.profile' },
    { route: '/courses', label: 'navbar.courses' },
];

interface IUserProfileProps {
    // t?: (val: string) => string,
    // lng?: string,
}

export const UserProfile: React.FC<IUserProfileProps> = () => {
    const lng = useLocale();
    const t = useTranslations();
    const [askModal, setAskModal] = React.useState<boolean>(false);
    const dispatch = useDispatch();
    const router = useRouter();

    const loading = useAuthenticate();

    const { user, isAuthenticated, loading: isUserLoading } = useSelector((state: RootState) => state.user);

    const userImage = React.useMemo(
        () => (
            // user?.data?.avatar?.filePath ||
            '/svg/user.svg'),
        [user?.data?.avatar]
    );


    const handleLogout = async () => {
        try {
            // await logoutUser().unwrap();
            dispatch(logout());
            router.push('/');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    const DropdownContent = (
        <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu" className="flex flex-col w-40">
            {DROPDOWN_MENU.map((item, index) => (
                <Link
                    key={index}
                    href={`/${lng}${item.route}`}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple rounded-md transition-all duration-200 ease-in-out"
                    role="menuitem"
                >
                    {t(item.label)}
                </Link>
            ))}
            <div className="w-full flex flex-col mt-3">
                <Button
                    style="black"
                    size="small"
                    label={t('buttons.logOut')}
                    onClick={() => setAskModal(true)}
                />
            </div>
        </div>
    );

    if (loading || isUserLoading) {
        return <UserProfileSkeleton />;
    }

    if (!isAuthenticated) {
        return (
            <div className="flex space-x-1 md:space-x-3">
                <Link href={`/${lng}/sign-in`}>
                    <Button style="primary" label={t('navbar.login')} />
                </Link>
                <Link href={`/${lng}/sign-up`}>
                    <Button style="black" label={t('register.signUp')} />
                </Link>
            </div>
        );
    }

    return (
        <Dropdown content={DropdownContent}>
            <div className="flex items-center cursor-pointer group select-none">
                <div className="hidden md:flex text-gray-600 font-regmed mr-3 group-hover:text-primary transition-all duration-200 ease-in-out">
                    {user?.data?.name}
                </div>
                <div className="relative w-[40px] h-[40px] min-w-[40px] min-h-[40px] rounded-full overflow-hidden">
                    <Image
                        src={userImage}
                        alt="Avatar"
                        fill={true}
                        className="object-cover"
                        priority={true}
                    />
                </div>
            </div>

            <ConfirmationModal
                visible={askModal}
                onConfirm={handleLogout}
                onClose={() => setAskModal(false)}
            />
        </Dropdown>
    );
};
