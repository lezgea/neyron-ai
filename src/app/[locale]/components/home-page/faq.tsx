import React, { useContext } from 'react';
import FaqContainer from './faqContainer';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutContext } from '../../layoutContainer';
import { useTranslations } from 'next-intl';
import ArrowIcon from 'src/assets/images/arrow.svg';
import MonsterWithQuestion from 'src/assets/images/monster-with-question.svg';

const Faq = ({ mainPage }: { mainPage: boolean }) => {
  const { selectedLanguage } = useContext(LayoutContext);
  const tBtn = useTranslations('buttons');

  return (
    <section className="section section--faq">
      <div className="container">
        <div className="section__content">
          <div className="section__header section__header--md section__header--center">
            <h1 className="section__title">FAQ</h1>
          </div>
          <div className="section__body">
            <div className="ai-accordion">
              <FaqContainer mainPage={mainPage} />
            </div>
          </div>
          <div className="section__footer">
            {mainPage && (
              <Link href={`/${selectedLanguage}/faq`} className="ai-btn ai-btn--primary ai-btn--lg">
                <span>{tBtn('more')}</span>
                <Image src={ArrowIcon} alt="arrow-icon" />
              </Link>
            )}
          </div>
        </div>
        <div className="section__graphic section__graphic--faq">
          <Image src={MonsterWithQuestion} alt="monster" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
