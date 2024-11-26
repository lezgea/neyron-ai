"use client"

import React from 'react';
import { SignOutIcon, WarningIcon } from '@assets/icons';
import { FormEditInput } from '@components/shared/form-edit-input';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useUpdateUserMutation } from '@api/user-api';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '@slices/user-slice';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/store';
import { ConfirmationModal } from '@components/shared';
import { useTranslations } from 'next-intl';
import { IUserUpdateRequest } from '@api/types/user-types';
import { Button } from '@components/shared/buttons';



interface IFormInput extends IUserUpdateRequest { }

const validationSchema = Yup.object().shape({
    // name: Yup.string().required('Name is required'),
    // surname: Yup.string().required('Surname is required'),
});


export const AccountSettings: React.FC = () => {
    const t = useTranslations();
    const dispatch = useDispatch();
    const router = useRouter();
    const [logoutModal, setLogoutModal] = React.useState<boolean>(false);
    const [deleteModal, setDeleteModal] = React.useState<boolean>(false);

    const selectAuthData = createSelector(
        (state: RootState) => state.user.user,
        (state: RootState) => state.user.isAuthenticated,
        (state: RootState) => state.user.loading,
        (user, isAuthenticated, loading) => ({ user, isAuthenticated, loading })
    );

    const { user } = useSelector(selectAuthData);

    const [updateUser, { isLoading: updateLoading, isError: updateError, data }] = useUpdateUserMutation();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });

    React.useEffect(() => {
        if (user) {
            setValue('name', user.data?.name || '');
            setValue('surname', user.data?.surname || '');
        }
    }, [user, setValue]);

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            await updateUser({ id: user?.data?.id || '', data: data }).unwrap();
            toast.success('Profile data has been updated!')
        } catch (err: any) {
            console.error('Unknown error:', err);
            toast.error(err.data?.message || 'An unexpected error occurred');
        }
    };

    const handleLogout = async () => {
        try {
            dispatch(logout());
            router.push('/');
        } catch (error) {
            console.error('Logout failed', error);
        }
    };


    return (
        <div className='w-full'>
            <div className="space-y-5">
                {/* <div className="flex items-center border border-gray-300 px-5 py-3 rounded-2xl space-x-5">
                    <WarningIcon className="w-10 h-10" />
                    <div className="w-full font-medium">{t('verifyYourAccount')}</div>
                    <button className="inline-flex min-w-[150px] text-center font-medium items-center justify-center px-6 py-3 text-primaryLight transition-all dark:bg-white dark:text-gray-800 rounded-xl sm:w-auto hover:bg-primaryDark hover:text-white hover:shadow-lg hover:shadow-neutral-300 hover:-translate-y-px shadow-neutral-300 dark:shadow-neutral-700 focus:shadow-none">
                        {t('verifyNow')}
                    </button>
                </div> */}
                <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                    <FormEditInput
                        label={t('profile.name')}
                        type='string'
                        name='name'
                        placeholder={t('profile.name')}
                        register={register}
                        errors={errors}
                    />
                    <FormEditInput
                        label={t('profile.surname')}
                        type='text'
                        name='surname'
                        placeholder={t('profile.surname')}
                        register={register}
                        errors={errors}
                    />

                    <div className="flex-row w-full space-x-3 py-4">
                        <Button
                            type="submit"
                            size="medium"
                            label={t('buttons.save')}
                        />
                        <Button
                            style="black"
                            size="medium"
                            label={t('buttons.logOut')}
                            onClick={() => setLogoutModal(true)}
                        />
                    </div>
                </form>
            </div>

            <ConfirmationModal
                visible={logoutModal}
                onConfirm={handleLogout}
                onClose={() => setLogoutModal(false)}
            />
        </div>
    );
};
