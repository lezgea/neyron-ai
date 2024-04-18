'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import GmailIcon from 'src/assets/images/gmailIcon.svg';
import OutlookIcon from 'src/assets/images/outlookIcon.svg';

import Modal from './Modal';

const ActivateAccountModal = ({
  visible,
  setVisible,
  emailValue,
  textForLink,
}: {
  visible: boolean;
  setVisible: (newValue: boolean) => void;
  emailValue: string;
  textForLink: string;
}) => {
  const t = useTranslations('resetPasswordModal');

  return (
    <Modal visible={visible} setVisible={setVisible} width="28rem" height="28rem">
      <div className="forgot-password-modal">
        {' '}
        <div className="modal-head">
          {' '}
          <h1>{t('title')}</h1>
          <p>
            {t('activateText1')} {emailValue} {t('activateText2')}
          </p>
        </div>
        <div className="medias">
          <Link href="https://mail.google.com/mail" target="_blank">
            {' '}
            <Image src={GmailIcon} alt="gmail" />
            <span className="link-text">{t('openGmail')}</span>
          </Link>
          <Link href="https://mail.outlook.com/mail" target="_blank">
            <Image src={OutlookIcon} alt="outlook" />
            <span className="link-text">{t('openOutlook')}</span>
          </Link>
        </div>
        <div className="bottom-text">
          <p>{t('checkSpam')}</p>
          <Link href="/forgotPassword" className="link-text" onClick={() => setVisible(false)}>
            {textForLink}
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ActivateAccountModal;
