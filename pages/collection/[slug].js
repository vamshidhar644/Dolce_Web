import React from 'react';
import { client } from '../../lib/client';

const CardDetails = ({ CollectionCard }) => {
  return (
    <div className="card-detail-container">
      <h1>{CollectionCard.cardText}</h1>
    </div>
  );
};

export const getStaticPaths = async () => {
  const Homequery = `*[_type == "CollectionCards"]{slug{current}}`;

  const HomeCards = await client.fetch(Homequery);

  const paths = HomeCards.map((HomeCards) => ({
    params: {
      slug: HomeCards.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const CollectionCardQuery = `*[_type == "CollectionCards" && slug.current == '${slug}'][0]`;

  const CollectionCard = await client.fetch(CollectionCardQuery);
  return {
    props: { CollectionCard },
  };
};

export default CardDetails;
