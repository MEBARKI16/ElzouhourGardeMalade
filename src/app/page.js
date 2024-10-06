"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.css';
import wilayas from '../../data/wilaya';

const HomeScreen = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWilaya, setSelectedWilaya] = useState('');
  const [priceFilter, setPriceFilter] = useState(10000);
  const { t } = useTranslation();

  const offers = [
    {
      id: '1',
      name: 'Marie Dupont',
      firstName: 'Marie',
      title: 'Garde malade pour personnes âgées',
      description: 'Disponible 24/7 avec une longue expérience.',
      price: 5000,
      sector: 'Alger',
      image: '/test2.jpg',
      phone: '+213555123456',
    },
    {
      id: '2',
      name: 'Jean Martin',
      firstName: 'Jean',
      title: 'Garde malade pour personnes handicapées',
      description: 'Service de nuit et jour avec spécialité dans les soins de handicap.',
      price: 4500,
      sector: 'Oran',
      image: '/test.webp',
      phone: '+213555654321',
    },
  ];

  const filteredOffers = offers.filter((offer) => {
    const matchesWilaya = selectedWilaya === '' || offer.sector === selectedWilaya;
    const matchesPrice = offer.price <= priceFilter;
    return matchesWilaya && matchesPrice;
  });

  const openModal = (offer) => {
    setSelectedOffer(offer);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.filtersContainer}>
        <div className={styles.pickerContainer}>
          <select
            value={selectedWilaya}
            onChange={(e) => setSelectedWilaya(e.target.value)}
            className={styles.picker}
          >
            <option value="">{t('select_wilaya')}</option>
            {wilayas.map((wilaya) => (
              <option key={wilaya.value} value={wilaya.value}>
                {wilaya.label}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.sliderContainer}>
          <label className={styles.sliderLabel}>
            {t('price_maximum')} : {priceFilter} DA
          </label>
          <input
            type="range"
            min="2000"
            max="10000"
            step="500"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className={styles.slider}
          />
        </div>

        <button
          className={styles.clearButton}
          onClick={() => {
            setSelectedWilaya('');
            setPriceFilter(10000);
          }}
        >
          {t('clear_filters')}
        </button>
      </div>

      {filteredOffers.length === 0 ? (
        <p className={styles.noOffersText}>{t('no_offers_found')}</p>
      ) : (
        <div className={styles.offerList}>
          {filteredOffers.map((item) => (
            <div key={item.id} className={styles.offerCard} onClick={() => openModal(item)}>
              <Image src={item.image} alt={item.title} width={100} height={100} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.price} DA/jour</p>
            </div>
          ))}
        </div>
      )}

      {modalVisible && selectedOffer && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <Image src={selectedOffer.image} alt={selectedOffer.title} width={300} height={200} />
            <h3>{selectedOffer.title}</h3>
            <p>
              <strong>Nom:</strong> {selectedOffer.name}
            </p>
            <p>
              <strong>Prénom:</strong> {selectedOffer.firstName}
            </p>
            <p>
              <strong>Description:</strong> {selectedOffer.description}
            </p>
            <p>
              <strong>Prix:</strong> {selectedOffer.price} DA/jour
            </p>
            <p>
              <strong>Secteur:</strong> {selectedOffer.sector}
            </p>
            <button
              className={styles.callButton}
              onClick={() => window.open(`tel:${selectedOffer.phone}`)}
            >
              Appeler
            </button>
            <button className={styles.closeButton} onClick={closeModal}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
