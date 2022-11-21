import React from 'react'
import styles from '../styles/Localities.module.css'
import Link from 'next/link'
import {GoPrimitiveDot} from 'react-icons/go'

const Localities = ({locality: {place, slug, noOfPlaces}}) => {
  return (
    <div className={styles.LocalitiesCard}> 
      <Link href={`/locality/${slug.current}`}>
        <div className={styles.p}>
          <p >{place} <GoPrimitiveDot className={styles.dot}/> <span>{noOfPlaces}</span> Places</p>
        </div>
      </Link>     
    </div>
  )
}

export default Localities
