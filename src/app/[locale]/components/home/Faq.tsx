'use client';
import React, { useContext } from 'react';
import AccordionFaq from '../ui/AccordionFAQ';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutContext } from '../../layoutContainer';
import { useTranslations } from 'next-intl';
import ArrowIcon from 'src/assets/images/arrow.svg';
import MonsterQuestion from 'src/assets/images/monster-question.svg';

const Faq = ({ mainPage }: { mainPage: boolean }) => {
  const { selectedLanguage } = useContext(LayoutContext);
  const tBtn = useTranslations('buttons');

  return (
    <section className="ai-section ai-section--faq">
      <div className="container">
        <div className="ai-section__content">
          <div className="ai-section__header ai-section__header--md ai-section__header--center">
            <h1 className="ai-section__title">FAQ</h1>
          </div>
          <div className="ai-section__body">
            <div className="ai-accordion">
              <AccordionFaq mainPage={mainPage} />
            </div>
          </div>
          <div className="ai-section__footer">
            {mainPage && (
              <Link href={`/${selectedLanguage}/faq`} className="ai-btn ai-btn--primary ai-btn--lg">
                <span>{tBtn('more')}</span>
                <Image src={ArrowIcon} alt="arrow-icon" />
              </Link>
            )}
          </div>
        </div>
        <div className="ai-section__graphic ai-section__graphic--faq">
          <Image src={MonsterQuestion} alt="monster" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
