/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import Train from '../assets/train.svg';
import Stairs from '../assets/stairs.svg';
import MapPointer from '../assets/placeholder.svg';

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

const PDPHeader = () => {
  return (
    <>
      <PDPTitle>Monsieur Didot</PDPTitle>
      <PDPInfoContainer>
        <PDPInfoItem>4 people</PDPInfoItem>
        <PDPInfoItem>2 bedrooms</PDPInfoItem>
        <PDPInfoItem>2 bathrooms</PDPInfoItem>
        <PDPInfoItem>Private terrase</PDPInfoItem>
        <PDPInfoItem>Peaceful</PDPInfoItem>
      </PDPInfoContainer>
      <PDPLocationContainer>
        <PDPLocationItem>
          <img width="24" height="24" src={MapPointer.src} alt="placeholder" />
          <PDPLocationContent>Notthing Hill, London</PDPLocationContent>
        </PDPLocationItem>
        <PDPLocationItem>
          <img width="24" height="24" src={Train.src} alt="placeholder" />
          <PDPLocationContent>
            Walk 6 mins (Westbourne Park Station)
          </PDPLocationContent>
        </PDPLocationItem>
        <PDPLocationItem>
          <img width="24" height="24" src={Stairs.src} alt="placeholder" />
          <PDPLocationContent>Stairs</PDPLocationContent>
        </PDPLocationItem>
      </PDPLocationContainer>
    </>
  );
};

export default PDPHeader;
