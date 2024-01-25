'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import { useTranslations } from 'next-intl';
import { useGetFaq } from 'src/api/faq/queries';
import { useGetLanguages } from 'src/api/language/queries';
import ArrowIcon from 'src/assets/images/arrow.svg';

import { LayoutContext } from '../../layoutContainer';
import AccordionComponent from '../ui/accordion';
import Loading from '../ui/loading';

interface IElement {
  id: number;
  question: string;
  answer: string;
}
const FaqContainer = ({ mainPage }: { mainPage: boolean }) => {
  const { selectedLanguage } = useContext(LayoutContext);
  const { data: languages } = useGetLanguages();
  const { data, isLoading } = useGetFaq({
    isOnMainPage: mainPage,
    languageId: languages?.data?.find((elem) => elem?.abbreviation === selectedLanguage)?.id as number,
  });
  //   const tBtn = useTranslations('buttons');
  if (isLoading) <Loading />;
  return (
    <div style={{ marginBottom: !mainPage ? '5rem' : '' }}>
      {data?.data?.map((elem: IElement) => (
        <AccordionComponent key={elem?.id} summary={elem?.question} details={elem?.answer} />
      ))}
      {mainPage && (
        <div className="gradient-btn" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link href={`/${selectedLanguage}/faq`}>
            <button type="button">
              More <Image src={ArrowIcon} alt="arrow-icon" />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default FaqContainer;
