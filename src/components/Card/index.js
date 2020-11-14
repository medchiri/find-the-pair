import { CardWrapper } from './style';

function Card({ img, id, onClick }) {
  return (
    <CardWrapper id={id} onClick={onClick}>
      <img {...img} />
    </CardWrapper>
  );
}

export default Card;
