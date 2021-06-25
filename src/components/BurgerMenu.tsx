import React, { useState } from 'react';
import styled from 'styled-components';

type Props = {
  open?: boolean;
};

const StyledBurger = styled.div<Props>`
  display: flex;
  justify-content: space-evenly;
  flex-flow: column;
  width: 2rem;
  height: 2.5rem;
  padding: 0.625rem;
  div {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.2s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};

export default BurgerMenu;
