"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PolitiqueConfidentialite.module.css';

const PolitiqueConfidentialite = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className={`${styles.container} ${i18n.language === 'ar' ? styles.rtl : styles.ltr}`}>
            <section className={styles.policySection}>
                <h1 className={styles.title}>{t('privacy_policy_title')}</h1>

                <div className={styles.content}>
                    <h2>{t('personal_data')}</h2>
                    <p>{t('personal_data_content')}</p>

                    <h2>{t('data_usage')}</h2>
                    <p>{t('data_usage_content')}</p>

                    <h2>{t('data_sharing')}</h2>
                    <p>{t('data_sharing_content')}</p>

                    <h2>{t('user_rights')}</h2>
                    <p>{t('user_rights_content')}</p>

                    <h2>{t('cookies')}</h2>
                    <p>{t('cookies_content')}</p>

                    <h2>{t('changes')}</h2>
                    <p>{t('changes_content')}</p>

                    <h2>{t('contact_us')}</h2>
                    <p>{t('contact_us_content')}</p>
                </div>
            </section>
        </div>
    );
};

export default PolitiqueConfidentialite;
