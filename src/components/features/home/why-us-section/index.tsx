'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import { useTranslations } from 'next-intl';
import SectionLayout from '@components/layout/section-layout';
import { SectionInfo } from '@components/layout';
import { BeginnerIllustration, CommunityIllustration, InteractiveIllustration } from '@assets/icons';



export const WhyUsSection = () => {
    const t = useTranslations();

    const [showRive, setShowRive] = useState(false);

    const { rive, RiveComponent } = useRive({
        src: 'SingleCharacter.riv',
        autoplay: true,
        stateMachines: 'State Machine 1',
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.Center
        }),
        shouldDisableRiveListeners: false
    });


    const SECTION_ITEMS = [
        {
            id: 1,
            title: t('main.whyUsText1Head'),
            description: t('main.whyUsText1'),
            icon: <BeginnerIllustration className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px]" />,
        },
        {
            id: 2,
            title: t('main.whyUsText2Head'),
            description: t('main.whyUsText2'),
            icon: <InteractiveIllustration className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px]" />,
        },
        {
            id: 3,
            title: t('main.whyUsText3Head'),
            description: t('main.whyUsText3'),
            icon: <CommunityIllustration className="min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px]" />,
        },
    ]


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowRive(true);
        }, 600); // 600 milliseconds delay

        return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }, []);


    return (
        <SectionLayout noXPadding noYPadding>
            <div className='flex items-center justify-center mt-20'>
                {showRive && RiveComponent && (
                    <RiveComponent className="w-full h-screen absolute" />
                )}
                <SectionInfo
                    position="end"
                    title={t("main.whyUsHead")}
                >
                    {
                        SECTION_ITEMS.map(({ id, title, description, icon }) =>
                            <div key={id} className='flex items-center gap-5'>
                                {icon}
                                <div className='flex flex-col gap-2'>
                                    <div className='font-bold text-3xl'>{title}</div>
                                    <div className='font-light'>{description}</div>
                                </div>
                            </div>
                        )
                    }
                </SectionInfo>
            </div>
        </SectionLayout>
    );
};
