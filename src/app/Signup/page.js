"use client";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import wilayas from "../../../data/wilaya";
import styles from './Signup.module.css'; // Importing CSS module

const SignupScreen = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    wilaya: '',
    email: '',
    phone: '',
    gender: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>{t('signup_link')}</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder={t('name')}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type="text"
            name="surname"
            placeholder={t('first_name')}
            value={formData.surname}
            onChange={handleChange}
            required
          />
          <select
            className={styles.input}
            name="wilaya"
            value={formData.wilaya}
            onChange={handleChange}
            required
          >
            <option value="">{t('select_wilaya')}</option>
            {wilayas.map((wilaya) => (
              <option key={wilaya.value} value={wilaya.value}>
                {wilaya.label}
              </option>
            ))}
          </select>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder={t('email')}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type="tel"
            name="phone"
            placeholder={t('phone')}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            className={styles.input}
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">{t('gender_label')}</option>
            <option value="male">{t('gender_male')}</option>
            <option value="female">{t('gender_female')}</option>
          </select>
          <input
            className={styles.input}
            type="number"
            name="experience"
            placeholder={t('experience')}
            value={formData.experience}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.loginButton}>
            {t('signup_link')}
          </button>
        </form>

        <p className={styles.signupText}>
          {t('already_account')}{' '}
          <a className={styles.signupLink} href="/Login">
            {t('login')}
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;
