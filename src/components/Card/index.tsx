import React from 'react';

import { CardWrapper } from './style';

export interface CardShape {
  id: string;
  img: {
    src: string;
    alt: string;
  };
}

interface Props {
  data: CardShape;
  isOpened: boolean;
  isSuccess: boolean;
  onClick(): void;
}

function Card({ data, isOpened, isSuccess, onClick }: Props) {
  const { img, id } = data;

  return (
    <CardWrapper id={id} onClick={onClick} isOpened={isOpened || isSuccess}>
      <img {...img} />
    </CardWrapper>
  );
}

export default Card;
