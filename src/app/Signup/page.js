"use client";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import wilayas from "../../../data/wilaya";
import styles from './Signup.module.css';

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
            <h1 className={styles.title}>{t('signup_link')}</h1>

            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder={t('name')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <input
                    type="text"
                    name="surname"
                    placeholder={t('first_name')}
                    value={formData.surname}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />

                <select
                    name="wilaya"
                    value={formData.wilaya}
                    onChange={handleChange}
                    required
                    className={styles.input}
                >
                    <option value="">{t('select_wilaya')}</option>
                    {wilayas.map((wilaya) => (
                        <option key={wilaya.value} value={wilaya.value}>
                            {wilaya.label}
                        </option>
                    ))}
                </select>

                <input
                    type="email"
                    name="email"
                    placeholder={t('email')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder={t('phone')}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />

                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className={styles.input}
                >
                    <option value="">{t('gender_label')}</option>
                    <option value="male">{t('gender_male')}</option>
                    <option value="female">{t('gender_female')}</option>
                </select>

                <input
                    type="number"
                    name="experience"
                    placeholder={t('experience')}
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className={styles.input}
                />

                <button type="submit" className={styles.submitButton}>
                    {t('signup_link')}
                </button>
            </form>
        </div>
    );
};

export default SignupScreen;
