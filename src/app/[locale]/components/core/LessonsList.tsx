'use client';
import React, { useContext } from 'react';
import { LayoutContext } from '../../layoutContainer';
import { useTranslations } from 'next-intl';
import { Grid } from '@mui/material';
import { useGetLessons } from 'src/api/lessons/queries';
import { LessonAddModal } from './lesson-add-modal';
import { LessonEditModal } from './lesson-edit-modal';

type Lesson = {
    title: string;
    image: string;
};

const LESSONS: Lesson[] = [
    {
        title: 'What is AI?',
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

type LessonsListProps = {
    mainPage: boolean;
};

const LessonsList: React.FC<LessonsListProps> = ({ mainPage }) => {
    const { selectedLanguage } = useContext(LayoutContext);
    const tBtn = useTranslations('buttons');
    const [showAddModal, setShowAddModal] = React.useState(false)
    const [showEditModal, setShowEditModal] = React.useState(false)
    const { data: lessons } = useGetLessons(selectedLanguage);

    return (
        <section className='lessons-list'>
            <div className='container'>
                {/* <div className='lessons-list__header lessons-list__header--md lessons-list__header--center'>
                    <img
                        src={'/images/chapter_bg.png'}
                        alt={'Chapter Background'}
                        className='lessons-list__chapter__cover'
                    />
                </div> */}
                <button
                    style={{ marginLeft: 'auto', marginBottom: 10 }}
                    onClick={() => setShowAddModal(true)}
                    className="ai-btn ai-btn--tertiary"
                >
                    Add Lesson
                </button>
                <Grid container spacing={2} className='lessons-list__content'>
                    {LESSONS.map((item, i) => (
                        <Grid item xs={12} md={4} key={i}>
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
                    ))}
                </Grid>
                <LessonAddModal
                    visible={showAddModal}
                    width={'500'}
                    height={'300'}
                    setVisible={() => setShowAddModal(!showAddModal)}
                />
                <LessonEditModal
                    visible={showEditModal}
                    width={'500'}
                    height={'300'}
                    setVisible={() => setShowEditModal(!showEditModal)}
                />
            </div>
        </section>
    );
};

export default LessonsList;
