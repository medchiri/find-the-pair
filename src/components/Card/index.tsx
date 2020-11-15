import React from 'react';

import { CardWrapper } from './style';

export interface CardShape {
  id: string;
  src: string;
}

interface Props {
  data: CardShape;
  isOpened: boolean;
  isSuccess: boolean;
  onClick(): void;
}

function Card({ data, isOpened, isSuccess, onClick }: Props) {
  const { src, id } = data;

  return (
    <CardWrapper id={id} onClick={onClick} isOpened={isOpened} isSuccess={isSuccess}>
      <div className="image-wrapper">
        <img src={src} alt="" />
      </div>
    </CardWrapper>
  );
}

export default Card;
