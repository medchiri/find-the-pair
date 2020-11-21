import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import Template from 'src/components/Template';
import { CardShape } from 'src/components/Card';
import { Column, Container, Row } from 'src/components/Grid';
import Cards from './Cards';
import Aside from './Aside';

export type CardsType = CardShape[];

export interface OpenedCard {
  index: number;
  data: CardShape;
}

export interface SuccessCard {
  index: number;
  id: string;
}

export type OpenedCards = OpenedCard[];

export type SuccessCards = SuccessCard[];

function Home() {
  const [amount, setAmount] = useState(5);
  const [tries, setTries] = useState(0);
  const [cards, setCards] = useState<CardsType>([]);
  const [cardsOpen, setCardsOpen] = useState<OpenedCards>([]);
  const [cardsSuccess, setCardsSuccess] = useState<SuccessCards>([]);
  const timeoutId = useRef(-1);
  const isSuccess = cardsSuccess.length === cards.length;

  const createNewSession = (amount: number) => {
    const cards = Array.from(new Array(amount))
      .reduce((acc: CardsType, _, i: number) => {
        const card = {
          id: `${i + 1}`,
          src: `https://picsum.photos/300/300?random=${i + 1}`,
        };
        acc.push(card, card);
        return acc;
      }, [])
      .sort(() => Math.random() - 0.5);
    setCards(cards);
    setCardsOpen(cards.map((data, index) => ({ index, data })));
    setCardsSuccess([]);
    setTries(0);
    timeoutId.current = setTimeout(() => setCardsOpen([]), 5000);
  };

  useEffect(() => {
    createNewSession(amount);

    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [amount]);

  useEffect(() => {
    if (cardsOpen.length === 2) {
      setTries(prev => prev + 1);
      if (cardsOpen[0].data.id === cardsOpen[1].data.id) {
        setCardsSuccess(prev => [...prev, ...cardsOpen.map(e => ({ index: e.index, id: e.data.id }))]);
        setCardsOpen([]);
      } else {
        timeoutId.current = setTimeout(() => setCardsOpen([]), 1000);
      }
    }
  }, [cardsOpen]);

  const handleCardClick = (card: { index: number; data: CardShape }) => {
    if (cardsOpen.length < 2) {
      setCardsOpen(prev => [...prev, card]);
    }
  };

  const handleReset = () => createNewSession(amount);

  const handleAmountChange = (e: ChangeEvent<HTMLSelectElement>) => setAmount(parseFloat(e.target.value));

  const score = cardsSuccess.length / 2;

  return (
    <Template>
      <Container>
        <Row direction={{ xs: 'row', xl: 'row-reverse' }} gutter={{ xs: 0.5, xl: 3 }} withVerticalGutter>
          <Column value={{ xs: 12, xl: 3 }}>
            <Aside
              score={score}
              amount={amount}
              tries={tries}
              onRest={handleReset}
              onAmountChange={handleAmountChange}
            />
          </Column>
          <Column value={{ xs: 12, xl: 'col' }}>
            <Cards
              cards={cards}
              cardsOpen={cardsOpen}
              cardsSuccess={cardsSuccess}
              onCardClick={handleCardClick}
              onRest={handleReset}
              isSuccess={isSuccess}
              tries={tries}
            />
          </Column>
        </Row>
      </Container>
    </Template>
  );
}

export default Home;
