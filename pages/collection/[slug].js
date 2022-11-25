import React from 'react';
import { client, urlFor } from '../../lib/client';
import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai'

const CardDetails = ({ CollectionCard }) => {
  const { cardImage, cardText, details, price } = CollectionCard;
  return (
    <div className="product-detail-container">
      <div>
        <div className="image-container">
          <img src={urlFor(cardImage && cardImage[0])} />
        </div>
      </div>
      <div className="product-detail-desc">
        <h1>{cardText}</h1>
        <h4>Details: </h4>
        <p>{details}</p>
        <p className='price'>Rs. {price}.00</p>
        <div className='quantity'>
                <h3>Quantity:</h3>
                <select className='number'>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
            </div>
            <div className='buttons'>
                <button type='button' className='add-to-cart' >Add to cart</button>
                <button type='button' className='buy-now'>Buy now</button>
            </div>
      </div>
      {/* <h1>{cardText}</h1> */}
    </div>
  );
};

export const getStaticPaths = async () => {
  const Homequery = `*[_type == "CollectionCards"]{slug{current}}`;

  const HomeCards = await client.fetch(Homequery);
  const paths = HomeCards.map((HomeCards) => ({
    params: { slug: HomeCards.slug.current },
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
