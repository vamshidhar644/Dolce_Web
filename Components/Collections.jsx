import React from 'react'
import styles from '../styles/Collections.module.css'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Collections = ({collectionscards : {name, slug, cardImage, cardText}}) => {
  return ( 
    <div className={styles.CollectionsCard}> 
      <Link href={`/collection/${slug.current}`}>
        <div className={styles.CardImage}>
          <img 
              src={urlFor(cardImage && cardImage[0])}
            />
        </div>
          <p className={styles.p}>{cardText}</p>
      </Link>     
    </div>
  )
}

export default Collections
