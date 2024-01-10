'use client';
import React, { useContext } from 'react';

import { useGetFaq } from 'src/api/faq/queries';

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
  const { data, isLoading } = useGetFaq({ isOnMainPage: mainPage, languageId: selectedLanguage?.id });
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
