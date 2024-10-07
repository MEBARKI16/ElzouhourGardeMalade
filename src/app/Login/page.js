"use client";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';
import styles from './Login.module.css'; // Importing CSS module

const LoginScreen = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('login')}</title>
      </Head>

      <div className={styles.formWrapper}>
        <h1 className={styles.title}>{t('login')}</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="email"
            placeholder={t('email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className={styles.input}
            type="password"
            placeholder={t('password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className={styles.loginButton} type="submit">
            {t('login_button')}
          </button>
        </form>

        <p className={styles.signupText}>
          {t('no_account')}{' '}
          <a className={styles.signupLink} href="/signup">
            {t('signup_link')}
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
