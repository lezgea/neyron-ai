"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import SectionLayout from '@components/layout/section-layout';
import { SectionInfo } from '@components/layout';
import { AdventureCard1, AdventureCard2, AdventureCard3 } from '@assets/icons';
import * as motion from "framer-motion/client"


export const AdventureSection = () => {
    const t = useTranslations();

    return (
        <SectionLayout noYPadding>
            <div className='flex items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.5,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='ai-section ai-section--adventure'
                >
                    <div className='ai-section__graphic'>
                        <div className='cards-wrapper'>
                            <div className='card card--1'>
                                <AdventureCard1 className='card__picture' />
                            </div>
                            <div className='card card--2'>
                                <AdventureCard2 className='card__picture' />
                            </div>
                            <div className='card card--3'>
                                <AdventureCard3 className='card__picture' />
                            </div>
                        </div>
                    </div>
                </motion.div>

                <SectionInfo
                    position="end"
                    title={t("main.coursesHead")}
                    description={t("main.coursesText")}
                    btnLabel={t("buttons.startButton")}
                    onClick={() => { }}
                />
            </div>
        </SectionLayout>
    );
};

