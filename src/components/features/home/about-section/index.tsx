'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import { useTranslations } from 'next-intl';
import SectionLayout from '@components/layout/section-layout';
import { SectionInfo } from '@components/layout';
import * as motion from "framer-motion/client"


export const AboutSection = () => {
    const t = useTranslations();

    const [showRive, setShowRive] = useState(false);

    const { rive, RiveComponent } = useRive({
        src: 'landingAnimation2.riv',
        autoplay: true,
        stateMachines: 'State Machine 1',
        layout: new Layout({
            fit: Fit.Cover,
            alignment: Alignment.Center
        }),
        shouldDisableRiveListeners: false
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowRive(true);
        }, 600); // 600 milliseconds delay

        return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }, []);

    return (
        <SectionLayout noXPadding noYPadding>
            <SectionInfo
                position="start"
                title={t("main.aboutHead")}
                description={t("main.aboutText")}
                btnLabel={t("buttons.startButton")}
                onClick={() => { }}
            />

            {showRive && RiveComponent && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.5,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="box w-full h-screen absolute"
                >
                    <RiveComponent />
                </motion.div>
            )}
        </SectionLayout>
    );
};
