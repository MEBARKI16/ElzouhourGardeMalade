"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './QuiSommesNous.module.css';

const QuiSommesNous = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar'; // Check if the current language is Arabic

  return (
    <div className={`${styles.container} ${isRTL ? styles.rtl : ''}`}> {/* Apply the RTL class if Arabic */}
      <section className={styles.heroSection}>
        <h1 className={styles.title}>{t('who_we_are')}</h1>
        <p className={styles.description}>{t('who_we_are_description')}</p>
      </section>

      <section className={styles.valuesSection}>
        <h2>{t('our_values')}</h2>
        <p>{t('values_description')}</p>
      </section>

      <section className={styles.partnershipsSection}>
        <h2>{t('our_partnerships')}</h2>
        <p>{t('partnerships_description')}</p>
      </section>

      <section className={styles.joinUsSection}>
        <h2>{t('join_us')}</h2>
        <p>{t('join_us_description')}</p>
      </section>
    </div>
  );
};

export default QuiSommesNous;
