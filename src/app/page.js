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
  const [filters, setFilters] = useState({ homme: true, femme: true, jour: true, nuit: true });
  const { t, i18n } = useTranslation();
  const offers = [
    {
      id: "1",
      name: "Mebarki",
      firstName: "Amine",
      title: "Garde malade pour personnes âgées",
      DetailDispo: "Disponible toute la semaine jour et nuit sauf le weekend",
      sexe: "homme",
      jour: true,
      nuit: true,
      age: 30,
      anneeExperience: 5,
      description: "Disponible 24/7 avec une longue expérience. Disponible 24/7 avec une longue expérience.",
      price: 5000,
      sector: "Alger",
      image: "/t3.jpg",
      phone: "+213555123456",
    },
    {
      id: "12",
      name: "Fatima Zouaoui",
      firstName: "Fatima",
      title: "Garde malade pour enfants",
      DetailDispo: "Disponible du samedi au mercredi de 10h à 16h",
      sexe: "femme",
      jour: true,
      nuit: false,
      age: 25,
      anneeExperience: 3,
      description: "Expérience avec les enfants en bas âge, spécialisée dans les soins post-opératoires.",
      price: 3800,
      sector: "Constantine",
      image: "/t12.jpg",
      phone: "+213555987654",
    },
    {
      id: "2",
      name: "Nora Benhamida",
      firstName: "Nora",
      title: "Garde malade pour enfants",
      DetailDispo: "Disponible du dimanche au jeudi de 8h à 18h",
      sexe: "femme",
      jour: true,
      nuit: false,
      age: 35,
      anneeExperience: 7,
      description: "Spécialisée dans la garde d'enfants malades, expérience avec les enfants en bas âge.",
      price: 4500,
      sector: "Oran",
      image: "/t2.jpg",
      phone: "+213555654321",
    },
    {
      id: "3",
      name: "Amine Khelil",
      firstName: "Amine",
      title: "Garde malade pour personnes handicapées",
      DetailDispo: "Disponible les nuits en semaine uniquement",
      sexe: "homme",
      jour: false,
      nuit: true,
      age: 40,
      anneeExperience: 10,
      description: "Spécialiste dans les soins pour personnes handicapées, formé en assistance médicale.",
      price: 6000,
      sector: "Constantine",
      image: "/t1.jpg",
      phone: "+213557123789",
    },
    {
      id: "4",
      name: "Fatima Bouchareb",
      firstName: "Fatima",
      title: "Garde malade pour personnes âgées",
      DetailDispo: "Disponible du lundi au samedi, jour uniquement",
      sexe: "femme",
      jour: true,
      nuit: false,
      age: 45,
      anneeExperience: 15,
      description: "Longue expérience avec les personnes âgées, soins personnalisés et assistance à domicile.",
      price: 5500,
      sector: "Sétif",
      image: "/t4.jpg",
      phone: "+213555987654",
    },
    {
      id: "13",
      name: "Leila Bouzid",
      firstName: "Leila",
      title: "Garde malade pour personnes âgées",
      DetailDispo: "Disponible du lundi au vendredi de 9h à 17h",
      sexe: "femme",
      jour: true,
      nuit: false,
      age: 28,
      anneeExperience: 5,
      description: "Spécialisée dans la prise en charge des personnes âgées avec des soins spécifiques.",
      price: 4000,
      sector: "Alger",
      image: "/t13.jpg",
      phone: "+213555123456",
    },
    {
      id: "5",
      name: "Sofiane Mahfoud",
      firstName: "Sofiane",
      title: "Garde malade pour personnes en rééducation",
      DetailDispo: "Disponible tous les jours sauf le vendredi",
      sexe: "homme",
      jour: true,
      nuit: true,
      age: 33,
      anneeExperience: 8,
      description: "Accompagnement personnalisé pour la rééducation, assistance jour et nuit.",
      price: 7000,
      sector: "Blida",
      image: "/t6.jpg",
      phone: "+213556321789",
    },
    {
      id: "6",
      name: "Yasmina Lounis",
      firstName: "Yasmina",
      title: "Garde malade pour enfants",
      DetailDispo: "Disponible en journée de 8h à 17h",
      sexe: "femme",
      jour: true,
      nuit: false,
      age: 28,
      anneeExperience: 4,
      description: "Expérience avec les enfants malades et personnes en convalescence.",
      price: 4000,
      sector: "Annaba",
      image: "/t5.jpg",
      phone: "+213558987456",
    },
    {
      id: "7",
      name: "Mohamed Said",
      firstName: "Mohamed",
      title: "Garde malade pour personnes âgées",
      DetailDispo: "Disponible en soirée et les nuits",
      sexe: "homme",
      jour: false,
      nuit: true,
      age: 50,
      anneeExperience: 20,
      description: "Spécialisé dans les soins de nuit pour personnes âgées en perte d'autonomie.",
      price: 4800,
      sector: "Tlemcen",
      image: "/t8.jpg",
      phone: "+213555987321",
    },
    {
      id: "8",
      name: "Amina Chérif",
      firstName: "Amina",
      title: "Garde malade pour personnes handicapées",
      DetailDispo: "Disponible 24/7",
      sexe: "femme",
      jour: true,
      nuit: true,
      age: 37,
      anneeExperience: 9,
      description: "Assistance médicale et accompagnement des personnes handicapées, disponible à toute heure.",
      price: 6200,
      sector: "Oran",
      image: "/t7.jpg",
      phone: "+213555654987",
    },
    {
      id: "9",
      name: "Rachid Mansour",
      firstName: "Rachid",
      title: "Garde malade pour rééducation post-opératoire",
      DetailDispo: "Disponible tous les jours sauf le dimanche",
      sexe: "homme",
      jour: true,
      nuit: false,
      age: 42,
      anneeExperience: 12,
      description: "Expert en rééducation post-opératoire, soins à domicile et suivi médical.",
      price: 7500,
      sector: "Alger",
      image: "/t9.jpg",
      phone: "+213557654321",
    },
    {
      id: "10",
      name: "Khadija Bouzid",
      firstName: "Khadija",
      title: "Garde malade pour enfants",
      DetailDispo: "Disponible uniquement les matins du lundi au vendredi",
      sexe: "femme",
      jour: true,
      nuit: false,
      age: 32,
      anneeExperience: 6,
      description: "Accompagnement des enfants malades, spécialisée en soins pédiatriques.",
      price: 5200,
      sector: "Constantine",
      image: "/t10.jpg",
      phone: "+213555123789",
    },
    {
      id: "11",
      name: "Sabrina Kacem",
      firstName: "Sabrina",
      title: "Garde malade pour adultes",
      DetailDispo: "Disponible du dimanche au jeudi de 8h à 19h",
      sexe: "femme",
      jour: true,
      nuit: false,
      age: 23,
      anneeExperience: 2,
      description: "Compétente dans la prise en charge des malades chroniques, avec une expérience en soins à domicile.",
      price: 3500,
      sector: "Annaba",
      image: "/t11.jpg",
      phone: "+213555765432",
    }
  ];
  // Filter Logic
  const filteredOffers = offers.filter((offer) => {
    const matchesWilaya = selectedWilaya === "" || offer.sector === selectedWilaya;
    const matchesPrice = offer.price <= priceFilter;
    const matchesGender = (filters.homme && offer.sexe === "homme") || (filters.femme && offer.sexe === "femme");
    const matchesAvailability = (filters.jour && offer.jour) || (filters.nuit && offer.nuit);
    return matchesWilaya && matchesPrice && matchesGender && matchesAvailability;
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
        filters={filters}
        setFilters={setFilters}
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
                <strong>{t("age")}:</strong> {selectedOffer.age} {t('years_old')}
              </p>
              <p>
                <strong>{t("experience")}:</strong> {selectedOffer.anneeExperience} {t('years_experience')}
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
              <p>
                <strong>{t("availability")}:</strong>{" "}
                {selectedOffer.jour && selectedOffer.nuit
                  ? t("available_day_night")
                  : selectedOffer.jour
                    ? t("available_day")
                    : t("available_night")}
              </p>
              <p>
                <strong>{t("DetailDispo")}:</strong> {selectedOffer.DetailDispo}
              </p>
            </div>
            <button className={styles.callButton} onClick={() => window.open(`tel:${selectedOffer.phone}`)}>
              {t('call_button')}
            </button>
            <button className={styles.closeButton} onClick={closeModal}>
              {t('close_button')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;