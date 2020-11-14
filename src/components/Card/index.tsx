import React from 'react';

import { CardWrapper } from './style';

interface Props {
  id: string;
  img: {
    src: string;
    alt: string;
  };
  onClick?(): void;
}

function Card({ img, id, onClick }: Props) {
  return (
    <CardWrapper id={id} onClick={onClick}>
      <img {...img} />
    </CardWrapper>
  );
}

export default Card;
