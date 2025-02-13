import React from 'react';
import { Metadata } from 'next';
import { Loader } from '@components/shared';
import { useTranslations } from 'next-intl';
import { ContactForm, SignUpForm } from '@components/features';
import { InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '@assets/icons';


export const metadata: Metadata = {
    title: "Contact Us | Neyron AI",
    description: "Neyron AI is an innovative platform designed to bring data scientists and Al enthusiasts together to compete in data-driven challenges.",
};


const Contact: React.FC = () => {
    const t = useTranslations();

    return (
        <div className="min-h-screen flex flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
            <main id="main-content" className="flex-grow bg-gray-50 px-5 py-20 lg:px-0 lg:py-[7rem] space-y-10">
                <section className="container max-w-[50%] flex flex-col mx-auto w-full justify-between space-y-10">
                    <div className="justify-between space-y-[50px]">
                        <div className="space-y-3">
                            <h2 className="text-[32px] md:text-[2.3rem] font-medium">{t('contact.title')}</h2>
                            <p className="text-md text-gray-700">{t('contact.description')}</p>
                        </div>
                    </div>
                    <ContactForm />
                </section>
            </main>
        </div>
    );
};

export default Contact;
