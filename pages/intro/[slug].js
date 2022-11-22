import React from 'react'
import {client} from '../../lib/client';

const CardDetails = ({HomeCard}) => {
  
  return (
    <div className='card-detail-container'>        
        <h1>
          {HomeCard.cardText}
        </h1>
    </div>
  )
}

export const getStaticPaths = async () => {
    const Homequery = `*[_type == "cards"]{slug{current}}`;


    const HomeCards = await client.fetch(Homequery);

    const paths = HomeCards.map((HomeCards) => ({
      params: {
        slug: HomeCards.slug.current
      }}));

    return {
        paths,
        fallback: 'blocking'
    }
}
 
export const getStaticProps = async ({ params: 
    {slug}}) => {
    const HomeCardsQuery = `*[_type == "cards" && slug.current == '${slug}'][0]`; 

    const HomeCard = await client.fetch(HomeCardsQuery);
    return {
      props: {HomeCard}
    }
  }

export default CardDetails