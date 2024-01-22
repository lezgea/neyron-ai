'use client';
import React, { useContext } from 'react';

import { useGetFaq } from 'src/api/faq/queries';
import { useGetLanguages } from 'src/api/language/queries';

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
  if (isLoading) <Loading />;
  return (
    <div style={{ marginBottom: !mainPage ? '5rem' : '' }}>
      {data?.data?.map((elem: IElement) => (
        <AccordionComponent key={elem?.id} summary={elem?.question} details={elem?.answer} />
      ))}
    </div>
  );
};

export default FaqContainer;
