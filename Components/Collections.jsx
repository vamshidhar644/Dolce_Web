import React from 'react';
import styles from '../styles/Collections.module.css';
import Link from 'next/link';
import { urlFor } from '../dolce/lib/client';

const Collections = ({
  collectionscards: { price, slug, cardImage, cardText },
}) => {
  return (
    <div className={styles.CollectionsCard}>
      <Link href={`/collection/${slug.current}`}>
        <div className={styles.CardImage}>
          <img src={urlFor(cardImage && cardImage[0])} />
        </div>
        <p className={styles.p}>{cardText}</p>
        <p className={styles.price}>Rs. {price}</p>
      </Link>
      {/* {console.log(price)}  */}
    </div>
  );
};

export default Collections;
