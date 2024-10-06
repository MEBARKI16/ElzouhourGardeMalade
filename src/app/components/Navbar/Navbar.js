"use client";
import { useTranslation } from "react-i18next"; // Pour gérer les traductions
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css"; // CSS spécifique à la Navbar
import { FaUserCircle } from "react-icons/fa"; // Icône d'utilisateur

const Navbar = () => {
    const { t } = useTranslation(); // Utiliser les traductions
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Gérer l'ouverture du menu mobile

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/logoGardeMalade.png" alt="Logo" className={styles.logoImage} />
                </Link>
            </div>

            <div className={`${styles.menu} ${isMobileMenuOpen ? styles.open : ""}`}>
                <ul>
                    <li>
                        <Link href="/QuiSommesNous">
                            {t("qui_sommes_nous")}
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            {t("contact")}
                        </Link>
                    </li>
                    <li>
                        <Link href="/PolitiqueConfidentialite">
                            {t("politique_confidentialite")}
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.userIcon}>
                <Link href="/compte">
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
