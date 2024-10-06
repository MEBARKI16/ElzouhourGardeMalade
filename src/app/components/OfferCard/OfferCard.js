import React from 'react';
import Image from 'next/image';
import styles from './OfferCard.module.css';

const OfferCard = ({ offer, onClick }) => {
  return (
    <div className={styles.offerCard} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <Image src={offer.image} alt={offer.title} width={200} height={150} />
      </div>
      <h3 className={styles.offerTitle}>{offer.title}</h3>
      <p className={styles.offerDescription}>{offer.description}</p>
      <p className={styles.offerPrice}>{offer.price} DA/jour</p>
    </div>
  );
};

export default OfferCard;
