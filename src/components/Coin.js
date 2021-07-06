import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import coinBackground from '../assets/images/coin.png';
import { GlobalContext } from '../contexts/GlobalContext';

const Coin = ({ value, unity, disabled, compositionQuantity, name }) => {
  const { stockCoins, setStockCoins } = useContext(GlobalContext);

  const [displayValue, setDisplayValue] = useState('');

  return (
    <CoinContainer>
      <CoinStockInput
        disabled
        name={'stock' + value + unity}
        id={'stock' + value + unity}
        value={0}
      />

      <CoinStyles unity={unity}>
        <label htmlFor={value + unity}>
          <div className="value-container">
            <strong>{value === 100 ? 1 : value}</strong>
            <small>{unity}</small>
          </div>
        </label>
      </CoinStyles>
      <StyledInput
        disabled={disabled}
        name={value + unity}
        id={value + unity}
        value={compositionQuantity || displayValue}
        onChange={(e) => {
          setStockCoins([
            ...stockCoins.filter((coin) => coin.name !== name),
            { name: name, value: value, quantity: Number(e.target.value) },
          ]);
          setDisplayValue(e.target.value);
        }}
      />
    </CoinContainer>
  );
};

const CoinStockInput = styled(Input)`
  max-width: 75px;
  text-align: center;

  :disabled {
    cursor: default;
  }
`;

const CoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoinStyles = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: url(${coinBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #555;

  label {
    cursor: pointer;
    padding: 10px;
  }

  .value-container {
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    strong {
      line-height: 1;
      font-size: ${(props) =>
        props.unity.toLowerCase() === 'real' ? '36px' : '24px'};
    }
  }
`;

const StyledInput = styled(Input)`
  max-width: 75px;
  text-align: center;

  font-size: 18px;
  font-weight: bold;

  :disabled {
    cursor: default;
    color: #000;
  }
`;

export default Coin;
