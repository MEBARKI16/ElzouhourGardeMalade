"use client"
import Head from 'next/head';
import localFont from "next/font/local";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import './globals.css';
import '../../i18n';
import { metadata } from './metadata';

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
  const [currentLang, setCurrentLang] = useState('fr');

  const toggleLanguage = () => {
    const newLang = currentLang === 'fr' ? 'ar' : 'fr';
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <html lang={currentLang === 'fr' ? 'fr' : 'ar'}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Vous pouvez ajouter d'autres métadonnées ici */}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
          {/* Ajouter un bouton flottant pour basculer la langue */}
          <button className="floatingButton" onClick={toggleLanguage}>
            {currentLang === 'fr' ? 'AR' : 'FR'}
          </button>
        </div>
        {children}
      </body>
    </html>
  );
}
