'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Grid } from '@mui/material';

import { useGetCountries } from 'src/api/country/queries';
import CameraIcon from 'src/assets/images/cameraIcon.svg';
import ProfileIcon from 'src/assets/images/defaultProfile.svg';
import OtherIcon from 'src/assets/images/other.svg';
import ProfilePageIcon from 'src/assets/images/profilePageIcon.svg';
import { ICountries } from 'src/types';

import DatepickerComponent from '../components/form/Datepicker';
import InputComponent from '../components/form/Input';
import SelectComponent from '../components/form/Select';

const ProfileContainer = () => {
  const t = useTranslations('profile');
  const [activeTab, setActiveTab] = useState(1);

  const sidebarItems = [
    {
      elemIcon: ProfilePageIcon,
      name: 'Profile',
      id: 1,
    },
    {
      elemIcon: OtherIcon,
      name: 'Other',
      id: 2,
    },
  ];

  const { control, register } = useForm();
  const { data: countries } = useGetCountries();

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
        <Grid item xs={9} className="profile-content">
          <div className="profile-img">
            <Image src={ProfileIcon} alt="profileImg" className="profile-image" />
            <Image src={CameraIcon} alt="camera" className="camera-icon" />
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
                />
              </Grid>
              <Grid item xs={6}>
                <DatepickerComponent name="birthDate" title={t('birthdate')} control={control} />
              </Grid>
              <Grid item xs={6}>
                <SelectComponent
                  options={countries}
                  control={control}
                  name="country"
                  getOptionValue={(option: ICountries) => option?.id}
                  getOptionLabel={(option: ICountries) => option?.name}
                  title={t('country')}
                />
              </Grid>
              <Grid item xs={6}>
                <SelectComponent
                  options={countries}
                  control={control}
                  name="country"
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
                />
              </Grid>
              <Grid item xs={6} className='btn-container'>
                <button type="submit" className="filled-gradient-btn" style={{ width: '100%' }}>
                  Send
                </button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default ProfileContainer;
