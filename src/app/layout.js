"use client";
import Head from 'next/head';
import localFont from "next/font/local";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react'; // Import useEffect
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
  const [currentLang, setCurrentLang] = useState('ar'); // Langue par défaut arabe

  // Utilisation de useEffect pour détecter la langue du téléphone et appliquer la langue correspondante
  useEffect(() => {
    const deviceLanguage = navigator.language || navigator.languages[0]; // Langue du navigateur ou téléphone
    const lang = deviceLanguage.startsWith('fr') ? 'fr' : 'ar'; // Si le téléphone est en français, sinon arabe
    i18n.changeLanguage(lang); // Changer la langue dans i18next
    setCurrentLang(lang); // Mettre à jour l'état pour la langue courante
  }, [i18n]);

  // Fonction pour changer la langue via le bouton flottant
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
        {/* Ajouter d'autres métadonnées si nécessaire */}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div>
          {/* Ajouter un bouton flottant pour changer de langue */}
          <button className="floatingButton" onClick={toggleLanguage}>
            {currentLang === 'fr' ? 'AR' : 'FR'}
          </button>
        </div>
        {children}
      </body>
    </html>
  );
}
