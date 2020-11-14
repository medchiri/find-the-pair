import React, { useEffect, useRef, useState } from 'react';

import Template from 'src/components/Template';
import Card, { CardShape } from 'src/components/Card';
import { Column, Container, Row } from 'src/components/Grid';

type CardsType = CardShape[];
interface OpenedCard {
  index: number;
  data: CardShape;
}
type OpenedCards = OpenedCard[];

function Home() {
  const [amount, setAmount] = useState(10);
  const [tries, setTries] = useState(0);
  const [cards, setCards] = useState<CardsType>([]);
  const [cardsOpen, setCardsOpen] = useState<OpenedCards>([]);
  const [cardsSuccess, setCardsSuccess] = useState<CardsType>([]);
  const timeoutId = useRef(-1);

  useEffect(() => {
    const cards = Array.from(new Array(amount))
      .reduce((acc: CardsType, _, i: number) => {
        const card = {
          id: `${i + 1}`,
          img: { src: `https://picsum.photos/300/300?random=${i + 1}`, alt: `image number ${i + 1}` },
        };
        acc.push(card, card);
        return acc;
      }, [])
      .sort(() => Math.random() - 0.5);
    setCards(cards);
    setCardsOpen(cards.map((data, index) => ({ index, data })));
    setCardsSuccess([]);
    setTries(0);
  }, [amount]);

  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      setCardsOpen([]);
    }, 4000);

    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [amount]);

  useEffect(() => {
    if (cardsOpen.length === 2) {
      setTries(prev => prev + 1);
      if (cardsOpen[0].data.id === cardsOpen[1].data.id) {
        setCardsSuccess(prev => [...prev, cardsOpen[0].data]);
        setCardsOpen([]);
      } else {
        timeoutId.current = setTimeout(() => {
          setCardsOpen([]);
        }, 1000);
      }
    }
  }, [cardsOpen]);

  const handleCardClick = (card: { index: number; data: CardShape }) => {
    if (cardsOpen.length < 2) {
      setCardsOpen(prev => [...prev, card]);
    }
  };

  return (
    <Template>
      <Container>
        <p>
          Score: {cardsSuccess.length} / {amount}
        </p>
        <p>Tries: {tries}</p>
        <input
          type="number"
          min="6"
          max="15"
          value={`${amount}`}
          onChange={e => setAmount(parseFloat(e.target.value))}
        />
        {cardsSuccess.length === amount && <p>you are the boss !!!</p>}
        <Row>
          {cards.map((data, i) => (
            <Column key={i}>
              <Card
                data={data}
                isOpened={cardsOpen.some(e => e.index === i)}
                isSuccess={cardsSuccess.some(e => e.id === data.id)}
                onClick={() => handleCardClick({ index: i, data })}
              />
            </Column>
          ))}
        </Row>
      </Container>
    </Template>
  );
}

export default Home;
