import React from 'react';
import styled from 'styled-components';

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

const BookingDetails = () => {
  return (
    <Container>
      <BookingDetailBox>
        <BookingDetailHeader>From / To</BookingDetailHeader>
        <BookingDetailContent>3 Jan 2020 - 28 Feb 2020</BookingDetailContent>
      </BookingDetailBox>
      <BookingDetailBox>
        <BookingDetailHeader>For</BookingDetailHeader>
        <BookingDetailContent>2 Guests</BookingDetailContent>
      </BookingDetailBox>
      <BookingDetailBox>
        <BookingDetailHeader>£ Per night</BookingDetailHeader>
        <BookingDetailContent>345</BookingDetailContent>
      </BookingDetailBox>
      <BookingDetailBox>
        <BookingDetailHeader>£ Total for 54 nights</BookingDetailHeader>
        <BookingDetailContent>18,630</BookingDetailContent>
      </BookingDetailBox>
      <BookingButton>INSTANT BOOKING</BookingButton>
    </Container>
  );
};

export default BookingDetails;
