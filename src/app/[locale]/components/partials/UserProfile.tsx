'use client';
import { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useGetFile } from 'src/api/file/queries';
import { useGetProfileDetails } from 'src/api/profile/queries';
import LogoutIcon from 'src/assets/images/logoutIcon.svg';
import { getAccessToken, removeAuthCookies } from 'src/utils/cookie';

import { LayoutContext } from '../../layoutContainer';

const UserProfile = () => {
    const t = useTranslations('navbar');

    const { userIsActive, setUserIsActive, selectedLanguage } = useContext(LayoutContext);

    const [username, setUsername] = useState('');
    const [userProfileImage, setUserProfileImage] = useState<null | string>('');
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLUListElement>(null);
    const dropdownTriggerRef = useRef<HTMLParagraphElement>(null);
    const navigate = useRouter();
    const pathName = usePathname();

    const { data } = useGetProfileDetails({
        token: Boolean(getAccessToken() && getAccessToken() !== 'undefined')
    });

    const { data: file } = useGetFile({
        path: data?.data?.avatar?.filePath,
        responseType: 'blob'
    });

    useEffect(() => {
        if (getAccessToken() && getAccessToken() !== 'undefined') {
            console.log('@@@@@@', data);
            setUserIsActive(true);
            setUsername(data?.data?.name || data?.data?.email.substring(0, 5));
        }
    }, [data, getAccessToken()]);

    useEffect(() => {
        const handleClick = (event: Event) => {
            if (
                dropdownRef.current &&
                dropdownTriggerRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !dropdownTriggerRef.current.contains(event.target as Node)
            ) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    useEffect(() => {
        if (file) {
            const blobURL = URL.createObjectURL(file);
            setUserProfileImage(blobURL);
        }
    }, [file, data]);

    const handleLogout = () => {
        removeAuthCookies();
        // navigate.push(`${selectedLanguage?.abbreviation}/login`);
        setUserIsActive(false);
        if (pathName.includes('profile')) {
            navigate.push(`/`);
        }
    };

    const handleNavigate = () => {
        navigate.push(`${selectedLanguage}/profile`);
    };
    return (
        <>
            {userIsActive ? (
                <div
                    className='profile-header'
                    onClick={() => setShowDropdown(!showDropdown)}
                    ref={dropdownTriggerRef}
                >
                    <span>{username}</span>
                    <Image src={userProfileImage || '/svg/profileIcon.svg'}
                           alt='user avatar'
                           width={30}
                           height={30}
                           className='avatar-image'
                    />
                    <ul ref={dropdownRef} className={showDropdown ? 'dropdown-content show' : 'dropdown-content hide'}>
                        <li onClick={handleNavigate}>
                            <Image
                                src={'/svg/profileIcon.svg'}
                                alt='profile'
                                width={30}
                                height={30}
                            />
                            Profile
                        </li>
                        <li onClick={handleLogout}>
                            <Image src={LogoutIcon} alt='Logout' />
                            Logout
                        </li>
                    </ul>
                </div>
            ) : (
                <Link href={`/${selectedLanguage}/login`} className='ai-btn ai-btn--secondary ai-btn--sm'>
                    {t('login')}
                </Link>
            )}
        </>
    );
};
export default UserProfile;
