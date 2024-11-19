import React from 'react';
import { Modal } from '../modal';
import { useTranslations } from 'next-intl';


interface IAuthModalProps {
    visible: boolean,
    onClose: () => void,
    onSignUp?: () => void,
    onConfirm: () => void,
}

export const AuthModal: React.FC<IAuthModalProps> = (props) => {
    let { visible, onConfirm, onClose, onSignUp } = props;

    return (
        <Modal
            visible={visible}
            content={
                <ModalContent
                    onConfirm={onConfirm}
                    onClose={onClose}
                    onSignUp={onSignUp}
                />
            }
            onClose={onClose}
        />
    )
}

interface IModalContent {
    onConfirm: () => void,
    onSignUp?: () => void,
    onClose: () => void,
}

const ModalContent: React.FC<IModalContent> = (props) => {
    const t = useTranslations();
    let { onConfirm, onClose, onSignUp } = props;

    return (
        <div className="flex flex-col items-center justify-center p-6 text-center">
            <h2 className="text-3xl mx-3 mb-2">Authentification is required</h2>
            <p className='font-light'>For this action authentification is required. Please login to continue</p>
            <div className="flex flex-col items-center space-y-3 mt-10">
                <button
                    onClick={onConfirm}
                    className="flex w-full max-w-[200px] text-center justify-center items-center px-6 py-2 text-white transition-all bg-primary rounded-lg hover:bg-primaryDark hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 focus:shadow-none animate-button"
                    aria-label="Join the Race"
                >
                    {t('signIn')}
                </button>
                <p className='font-light'>
                    If you don't have an account yet create a <span className="font-medium cursor-pointer underline text-primary" onClick={onSignUp}>new account</span>
                </p>
            </div>
        </div>
    )
}
