'use client';
import React, { useContext } from 'react';
import { LayoutContext } from '../../layoutContainer';
import { useTranslations } from 'next-intl';


const CHAPTERS: {
    title: string,
    description: string,
    image: string,
    price: string,
    duration: string
}[] = [
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '/images/chapter_1.png',
        price: '$500',
        duration: '13 days to go'
    },
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '/images/chapter_2.png',
        price: '$600',
        duration: '15 days to go'
    },
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '',
        price: '$400',
        duration: '14 days to go'
    },
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '',
        price: '$500',
        duration: '11 days to go'
    },
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '',
        price: '$500',
        duration: '13 days to go'
    },
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '',
        price: '$500',
        duration: '10 days to go'
    },
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '',
        price: '$500',
        duration: '13 days to go'
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
                <div className='chapters-list__content'>
                    {
                        CHAPTERS.map((item: object, i: number) =>
                            <div key={i} className='chapters-list__course'>
                                <div className='chapters-list__chapter__image-container'>
                                    <img
                                        src={item.image}
                                        alt={item.image}
                                        className='chapters-list__chapter__image'
                                    />
                                </div>
                                <div className='chapters-list__chapter__content'>
                                    <div className='chapters-list__chapter__title'>{item.title}</div>
                                    <div className='chapters-list__chapter__description'>{item.description}</div>
                                    <div className='chapters-list__chapter__bottom-container'>
                                        <div className='chapters-list__chapter__price'>{item.price}</div>
                                        <div className='chapters-list__chapter__time'>{item.duration}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};


export default ChaptersList;
