"use client";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.css';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    numeroTel: '',
    objet: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`${t('form_submit_success')}`);
  };

  return (
    <div className={`${styles.container} ${i18n.language === 'ar' ? styles.rtl : ''}`}>
      <h1 className={styles.title}>{t('contact_us')}</h1>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="nom">{t('name')}</label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="prenom">{t('first_name')}</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="numeroTel">{t('phone_number')}</label>
          <input
            type="tel"
            id="numeroTel"
            name="numeroTel"
            value={formData.numeroTel}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="objet">{t('subject')}</label>
          <textarea
            id="objet"
            name="objet"
            value={formData.objet}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>{t('submit')}</button>
      </form>

      <footer className={styles.footer}>
        <p>{t('our_office')}</p>
      </footer>
    </div>
  );
};

export default Contact;
