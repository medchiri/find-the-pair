import React, { ReactElement } from 'react';

import Button from 'src/components/Button';
import Card, { CardShape } from 'src/components/Card';
import { Column, Row } from 'src/components/Grid';
import { CardsType, OpenedCards, SuccessCards } from '..';
import { CardsWrapper, SuccessMessage } from './style';

interface Props {
  cards: CardsType;
  cardsOpen: OpenedCards;
  cardsSuccess: SuccessCards;
  isSuccess: boolean;
  tries: number;
  onCardClick(card: { index: number; data: CardShape }): void;
  onRest(): void;
}

function Cards({ cards, onCardClick, cardsOpen, cardsSuccess, isSuccess, tries, onRest }: Props): ReactElement {
  return (
    <CardsWrapper>
      <SuccessMessage isSuccess={isSuccess}>
        <p>
          Congratulations! You have found all the pairs in <strong>{tries}</strong> tries.
        </p>
        <Button onClick={onRest}>Play again!</Button>
      </SuccessMessage>
      <Row gutter={{ xs: '2px', md: '5px' }} justifyContent="center" withVerticalGutter>
        {cards.map((data, i) => {
          const isOpened = cardsOpen.some(e => e.index === i);
          const isSuccess = cardsSuccess.some(e => e.id === data.id && e.index === i);
          return (
            <Column key={i}>
              <Card
                data={data}
                isOpened={isOpened}
                isSuccess={isSuccess}
                onClick={() => !isOpened && !isSuccess && onCardClick({ index: i, data })}
              />
            </Column>
          );
        })}
      </Row>
    </CardsWrapper>
  );
}

export default Cards;
