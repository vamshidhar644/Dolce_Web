import Head from 'next/head';

import {
  Intro,
  Collections,
  Localities,
  GetApp,
  OtherOptions,
} from '../Components/index';

import React from 'react';
import { client } from '../lib/client';

const Home = ({
  IntroData,
  HomeCardsData,
  LocalitiesData,
  CollectionsData,
  CollectionCardData,
}) => {
  return (
    <div>
      <Head>
        <title>Dolce</title>
        <meta name="description" content="Generated by Create Vlaunch app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <div className="Home">
        <h1 className={'title'}>DOLCE</h1>
        <p>
          {IntroData[0].subtitle}
          <span className={'city'}> Hyderabad</span>
        </p>
        <div className="HomeCardsContainer">
          {HomeCardsData?.map((homecards) => (
            <Intro key={homecards._id} homecards={homecards} />
          ))}
        </div>
      </div>

      <div className="CollectionsContainer">
        <div className="CollectionsHeader">
          <h1 className="CollectionTitle">Popular dolces</h1>
          <p className="CollectionSubtitle">{CollectionsData[0].subtitle}</p>
          <hr />
        </div>

        <div className="CollectionsBody">
          {CollectionCardData?.map((collectionscards) => (
            <Collections
              key={collectionscards._id}
              collectionscards={collectionscards}
            />
          ))}
        </div>
      </div>

      <h1 className="LocailtyHeader">
        Popular Localities in and around Hyderabad
      </h1>
      <div className="localitiesContainer">
        {LocalitiesData?.map((locality) => (
          <Localities key={locality._id} locality={locality} />
        ))}
      </div>
      {/* {console.log(CollectionCardData[0])} */}
      {/* {console.log(LocalitiesData)} */}
      <GetApp />
      <OtherOptions />
    </div>
  );
};

export const getServerSideProps = async () => {
  const IntroQuery = `*[_type == "home"]`;
  const IntroData = await client.fetch(IntroQuery);

  const HomeCardsQuery = `*[_type == "cards"]`;
  const HomeCardsData = await client.fetch(HomeCardsQuery);

  const CollectionsQuery = `*[_type == "collections"]`;
  const CollectionsData = await client.fetch(CollectionsQuery);

  const CollectionCardQuery = `*[_type == "CollectionCards"]`;
  const CollectionCardData = await client.fetch(CollectionCardQuery);

  const LocalityQuery = `*[_type == "localities"]`;
  const LocalitiesData = await client.fetch(LocalityQuery);

  return {
    props: {
      IntroData,
      HomeCardsData,
      LocalitiesData,
      CollectionsData,
      CollectionCardData,
    },
  };
};

export default Home;
