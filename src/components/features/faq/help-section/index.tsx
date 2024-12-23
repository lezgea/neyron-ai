"use client"

import { useGetFaqsQuery } from '@api/faq-api';
import { ExpandableInfoSection } from '@components/shared';
import { LANGS } from 'constants/langs';
import { useLocale, useTranslations } from 'next-intl';
import React from 'react';


interface IHelpSectionProps {
    title?: string,
    items?: [{ title: string, description: string }],
}

type LangKey = keyof typeof LANGS;

export const HelpSection: React.FC<IHelpSectionProps> = (props) => {
    let { title, items } = props;
    const t = useTranslations();
    const lng = useLocale();

    const { data: faqData } = useGetFaqsQuery({ langId: LANGS[lng as LangKey]?.key, isOnMainPage: true })

    return (
        <section className="py-5 space-y-2">
            {
                faqData?.data?.map(faq =>
                    <ExpandableInfoSection
                        key={faq.id}
                        title={faq.question}
                        description={faq.answer}
                    />
                )
            }
        </section>
    )
}