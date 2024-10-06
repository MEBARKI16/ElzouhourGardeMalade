"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import OfferCard from "./components/OfferCard/OfferCard";
import styles from "./Home.module.css";
import wilayas from "../../data/wilaya";
import FilterComponent from "./components/FilterComponent/FilterComponent";

const HomeScreen = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const [priceFilter, setPriceFilter] = useState(10000);
  const { t, i18n } = useTranslation(); // Pour récupérer la langue actuelle

  const offers = [
    {
      id: "1",
      name: "Marie Dupont",
      firstName: "Marie",
      title: "Garde malade pour personnes âgées",
      description:
        "Disponible 24/7 avec une longue expérience. Disponible 24/7 avec une longue expérience.",
      price: 5000,
      sector: "Alger",
      image: "/test2.jpg",
      phone: "+213555123456",
    },
    {
      id: "2",
      name: "Jean Martin",
      firstName: "Jean",
      title: "Garde malade pour personnes handicapées",
      description:
        "Service de nuit et jour avec spécialité dans les soins de handicap.",
      price: 4500,
      sector: "Oran",
      image: "/test.webp",
      phone: "+213555654321",
    },
    {
      id: "3",
      name: "Marie Dupont",
      firstName: "Marie",
      title: "Garde malade pour personnes âgées",
      description:
        "Disponible 24/7 avec une longue expérience. Disponible 24/7 avec une longue expérience.",
      price: 5000,
      sector: "Alger",
      image: "/test2.jpg",
      phone: "+213555123456",
    },
    {
      id: "4",
      name: "Jean Martin",
      firstName: "Jean",
      title: "Garde malade pour personnes handicapées",
      description:
        "Service de nuit et jour avec spécialité dans les soins de handicap.",
      price: 4500,
      sector: "Oran",
      image: "/test.webp",
      phone: "+213555654321",
    },
    {
      id: "5",
      name: "Marie Dupont",
      firstName: "Marie",
      title: "Garde malade pour personnes âgées",
      description:
        "Disponible 24/7 avec une longue expérience. Disponible 24/7 avec une longue expérience.",
      price: 5000,
      sector: "Alger",
      image: "/test2.jpg",
      phone: "+213555123456",
    },
    {
      id: "6",
      name: "Jean Martin",
      firstName: "Jean",
      title: "Garde malade pour personnes handicapées",
      description:
        "Service de nuit et jour avec spécialité dans les soins de handicap.",
      price: 4500,
      sector: "Oran",
      image: "/test.webp",
      phone: "+213555654321",
    },
    {
      id: "7",
      name: "Marie Dupont",
      firstName: "Marie",
      title: "Garde malade pour personnes âgées",
      description:
        "Disponible 24/7 avec une longue expérience. Disponible 24/7 avec une longue expérience.",
      price: 5000,
      sector: "Alger",
      image: "/test2.jpg",
      phone: "+213555123456",
    },
    {
      id: "8",
      name: "Jean Martin",
      firstName: "Jean",
      title: "Garde malade pour personnes handicapées",
      description:
        "Service de nuit et jour avec spécialité dans les soins de handicap.",
      price: 4500,
      sector: "Oran",
      image: "/test.webp",
      phone: "+213555654321",
    },
    {
      id: "9",
      name: "Marie Dupont",
      firstName: "Marie",
      title: "Garde malade pour personnes âgées",
      description:
        "Disponible 24/7 avec une longue expérience. Disponible 24/7 avec une longue expérience.",
      price: 5000,
      sector: "Alger",
      image: "/test2.jpg",
      phone: "+213555123456",
    },
    {
      id: "10",
      name: "Jean Martin",
      firstName: "Jean",
      title: "Garde malade pour personnes handicapées",
      description:
        "Service de nuit et jour avec spécialité dans les soins de handicap.",
      price: 4500,
      sector: "Oran",
      image: "/test.webp",
      phone: "+213555654321",
    },
    {
      id: "11",
      name: "Marie Dupont",
      firstName: "Marie",
      title: "Garde malade pour personnes âgées",
      description:
        "Disponible 24/7 avec une longue expérience. Disponible 24/7 avec une longue expérience.",
      price: 5000,
      sector: "Alger",
      image: "/test2.jpg",
      phone: "+213555123456",
    },
    {
      id: "12",
      name: "Jean Martin",
      firstName: "Jean",
      title: "Garde malade pour personnes handicapées",
      description:
        "Service de nuit et jour avec spécialité dans les soins de handicap.",
      price: 4500,
      sector: "Oran",
      image: "/test.webp",
      phone: "+213555654321",
    },
    {
      id: "13",
      name: "Marie Dupont",
      firstName: "Marie",
      title: "Garde malade pour personnes âgées",
      description:
        "Disponible 24/7 avec une longue expérience. Disponible 24/7 avec une longue expérience.",
      price: 5000,
      sector: "Alger",
      image: "/test2.jpg",
      phone: "+213555123456",
    },
    {
      id: "14",
      name: "Jean Martin",
      firstName: "Jean",
      title: "Garde malade pour personnes handicapées",
      description:
        "Service de nuit et jour avec spécialité dans les soins de handicap.",
      price: 4500,
      sector: "Oran",
      image: "/test.webp",
      phone: "+213555654321",
    },
    {
      id: "15",
      name: "Marie Dupont",
      firstName: "Marie",
      title: "Garde malade pour personnes âgées",
      description:
        "Disponible 24/7 avec une longue expérience. Disponible 24/7 avec une longue expérience.",
      price: 5000,
      sector: "Alger",
      image: "/test2.jpg",
      phone: "+213555123456",
    },
    {
      id: "16",
      name: "Jean Martin",
      firstName: "Jean",
      title: "Garde malade pour personnes handicapées",
      description:
        "Service de nuit et jour avec spécialité dans les soins de handicap.",
      price: 4500,
      sector: "Oran",
      image: "/test.webp",
      phone: "+213555654321",
    },
  ];

  const filteredOffers = offers.filter((offer) => {
    const matchesWilaya = selectedWilaya === "" || offer.sector === selectedWilaya;
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
     <FilterComponent
        selectedWilaya={selectedWilaya}
        setSelectedWilaya={setSelectedWilaya}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        wilayas={wilayas}
      />

      {filteredOffers.length === 0 ? (
        <p className={styles.noOffersText}>{t("no_offers_found")}</p>
      ) : (
        <div className={styles.offerList}>
          {filteredOffers.map((item) => (
            <OfferCard key={item.id} offer={item} onClick={() => openModal(item)} />
          ))}
        </div>
      )}

      {modalVisible && selectedOffer && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <Image
              src={selectedOffer.image}
              alt={selectedOffer.title}
              width={300}
              height={200}
              className={styles.modalImage}
            />
            <div
              className={`${styles.modalFields} ${i18n.language === "ar" ? styles.rtl : styles.ltr
                }`}
            >
              <h3>{selectedOffer.title}</h3>
              <p>
                <strong>{t("name")}:</strong> {selectedOffer.name}
              </p>
              <p>
                <strong>{t("first_name")}:</strong> {selectedOffer.firstName}
              </p>
              <p>
                <strong>{t("description")}:</strong> {selectedOffer.description}
              </p>
              <p>
                <strong>{t("price")}:</strong> {selectedOffer.price} DA/jour
              </p>
              <p>
                <strong>{t("sector")}:</strong> {selectedOffer.sector}
              </p>
            </div>
            <button className={styles.callButton} onClick={() => window.open(`tel:${selectedOffer.phone}`)}>
              {t('call_button')} {/* Traduction du bouton "Appeler" */}
            </button>
            <button className={styles.closeButton} onClick={closeModal}>
              {t('close_button')} {/* Traduction du bouton "Fermer" */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
