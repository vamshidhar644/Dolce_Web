import React from 'react'
import styles from '../styles/Intro.module.css' 
import Link from 'next/link'
import { urlFor } from '../lib/client'
 
const Intro = ({homecards: {name, slug, cardImage, cardText}}) => {
  return (
    <div className={styles.HomeCards}> 
      <Link href={`/intro/${slug.current}`}>
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


export default Intro
