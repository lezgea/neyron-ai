'use client';
import React, { useContext } from 'react';
import { useGetFaq } from 'src/api/faq/queries';
import { useGetLanguages } from 'src/api/language/queries';
import { LayoutContext } from '../../layoutContainer';
import Loading from './Loading';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { MinusIcon, PlusIcon } from 'src/assets/icons';

interface IElement {
  id: number;
  question: string;
  answer: string;
}

const AccordionFaq = ({ mainPage }: { mainPage: boolean }) => {
  const { selectedLanguage } = useContext(LayoutContext);
  const { data: languages } = useGetLanguages();
  const { data, isLoading } = useGetFaq({
    isOnMainPage: mainPage,
    languageId: languages?.data?.find((elem) => elem?.abbreviation === selectedLanguage)?.id as number,
  });

  if (isLoading) <Loading />;

  const [expanded, setExpanded] = React.useState<string | false>('panel0');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {data?.data?.map((elem: IElement, index: number) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            aria-controls={'panel' + index + 'bh-content'}
            id={'panel' + index + 'bh-header'}
            expandIcon={
              <div className="expand-image">
                {expanded && expanded === `panel${index}` ? <MinusIcon /> : <PlusIcon />}
              </div>
            }
          >
            {elem?.question}
          </AccordionSummary>
          <AccordionDetails>{elem?.answer}</AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default AccordionFaq;
