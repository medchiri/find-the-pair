import React, { useEffect, useRef, useState } from 'react';

import Template from 'src/components/Template';
import Card, { CardShape } from 'src/components/Card';
import { Column, Container, Row } from 'src/components/Grid';
import Button from 'src/components/Button';
import Select from 'src/components/Select';
import { Cards } from './style';

type CardsType = CardShape[];
interface OpenedCard {
  index: number;
  data: CardShape;
}
interface SuccessCard {
  index: number;
  id: string;
}
type OpenedCards = OpenedCard[];

function Home() {
  const [amount, setAmount] = useState(5);
  const [tries, setTries] = useState(0);
  const [cards, setCards] = useState<CardsType>([]);
  const [cardsOpen, setCardsOpen] = useState<OpenedCards>([]);
  const [cardsSuccess, setCardsSuccess] = useState<SuccessCard[]>([]);
  const timeoutId = useRef(-1);

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

  const score = cardsSuccess.length / 2;

  return (
    <Template>
      <Container>
        <Row justifyContent="space-between">
          <Column>
            <p>
              Score: {score} / {amount}
            </p>
            <p>Tries: {tries}</p>
          </Column>
          <Column>
            <Select value={`${amount}`} onChange={e => setAmount(parseFloat(e.target.value))}>
              {Array.from(new Array(11), (_, i) => i + 5).map(v => (
                <option value={v} key={v}>
                  {v}
                </option>
              ))}
            </Select>
            <Button onClick={handleReset}>Reset</Button>
          </Column>
        </Row>
        <Cards>
          <Row gutter={{ xs: '5px', md: 0.5 }} justifyContent="center">
            {cards.map((data, i) => {
              const isOpened = cardsOpen.some(e => e.index === i);
              const isSuccess = cardsSuccess.some(e => e.id === data.id && e.index === i);
              return (
                <Column key={i}>
                  <Card
                    data={data}
                    isOpened={isOpened}
                    isSuccess={isSuccess}
                    onClick={() => !isOpened && !isSuccess && handleCardClick({ index: i, data })}
                  />
                </Column>
              );
            })}
          </Row>
        </Cards>
      </Container>
    </Template>
  );
}

export default Home;
