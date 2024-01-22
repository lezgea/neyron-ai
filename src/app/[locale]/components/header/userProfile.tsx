'use client';
import { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useGetFile } from 'src/api/file/queries';
import { useGetProfileDetails } from 'src/api/profile/queries';
import LogoutIcon from 'src/assets/images/logoutIcon.svg';
import ProfileIcon from 'src/assets/images/profileIcon.svg';
import { getAccessToken, removeAuthCookies } from 'src/utils/cookie';

import { LayoutContext } from '../../layoutContainer';

const UserProfile = () => {
  const t = useTranslations('navbar');

  const { userIsActive, setUserIsActive, selectedLanguage } = useContext(LayoutContext);

  const [username, setUsername] = useState('');
  const [userProfileImage, setUserProfileImage] = useState<null | string>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const dropdownTriggerRef = useRef<HTMLParagraphElement>(null);
  const navigate = useRouter();
  const pathName = usePathname();

  const { data } = useGetProfileDetails({
    token: Boolean(getAccessToken() && getAccessToken() !== 'undefined'),
  });

  const { data: file } = useGetFile({
    path: data?.data?.avatar?.filePath,
    responseType: 'blob',
  });

  useEffect(() => {
    if (getAccessToken() && getAccessToken() !== 'undefined') {
      setUserIsActive(true);
      setUsername(data?.data?.name || 'User name');
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
    <li>
      {userIsActive ? (
        <p className="profile-header" onClick={() => setShowDropdown(!showDropdown)} ref={dropdownTriggerRef}>
          {username}
          <Image src={userProfileImage || ProfileIcon} alt="user avatar" className="avatar-image" />
          <ul ref={dropdownRef} className={showDropdown ? 'dropdown-content show' : 'dropdown-content hide'}>
            <li onClick={handleNavigate}>
              <Image src={ProfileIcon} alt="profile" />
              Profile
            </li>
            <li onClick={handleLogout}>
              {' '}
              <Image src={LogoutIcon} alt="Logout" />
              Logout
            </li>
          </ul>
        </p>
      ) : (
        <Link href={`/${selectedLanguage}/login`}>
          <button type="button">{t('login')}</button>
        </Link>
      )}
    </li>
  );
};
export default UserProfile;
