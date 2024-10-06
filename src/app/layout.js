"use client";
import Head from 'next/head';
import localFont from "next/font/local";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import './globals.css';
import '../../i18n';
import Navbar from './components/Navbar/Navbar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState('ar');

  useEffect(() => {
    const deviceLanguage = navigator.language || navigator.languages[0];
    const lang = deviceLanguage.startsWith('fr') ? 'fr' : 'ar';
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = currentLang === 'fr' ? 'ar' : 'fr';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <html lang={currentLang === 'fr' ? 'fr' : 'ar'}>
      <head>
        <title>El zouhour Garde Malade</title>
        <meta name="description" content="Garde malade professionnel à domicile" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
          <button className="floatingButton" onClick={toggleLanguage}>
            {currentLang === 'fr' ? 'AR' : 'FR'}
          </button>
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
