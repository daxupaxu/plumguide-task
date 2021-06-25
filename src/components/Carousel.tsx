import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Arrow from '../assets/right-arrow.svg';
import getPopularImages from '../utils/getPopularImages';

type Props = {
  images: string[];
};

const CarouselContainer = styled.div`
  position: relative;
  max-width: 90%;
`;
const PreviousButton = styled.img`
  position: absolute;
  z-index: 2;
  top: 50%;
  padding: 1.25rem;
  transform: rotate(180deg);
`;
const RightContainer = styled.div`
  display: flex;
  flex-flow: row;
  padding: 1.25rem;
  position: absolute;
  top: 50%;
  right: 0;
`;

const NextButton = styled.img`
  top: 50%;
  right: 0;
  z-index: 2;
`;

const ImagesCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  min-width: 60px;
  min-height: 60px;
  margin: 0 0.625rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

const Carousel = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(1);
  const popularImages = getPopularImages(images, 30);
  return (
    <>
      <CarouselContainer>
        <PreviousButton
          alt="asd"
          src={Arrow.src}
          onClick={() =>
            setCurrentImage(
              currentImage === 0 ? popularImages.length - 1 : currentImage - 1
            )
          }
          width="48"
          height="48"
        />
        {popularImages &&
          popularImages.map((image: string, index) => {
            return (
              index === currentImage && (
                <Image
                  key={image}
                  src={image}
                  alt={image}
                  width="1920"
                  height="1080"
                />
              )
            );
          })}
        <RightContainer>
          <ImagesCount>
            {currentImage}/{popularImages.length}
          </ImagesCount>
          <NextButton
            alt="arrow-right"
            src={Arrow.src}
            onClick={() =>
              setCurrentImage(
                currentImage === popularImages.length - 1 ? 0 : currentImage + 1
              )
            }
            width="48"
            height="48"
          />
        </RightContainer>
      </CarouselContainer>
    </>
  );
};

export default Carousel;
