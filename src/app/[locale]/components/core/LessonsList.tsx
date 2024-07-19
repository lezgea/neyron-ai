'use client';
import React, { useContext } from 'react';
import { LayoutContext } from '../../layoutContainer';
import { useTranslations } from 'next-intl';
import { Grid } from '@mui/material';


const LESSONS: {
    title: string,
    image: string,
}[] = [
        {
            title: 'What is AI ?',
            image: '/images/chapter_1.png'
        },
        {
            title: '',
            image: '/images/no_image.png'
        },
        {
            title: '',
            image: '/images/no_image.png'
        },
        {
            title: '',
            image: '/images/no_image.png'
        },
        {
            title: '',
            image: '/images/no_image.png'
        },
        {
            title: '',
            image: '/images/no_image.png'
        },
        {
            title: '',
            image: '/images/no_image.png'
        }
    ];


const LessonsList = ({ mainPage }: { mainPage: boolean }) => {
    const { selectedLanguage } = useContext(LayoutContext);
    const tBtn = useTranslations('buttons');


    return (
        <section className='lessons-list'>
            <div className='container'>
                <div className='lessons-list__header lessons-list__header--md lessons-list__header--center'>
                    <img
                        src={'/images/chapter_bg.png'}
                        alt={'Chapter Background'}
                        className='lessons-list__chapter__cover'
                    />
                </div>
                <Grid container spacing={2} className='lessons-list__content'>
                    {
                        LESSONS.map((item: object, i: number) =>
                            <Grid item xs={6} md={4} key={i}>
                                <div className='lessons-list__lesson'>
                                    <div className='lessons-list__lesson__image-container'>
                                        <img
                                            src={item.image || '/images/no_image.png'}
                                            alt={item.image}
                                            className='lessons-list__lesson__image'
                                        />
                                    </div>
                                    <div className='lessons-list__lesson__content'>
                                        <div className='lessons-list__lesson__title'>{item.title}</div>
                                    </div>
                                </div>
                            </Grid>
                        )
                    }
                </Grid>
            </div>
        </section>
    );
};


export default LessonsList;
