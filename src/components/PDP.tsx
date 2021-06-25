import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import PDPHeader from './PDPHeader';

const Page = styled.section`
  background: rgb(249, 249, 249);
  background: linear-gradient(
    0deg,
    rgba(249, 249, 249, 1) 0%,
    rgba(246, 221, 209, 1) 11%,
    rgba(246, 221, 209, 1) 100%
  );
  display: flex;
  flex-flow: column;
  align-items: center;
`;

type Props = {
  images: string[];
};

const PDP = ({ images }: Props) => {
  return (
    <Page>
      <PDPHeader />
      <Carousel images={images} />
    </Page>
  );
};

export default PDP;
