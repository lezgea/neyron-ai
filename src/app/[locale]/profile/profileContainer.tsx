'use client';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Grid } from '@mui/material';

import { useGetCountries } from 'src/api/country/queries';
import { useUploadFile } from 'src/api/file/mutation';
import { useUpdateProfile } from 'src/api/profile/mutation';
import { useGetProfileDetails } from 'src/api/profile/queries';
import CameraIcon from 'src/assets/images/cameraIcon.svg';
import ProfileIcon from 'src/assets/images/defaultProfile.svg';
import OtherIcon from 'src/assets/images/other.svg';
import ProfilePageIcon from 'src/assets/images/profilePageIcon.svg';
import { convertDate } from 'src/hooks/dateConverter';
import { FormDataProfile, ICountries } from 'src/types';
import { getAccessToken } from 'src/utils/cookie';

import DatepickerComponent from '../components/form/Datepicker';
import InputComponent from '../components/form/InputComponent';
import SelectComponent from '../components/form/Select';
import Loading from '../components/ui/Loading';
import useNotification from '../components/ui/useNotification';

const ProfileContainer = () => {
  const { showNotification } = useNotification();

  const t = useTranslations('profile');
  const tBtn = useTranslations('buttons');

  const [activeTab, setActiveTab] = useState(1);
  const [file, setFile] = useState<File | null>(null);

  const sidebarItems = [
    {
      elemIcon: ProfilePageIcon,
      name: t('profile'),
      id: 1,
    },
    {
      elemIcon: OtherIcon,
      name: t('other'),
      id: 2,
    },
  ];

  const { control, register, handleSubmit } = useForm<FormDataProfile>();
  const { data: countries } = useGetCountries();
  const { data: profileData, isLoading: profileDataLOading } = useGetProfileDetails({
    token: Boolean(getAccessToken() && getAccessToken() !== 'undefined'),
  });
  const { mutate, isLoading } = useUpdateProfile();
  const { mutate: fileUpload } = useUploadFile();

  const onSubmit = (values: FormDataProfile) => {
    const finalData = {
      ...values,
      birthDate: convertDate(values?.birthDate),
      gender: 'FEMALE',
      countryId: 0,
    };
    delete finalData?.password;
    fileUpload(
      {
        name: file?.name as string,
        file: file as File,
      },
      {
        onSuccess: (res) => {
          mutate(
            {
              id: profileData?.data?.id,
              data: { ...finalData, avatarId: res?.data?.id },
            },
            {
              onSuccess: () => {
                showNotification({ title: 'Success', variant: 'success' });
              },
              onError: () => {
                showNotification({ title: 'Fail!', variant: 'error' });
              },
            }
          );
        },
        onError: () => {
          showNotification({ title: 'Failed file upload!', variant: 'error' });
        },
      }
    );
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }
  };
  return (
    <section className="profile">
      <Grid container className="profile-container">
        <Grid item xs={3} className="sidebar">
          {sidebarItems?.map((elem) => (
            <div
              className="sidebar-elem"
              onClick={() => {
                setActiveTab(elem?.id);
              }}
              key={elem?.id}
            >
              <Image src={elem?.elemIcon} alt={elem?.name} />
              <span style={{ color: activeTab === elem?.id ? '000' : '#7b7b7b' }}>{elem?.name}</span>
            </div>
          ))}
        </Grid>
        {isLoading || profileDataLOading ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '70vh',
              width: '100%',
            }}
          >
            {' '}
            <Loading />
          </div>
        ) : (
          <Grid item xs={9} className="profile-content">
            <form onSubmit={handleSubmit(onSubmit)}>
              {' '}
              <div className="profile-img">
                <Image src={ProfileIcon} alt="profileImg" className="profile-image" />
                <div className="camera-icon">
                  {' '}
                  <input type="file" id="file-input" onChange={handleFileChange} />
                  <Image src={CameraIcon} alt="camera" />
                </div>
              </div>
              <div className="profile-form">
                <Grid item xs={8} container spacing={2}>
                  <Grid item xs={6}>
                    <InputComponent
                      register={register}
                      id="name"
                      title={t('name')}
                      name="name"
                      placeholder=""
                      type="text"
                      disabled={false}
                      defaultValue=""
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputComponent
                      register={register}
                      id="surname"
                      title={t('surname')}
                      name="surname"
                      placeholder=""
                      type="text"
                      disabled={false}
                      defaultValue=""
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <DatepickerComponent name="birthDate" title={t('birthdate')} control={control} />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectComponent
                      options={countries}
                      control={control}
                      name="gender"
                      getOptionValue={(option: ICountries) => option?.id}
                      getOptionLabel={(option: ICountries) => option?.name}
                      title={t('country')}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectComponent
                      options={countries}
                      control={control}
                      name="countryId"
                      getOptionValue={(option: ICountries) => option?.id}
                      getOptionLabel={(option: ICountries) => option?.name}
                      title={t('gender')}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputComponent
                      register={register}
                      id="email"
                      title={t('email')}
                      name="email"
                      placeholder=""
                      type="email"
                      disabled={true}
                      defaultValue={profileData?.data?.email}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputComponent
                      register={register}
                      id="password"
                      title={t('password')}
                      name="password"
                      type="password"
                      placeholder=""
                      disabled={false}
                      defaultValue=""
                    />
                  </Grid>
                  <Grid item xs={6} className="btn-container">
                    <button type="submit" className="filled-gradient-btn" style={{ width: '100%' }}>
                      {tBtn('save')}
                    </button>
                  </Grid>
                </Grid>
              </div>
            </form>
          </Grid>
        )}
      </Grid>
    </section>
  );
};

export default ProfileContainer;
