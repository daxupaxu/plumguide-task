/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import { calculatePriceForTotalNights } from '../utils/calculatePriceForTotalNights';
import ListArrow from '../assets/arrow-down.svg';

const Container = styled.section`
  display: flex;
  flex-flow: column;
  margin: 1.25rem;
  ${({ theme }) => theme.media.tablet} {
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
  } ;
`;
const BookingDetailContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0.625rem;
  ${({ theme }) => theme.media.tablet} {
    border-left: 1px solid ${({ theme }) => theme.colors.border};
    &:first-child {
      border: 0;
    }
    padding: 1.25rem;
  } ;
`;
const BookingDetailHeader = styled.span`
  color: gray;
`;
const BookingDetailContent = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.25rem;
`;
const BookingButton = styled.button`
  border: 0;
  padding: 1.25rem;
  background: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.media.tablet} {
    letter-spacing: 2px;
    transition: color 0.1s ease-in-out;
    &:hover {
      color: white;
    }
  } ;
`;
type BookingDetails = {
  rentFrame: string;
  guestsCount: number;
  pricePerNight: number;
  nightsCount: number;
};

type Props = {
  bookingDetails: BookingDetails;
};

const InstantBooking = ({ bookingDetails }: Props) => {
  const { rentFrame, guestsCount, pricePerNight, nightsCount } = bookingDetails;
  return (
    <Container>
      <BookingDetailContainer>
        <BookingDetailHeader>From / To</BookingDetailHeader>
        <BookingDetailContent>
          {rentFrame}
          <img
            src={ListArrow.src}
            alt="extend-list-arrow"
            width="24"
            height="24"
          />
        </BookingDetailContent>
      </BookingDetailContainer>
      <BookingDetailContainer>
        <BookingDetailHeader>For</BookingDetailHeader>
        <BookingDetailContent>
          {guestsCount === 1 ? `${guestsCount} Guest` : `${guestsCount} Guests`}
          <img
            src={ListArrow.src}
            alt="extend-list-arrow"
            width="24"
            height="24"
          />
        </BookingDetailContent>
      </BookingDetailContainer>
      <BookingDetailContainer>
        <BookingDetailHeader>£ Per night</BookingDetailHeader>
        <BookingDetailContent>{pricePerNight}</BookingDetailContent>
      </BookingDetailContainer>
      <BookingDetailContainer>
        <BookingDetailHeader>
          £ Total for{' '}
          {nightsCount === 1 ? `${nightsCount} night` : `${nightsCount} nights`}
        </BookingDetailHeader>
        <BookingDetailContent>
          {/* Obviosuly it's mocked here with the specific days count*/}
          {calculatePriceForTotalNights(pricePerNight, nightsCount)}
        </BookingDetailContent>
      </BookingDetailContainer>
      <BookingButton>INSTANT BOOKING</BookingButton>
    </Container>
  );
};

export default InstantBooking;
