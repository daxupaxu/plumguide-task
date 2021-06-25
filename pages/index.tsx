import { GetStaticProps } from 'next';
import React from 'react';
import BookingDetails from '../src/components/BookingDetails';
import Layout from '../src/components/Layout';
import PDP from '../src/components/PDP';

type Props = {
  data: {
    id: number;
    imageUrls: string[];
  };
};

const Home = ({ data }: Props) => {
  const pathToSplit = 'https://static.plumcache.com/';
  const { imageUrls } = data;
  const extractedImagePaths = imageUrls.map((paths: any) => {
    return paths.replace(pathToSplit, '');
  });
  return (
    <Layout title="Home Page | Plum Guide">
      <BookingDetails />
      <PDP images={extractedImagePaths} />
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

export default Home;
