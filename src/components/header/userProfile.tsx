'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useGetProfileDetails } from 'src/api/profile/queries';
import { getAccessToken } from 'src/utils/cookie';

const UserProfile = () => {
  const [userIsActive, setUserIsActive] = useState(false);
  const [username, setUsername] = useState('');
  const { data } = useGetProfileDetails({
    token: Boolean(getAccessToken() && getAccessToken() !== 'undefined'),
  });

  useEffect(() => {
    if (getAccessToken() && getAccessToken() !== 'undefined') {
      setUserIsActive(true);
      setUsername(data);
    }
  }, [data, getAccessToken()]);

  return (
    <li>
      {userIsActive ? (
        <p>
          {' '}
          {data?.data?.name || 'UserName'}
          <ul>
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        </p>
      ) : (
        <Link href="/login">
          {' '}
          <button type="button">Log in</button>
        </Link>
      )}
    </li>
  );
};
export default UserProfile;
