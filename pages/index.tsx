import { GetStaticProps } from 'next';
import React from 'react';
import InstantBooking from '../src/components/InstantBooking';
import Layout from '../src/components/Layout';
import PDP from '../src/components/PDP';

const productMock = {
  title: 'Monsieur Didot',
  placeDetails: {
    capacity: '4 people',
    rooms: '2 bedrooms',
    bathrooms: '2 bathrooms',
    specials: 'Private terrase',
    surrounding: 'Peaceful',
  },
  location: {
    city: 'Nothing Hill, London',
    approach: 'Walk 6 mins (Westbourne Park Station)',
    accesibility: 'Stairs',
  },
};

const bookingMock = {
  rentFrame: '3 Jan 2020 - 28 Feb 2020',
  guestsCount: 2,
  pricePerNight: 345,
  nightsCount: 54,
};

type Props = {
  data: {
    id: number;
    imageUrls: string[];
  };
};
// It would be actually PDP page handled in [slug]
const PDPage = ({ data }: Props) => {
  const pathToSplit = 'https://static.plumcache.com/';
  const extractedImagePaths = data.imageUrls.map((paths: any) => {
    return paths.replace(pathToSplit, '');
  });
  return (
    <Layout title="Product Page">
      <InstantBooking bookingDetails={bookingMock} />
      <PDP images={extractedImagePaths} product={productMock} />
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const res = await fetch('https://www.plumguide.com/Listing/Photos?id=2591');
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default PDPage;
