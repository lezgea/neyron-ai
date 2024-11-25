import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import { AboutSection, AdventureSection, ExploreSection, WhyUsSection } from '@components/features/home';
import { useTranslations } from 'next-intl';
import PageLayout from '@components/layout/page-layout';


export const metadata: Metadata = {
    title: "Neyron AI",
    description: "Neyron AI is an innovative platform designed to bring data scientists and AI enthusiasts together to compete in data-driven challenges.",
};


// Dynamic imports for better performance
const TeamBrainStorm = dynamic(() => import('@assets/icons/team-brainstorm.svg').then(mod => mod.default));
const TeamBrainstorming = dynamic(() => import('@assets/icons/team-brainstorming.svg').then(mod => mod.default));
const HumanRight = dynamic(() => import('@assets/icons/human-right.svg').then(mod => mod.default));

interface IHomeProps {
    params: {
        lng: string;
    };
}

const Home: React.FC<IHomeProps> = (props) => {
    const t = useTranslations();

    return (
        <PageLayout>
            <ExploreSection />
            <AdventureSection />
            <AboutSection />
            <WhyUsSection />
        </PageLayout>
    );
};

export default Home;
