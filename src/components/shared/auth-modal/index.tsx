import React from 'react';
import { Modal } from '../modal';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Button } from '../buttons';


interface IAuthModalProps {
    visible: boolean,
    onClose: () => void,
    onSignUp?: () => void,
    onConfirm?: () => void,
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
    onConfirm?: () => void,
    onSignUp?: () => void,
    onClose: () => void,
}

const ModalContent: React.FC<IModalContent> = (props) => {
    const t = useTranslations();
    const lng = useLocale();
    let { onConfirm, onClose, onSignUp } = props;

    return (
        <div className="flex flex-col items-center justify-center p-6 text-center">
            <h2 className="text-3xl mx-3 mb-2">Authentification is required</h2>
            <p className='font-light'>For this action authentification is required. Please login to continue</p>
            <div className="flex flex-col items-center space-y-3 mt-10">
                <Link href={`/${lng}/sign-in`}>
                    <Button
                        type="submit"
                        size="medium"
                        label={t('login.signIn')}
                    />
                </Link>
                <p className='font-light'>
                    If you don't have an account yet create a <Link href={`/${lng}/sign-up`}><span className="font-medium cursor-pointer underline text-purple">new account</span></Link>
                </p>
            </div>
        </div>
    )
}
