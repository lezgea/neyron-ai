'use client';
import React, { useContext } from 'react';
import { LayoutContext } from '../../../layoutContainer';
import { useTranslations } from 'next-intl';
import { Grid } from '@mui/material';
import Link from 'next/link';
import { useGetChapters } from 'src/api/chapters/queries';
import { Button } from '../../partials/button';
import { useAddChapter } from 'src/api/chapters/mutation';
import useNotification from '../../partials/useNotification';
import Modal from '../../partials/modal/Modal';
import { ChapterAddModal } from '../chapter-add-modal';
import { ChapterEditModal } from '../chapter-edit-modal';

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
    const [showAddModal, setShowAddModal] = React.useState(false)
    const [showEditModal, setShowEditModal] = React.useState(false)
    const { data: chapters } = useGetChapters(selectedLanguage, 1);


    return (
        <section className='chapters-list'>
            <div className='container'>
                <div className='chapters-list__header chapters-list__header--md chapters-list__header--center'>
                    <div className='chapters-list__title'>Introduction to AI</div>
                    <div className='chapters-list__desc'>
                        This chapter gives you a basic overview of Artificial Intelligence, its key concepts, and
                        technologies.
                    </div>
                    <button
                        style={{ marginTop: 10 }}
                        onClick={() => setShowAddModal(true)}
                        className="ai-btn ai-btn--tertiary"
                    >
                        Add Chapter
                    </button>
                </div>
                <Grid container spacing={2} className='chapters-list__content'>
                    {
                        CHAPTERS.map((item, i) =>
                            <Grid item xs={12} md={4} key={i}>
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
                <ChapterAddModal
                    visible={showAddModal}
                    width={'500'}
                    height={'300'}
                    setVisible={() => setShowAddModal(!showAddModal)}
                />
                <ChapterEditModal
                    visible={showEditModal}
                    width={'500'}
                    height={'300'}
                    setVisible={() => setShowEditModal(!showEditModal)}
                />
            </div>
        </section>
    );
};

export default ChaptersList;
