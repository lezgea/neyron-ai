'use client';
import React, { useContext } from 'react';
import { LayoutContext } from '../../layoutContainer';
import { useTranslations } from 'next-intl';
import { Grid } from '@mui/material';
import Link from 'next/link';


const CHAPTERS: {
    title: string,
    image: string,
    completed: string,
}[] = [
    {
        title: 'AI basics',
        image: '/images/chapter_1.png',
        completed: '1/3'
    },
    {
        title: 'AI implementation',
        image: '/images/chapter_2.png',
        completed: '0/3'
    },
    {
        title: '',
        image: '',
        completed: ''
    },
    {
        title: '',
        image: '',
        completed: ''
    },
    {
        title: '',
        image: '',
        completed: ''
    },
    {
        title: '',
        image: '',
        completed: ''
    },
    {
        title: '',
        image: '',
        completed: ''
    }
];


const ChaptersList = ({ mainPage }: { mainPage: boolean }) => {
    const { selectedLanguage } = useContext(LayoutContext);
    const tBtn = useTranslations('buttons');


    return (
        <section className='chapters-list'>
            <div className='container'>
                <div className='chapters-list__header chapters-list__header--md chapters-list__header--center'>
                    <div className='chapters-list__title'>Introduction to AI</div>
                    <div className='chapters-list__desc'>
                        This chapter gives you a basic overview of Artificial Intelligence, its key concepts, and
                        technologies.
                    </div>
                </div>
                <Grid container spacing={2} className='chapters-list__content'>
                    {
                        CHAPTERS.map((item: object, i: number) =>
                            <Grid item xs={6} md={4} key={i}>
                                <Link href={`/${selectedLanguage}/lessons`} className='chapters-list__chapter'>
                                    <div className='chapters-list__chapter__image-container'>
                                        <img
                                            src={item.image || '/images/no_image.png'}
                                            alt={item.image}
                                            className='chapters-list__chapter__image'
                                        />
                                    </div>
                                    <div className='chapters-list__chapter__content'>
                                        <div className='chapters-list__chapter__top'>
                                            {
                                                !!item.title &&
                                                <>
                                                    <div className='chapters-list__chapter__top-card'>
                                                        <div className='chapters-list__chapter__top-card__title'>
                                                            <strong>{`Chapter ${i + 1}`}</strong>
                                                        </div>
                                                    </div>
                                                    <div className='chapters-list__chapter__top-card'>
                                                        <div className='chapters-list__chapter__top-card__title'>
                                                            Completed: <strong>{item.completed}</strong>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                        </div>
                                        <div className='chapters-list__chapter__title'>{item.title}</div>
                                        {/*<div className='chapters-list__chapter__bottom-container'>*/}
                                        {/*    <div className='chapters-list__chapter__price'>{item.completed}</div>*/}
                                        {/*</div>*/}
                                    </div>
                                </Link>
                            </Grid>
                        )
                    }
                </Grid>
            </div>
        </section>
    );
};


export default ChaptersList;
