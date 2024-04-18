// 'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import SocialList from '../components/partials/SocialList';
import ContactList from '../components/partials/ContactList';
import ContactForm from '../components/partials/ContactForm';

const Contact = () => {
  const t = useTranslations('contact');

  return (
    <main className="ai-main ai-main--contact">
      <section className="ai-section ai-section--contact">
        <div className="container">
          <div className="ai-section__content">
            <div className="ai-section__header ai-section__header--center ai-section__header--sm">
              <h1 className="ai-section__title">{t('title')}</h1>
              <p className="ai-section__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
            <div className="ai-section__body">
              <ContactForm />
            </div>
            <div className="ai-section__footer">
              <ContactList />
              <SocialList isDark={true} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
