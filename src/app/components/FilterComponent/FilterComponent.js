import React from 'react';
import styles from './FilterComponent.module.css'; 
import { useTranslation } from 'react-i18next'; 

const FilterComponent = ({ selectedWilaya, setSelectedWilaya, priceFilter, setPriceFilter, wilayas, filters, setFilters }) => {
  const { t } = useTranslation();

  // Gestion des filtres pour sexe et disponibilité
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  return (
    <div className={styles.filtersContainer}>
      {/* Wilaya Filter */}
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

      {/* Price Filter */}
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

    {/* Gender Filter */}
<div className={styles.checkboxContainer}>
  <label>
    <input
      type="checkbox"
      name="homme"
      checked={filters.homme}
      onChange={handleCheckboxChange}
    />
    {t("gender_male")}
  </label>
  <label>
    <input
      type="checkbox"
      name="femme"
      checked={filters.femme}
      onChange={handleCheckboxChange}
    />
    {t("gender_female")}
  </label>
</div>

{/* Availability Filter */}
<div className={styles.checkboxContainer}>
  <label>
    <input
      type="checkbox"
      name="jour"
      checked={filters.jour}
      onChange={handleCheckboxChange}
    />
    {t("available_day")}
  </label>
  <label>
    <input
      type="checkbox"
      name="nuit"
      checked={filters.nuit}
      onChange={handleCheckboxChange}
    />
    {t("available_night")}
  </label>
</div>


      {/* Clear Filters Button */}
      <button
        className={styles.clearButton}
        onClick={() => {
          setSelectedWilaya("");
          setPriceFilter(10000);
          setFilters({ homme: true, femme: true, jour: true, nuit: true });
        }}
      >
        {t("clear_filters")}
      </button>
    </div>
  );
};

export default FilterComponent;
