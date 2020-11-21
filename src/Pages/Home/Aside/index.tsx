import React, { ChangeEvent, ReactElement } from 'react';

import Button from 'src/components/Button';
import { Column, Row } from 'src/components/Grid';
import Select from 'src/components/Select';

interface Props {
  score: number;
  amount: number;
  tries: number;
  onAmountChange(e: ChangeEvent<HTMLSelectElement>): void;
  onRest(): void;
}

function Aside({ score, amount, tries, onRest, onAmountChange }: Props): ReactElement {
  return (
    <Row justifyContent="space-between">
      <Column>
        <p>
          Score: {score} / {amount}
        </p>
        <p>Tries: {tries}</p>
      </Column>
      <Column>
        <Select value={`${amount}`} onChange={onAmountChange}>
          {Array.from(new Array(11), (_, i) => i + 5).map(v => (
            <option value={v} key={v}>
              {v}
            </option>
          ))}
        </Select>
        <Button onClick={onRest}>Reset</Button>
      </Column>
    </Row>
  );
}

export default Aside;
