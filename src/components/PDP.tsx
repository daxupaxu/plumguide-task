import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import PDPHeader from './PDPHeader';

const Page = styled.section`
  background: linear-gradient(
    0deg,
    rgba(249, 249, 249, 1) 15%,
    rgba(246, 221, 209, 1) 15%,
    rgba(246, 221, 209, 1) 100%
  );
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export type Product = {
  title: string;
  placeDetails: {
    capacity: string;
    rooms: string;
    bathrooms: string;
    specials: string;
    surrounding: string;
  };
  location: {
    city: string;
    approach: string;
    accesibility: string;
  };
};

type Props = {
  images: string[];
  product: Product;
};

const PDP = ({ images, product }: Props) => {
  return (
    <Page>
      <PDPHeader productDetails={product} />
      <Carousel images={images} />
      {/* here would come descriptions of the product rentals, location etc. */}
    </Page>
  );
};

export default PDP;
