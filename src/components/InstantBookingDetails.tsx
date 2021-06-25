import React from 'react';
import styled from 'styled-components';
import { calculatePriceForTotalNights } from '../utils/calculatePriceForTotalNights';

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
const BookingDetailBox = styled.div`
  display: flex;
  padding: 0.625rem;
  flex-flow: column;
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
const BookingDetailContent = styled.span`
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

const InstantBookingDetails = ({ bookingDetails }: Props) => {
  const { rentFrame, guestsCount, pricePerNight, nightsCount } = bookingDetails;
  return (
    <Container>
      <BookingDetailBox>
        <BookingDetailHeader>From / To</BookingDetailHeader>
        <BookingDetailContent>{rentFrame} </BookingDetailContent>
      </BookingDetailBox>
      <BookingDetailBox>
        <BookingDetailHeader>For</BookingDetailHeader>
        <BookingDetailContent>
          {guestsCount === 1 ? `${guestsCount} Guest` : `${guestsCount} Guests`}
        </BookingDetailContent>
      </BookingDetailBox>
      <BookingDetailBox>
        <BookingDetailHeader>£ Per night</BookingDetailHeader>
        <BookingDetailContent>{pricePerNight}</BookingDetailContent>
      </BookingDetailBox>
      <BookingDetailBox>
        <BookingDetailHeader>
          £ Total for{' '}
          {nightsCount === 1 ? `${nightsCount} night` : `${nightsCount} nights`}
        </BookingDetailHeader>
        <BookingDetailContent>
          {/* Obviosuly it's mocked here with the specific days count*/}
          {calculatePriceForTotalNights(pricePerNight, nightsCount)}
        </BookingDetailContent>
      </BookingDetailBox>
      <BookingButton>INSTANT BOOKING</BookingButton>
    </Container>
  );
};

export default InstantBookingDetails;
