'use client';
import React, { useContext } from 'react';
import { LayoutContext } from '../../layoutContainer';
import { useTranslations } from 'next-intl';
import { Grid } from '@mui/material';
import Link from 'next/link';
import { useGetChapters } from 'src/api/chapters/queries';
import { Button } from '../partials/button';
import { useAddChapter } from 'src/api/chapters/mutation';
import useNotification from '../partials/useNotification';

type Chapter = {
    title: string;
    image: string;
    completed: string;
};

const CHAPTERS: Chapter[] = [
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

type ChaptersListProps = {
    mainPage: boolean;
};

const ChaptersList: React.FC<ChaptersListProps> = ({ mainPage }) => {
    const { selectedLanguage } = useContext(LayoutContext);
    const tBtn = useTranslations('buttons');
    const { showNotification } = useNotification();

    const [state, setState] = React.useState({
        name: '',
        description: '',
        chapterId: 0,
        languageId: 0,
    })
    const { data: chapters } = useGetChapters(selectedLanguage, 1);
    const { mutate, isLoading } = useAddChapter(selectedLanguage);


    function addChapter() {
        mutate(
            {
                courseId: 1,
                name: 'test',
                description: 'fff',
                chapterId: 4,
                languageId: 1,
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
    }


    return (
        <section className='chapters-list'>
            <div className='container'>
                <div className='chapters-list__header chapters-list__header--md chapters-list__header--center'>
                    <div className='chapters-list__title'>Introduction to AI</div>
                    <div className='chapters-list__desc'>
                        This chapter gives you a basic overview of Artificial Intelligence, its key concepts, and
                        technologies.
                    </div>
                    <Button
                        type='blue'
                        title='Add Chapter'
                        onClick={addChapter}
                    />
                </div>
                <Grid container spacing={2} className='chapters-list__content'>
                    {
                        CHAPTERS.map((item, i) =>
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
