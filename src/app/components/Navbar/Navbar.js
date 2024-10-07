"use client"; // Indique que ce composant est rendu côté client

import { useTranslation } from "react-i18next"; // Pour gérer les traductions
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css"; // CSS spécifique à la Navbar
import { FaUserCircle } from "react-icons/fa"; // Icône d'utilisateur

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Gérer l'ouverture du menu mobile
    // Fonction pour ouvrir/fermer le menu mobile
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Fermer le menu lors du changement de page
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false); // Fermer le menu
    };
    const isArabic = i18n.language === 'ar';
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/logo2.png" alt="Logo" className={styles.logoImage} />
                </Link>
            </div>

            <div
                className={`${styles.menu} ${isMobileMenuOpen ? styles.open : ""} ${isArabic ? styles.menuArabic : ""
                    }`}
            >
                <ul>
                    {/* Lien vers la page d'accueil */}
                    <li>
                        <Link href="/" onClick={handleLinkClick}>
                            {t("home")}
                        </Link>
                    </li>

                    {/* Lien vers la page "Qui sommes-nous" */}
                    <li>
                        <Link href="/QuiSommesNous" onClick={handleLinkClick}>
                            {t("qui_sommes_nous")}
                        </Link>
                    </li>

                    {/* Lien vers la page "Contact" */}
                    <li>
                        <Link href="/Contact" onClick={handleLinkClick}>
                            {t("contact")}
                        </Link>
                    </li>

                    {/* Lien vers la page "Politique de confidentialité" */}
                    <li>
                        <Link href="/PolitiqueConfidentialite" onClick={handleLinkClick}>
                            {t("politique_confidentialite")}
                        </Link>
                    </li>

                    {/* Lien vers la page d'inscription */}
                    <li>
                        <Link href="/inscription" onClick={handleLinkClick}>
                            {t("inscription")}
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.userIcon}>
                <Link href="/compte" onClick={handleLinkClick}>
                    <FaUserCircle size={30} />
                </Link>
            </div>

            <div className={styles.mobileToggle} onClick={toggleMobileMenu}>
                {/* Icône hamburger pour le menu mobile */}
                <span className={styles.hamburger}></span>
                <span className={styles.hamburger}></span>
                <span className={styles.hamburger}></span>
            </div>
        </nav>
    );
};

export default Navbar;
