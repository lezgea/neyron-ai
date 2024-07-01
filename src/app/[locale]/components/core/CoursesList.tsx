'use client';
import React, { useContext } from 'react';
import { LayoutContext } from '../../layoutContainer';
import { useTranslations } from 'next-intl';


const COURSES: {
    title: string,
    description: string,
    image: string,
    price: string,
    duration: string
}[] = [
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '/images/course_1.png',
        price: '$500',
        duration: '13 days to go'
    },
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '/images/course_2.png',
        price: '$600',
        duration: '13 days to go'
    },
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '/images/course_3.png',
        price: '$400',
        duration: '13 days to go'
    },
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '/images/course_4.png',
        price: '$500',
        duration: '13 days to go'
    },
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '/images/course_1.png',
        price: '$500',
        duration: '13 days to go'
    },
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '/images/course_3.png',
        price: '$500',
        duration: '13 days to go'
    },
    {
        title: 'A lot of the information that',
        description: 'A lot of the information that we encounter in the course of a typical day is personalized.',
        image: '/images/course_2.png',
        price: '$500',
        duration: '13 days to go'
    }
];


const CoursesList = ({ mainPage }: { mainPage: boolean }) => {
    const { selectedLanguage } = useContext(LayoutContext);
    const tBtn = useTranslations('buttons');

    return (
        <section className='course-list'>
            <div className='container'>
                <div className='course-list__header course-list__header--md course-list__header--center'>
                    <div className='course-list__title'>Introduction to AI</div>
                    <div className='course-list__desc'>
                        This chapter gives you a basic overview of Artificial Intelligence, its key concepts, and
                        technologies.
                    </div>
                </div>
                <div className='course-list__content'>
                    {
                        COURSES.map((item: object, i: number) =>
                            <div key={i} className='course-list__course'>
                                <div className='course-list__course__image-container'>
                                    <img
                                        src={item.image}
                                        alt={item.image}
                                        className='course-list__course__image'
                                    />
                                </div>
                                <div className='course-list__course__content'>
                                    <div className='course-list__course__title'>{item.title}</div>
                                    <div className='course-list__course__description'>{item.description}</div>
                                    <div className='course-list__course__bottom-container'>
                                        <div className='course-list__course__price'>{item.price}</div>
                                        <div className='course-list__course__time'>{item.duration}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                {/*<div className='course-list__graphic course-list__graphic--faq'>*/}
                {/*    <Image src={MonsterQuestion} alt='monster' />*/}
                {/*</div>*/}
            </div>
        </section>
    );
};


export default CoursesList;
