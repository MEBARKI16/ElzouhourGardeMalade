import React from 'react';
import styles from './FilterComponent.module.css'; // Importer le fichier CSS pour le style
import { useTranslation } from 'react-i18next'; // Pour la traduction

const FilterComponent = ({ selectedWilaya, setSelectedWilaya, priceFilter, setPriceFilter,wilayas }) => {
  const { t } = useTranslation(); 

  return (
    <div className={styles.filtersContainer}>
    <div className={styles.pickerContainer}>
      <select
        value={selectedWilaya}
        onChange={(e) => setSelectedWilaya(e.target.value)}
        className={styles.picker}
      >
        <option value="">{t("select_wilaya")}</option>
        {wilayas.map((wilaya) => (
          <option key={wilaya.value} value={wilaya.value}>
            {wilaya.label}
          </option>
        ))}
      </select>
    </div>
    <div className={styles.sliderContainer}>
      <label className={styles.sliderLabel}>
        {t("price_maximum")} : {priceFilter} DA
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
        setSelectedWilaya("");
        setPriceFilter(10000);
      }}
    >
      {t("clear_filters")}
    </button>
  </div>
  );
};

export default FilterComponent;
