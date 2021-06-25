/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import Train from '../assets/train.svg';
import Stairs from '../assets/stairs.svg';
import MapPointer from '../assets/placeholder.svg';
import { Product } from './PDP';

const PDPTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.headers.sm};
  font-weight: 100;
  margin: 2.5rem 0 1.25rem 0;
  ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSize.headers.md};
  } ;
`;
const PDPInfoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  ${({ theme }) => theme.media.tablet} {
    border: 0;
  } ;
`;
const PDPInfoItem = styled.span`
  padding: 1.25rem;
  color: ${({ theme }) => theme.colors.gray};
`;
const PDPLocationContainer = styled.div`
  ${({ theme }) => theme.media.tablet} {
    display: flex;
    margin: 1.25rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  } ;
`;
const PDPLocationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem;
  margin: 0.625rem;
  ${({ theme }) => theme.media.tablet} {
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    &:last-child {
      border: 0;
    }
  } ;
`;
const PDPLocationContent = styled.span`
  margin: 0.6225rem;
`;

type Props = {
  productDetails: Product;
};

const PDPHeader = ({ productDetails }: Props) => {
  const {
    title,
    placeDetails: { capacity, rooms, bathrooms, specials, surrounding },
    location: { city, approach, accesibility },
  } = productDetails;
  return (
    <>
      <PDPTitle>{title}</PDPTitle>
      <PDPInfoContainer>
        <PDPInfoItem>{capacity}</PDPInfoItem>
        <PDPInfoItem>{rooms}</PDPInfoItem>
        <PDPInfoItem>{bathrooms}</PDPInfoItem>
        <PDPInfoItem>{specials}</PDPInfoItem>
        <PDPInfoItem>{surrounding}</PDPInfoItem>
      </PDPInfoContainer>
      <PDPLocationContainer>
        <PDPLocationItem>
          <img width="24" height="24" src={MapPointer.src} alt="placeholder" />
          <PDPLocationContent>{city}</PDPLocationContent>
        </PDPLocationItem>
        <PDPLocationItem>
          <img width="24" height="24" src={Train.src} alt="placeholder" />
          <PDPLocationContent>{approach}</PDPLocationContent>
        </PDPLocationItem>
        <PDPLocationItem>
          <img width="24" height="24" src={Stairs.src} alt="placeholder" />
          <PDPLocationContent>{accesibility}</PDPLocationContent>
        </PDPLocationItem>
      </PDPLocationContainer>
    </>
  );
};

export default PDPHeader;
