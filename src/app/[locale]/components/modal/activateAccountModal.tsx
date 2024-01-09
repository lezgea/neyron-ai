'use client';

import Image from 'next/image';
import Link from 'next/link';

import GmailIcon from 'src/assets/images/gmailIcon.svg';
import OutlookIcon from 'src/assets/images/outlookIcon.svg';

import Modal from '../ui/Modal';

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
  return (
    <Modal visible={visible} setVisible={setVisible} width="28rem" height="28rem">
      <div className="forgot-password-modal">
        {' '}
        <div className="modal-head">
          {' '}
          <h1>Check your email</h1>
          <p>We've sent a message to {emailValue} with a link to activate your account.</p>
        </div>
        <div className="medias">
          <Link href="https://mail.google.com/mail" target="_blank">
            {' '}
            <Image src={GmailIcon} alt="gmail" />
            <span className="link-text">Open Gmail</span>
          </Link>
          <Link href="https://mail.outlook.com/mail" target="_blank">
            <Image src={OutlookIcon} alt="outlook" />
            <span className="link-text">Open Outlook</span>
          </Link>
        </div>
        <div className="bottom-text">
          <p>Didn't get an email? Check your spam folder!</p>
          <Link href="/forgotPassword" className="link-text" onClick={() => setVisible(false)}>
            {textForLink}
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ActivateAccountModal;
