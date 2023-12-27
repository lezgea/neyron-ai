'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import ErrorNotification from 'src/assets/images/errorNotification.svg';
import SuccessNotification from 'src/assets/images/successNotification.svg';

const Notification = ({ text, type }: { text: string; type: string }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const notificationTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(notificationTimer);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className={`notification notification-${type}`}>
          mmmmmmmmmmmmm
          <Image
            src={type === 'success' ? SuccessNotification : ErrorNotification}
            alt="notification icon"
            width={24}
            height={24}
          />
          <span>{text}</span>
        </div>
      )}
    </>
  );
};

export default Notification;
