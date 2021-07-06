import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import coinBackground from '../assets/images/coin.png';
import { GlobalContext } from '../contexts/GlobalContext';

const Coin = ({ mode, value, unity, disabled, compositionQuantity, name }) => {
  const { coinsToAddToStock, setCoinsToAddToStock, coinsInStock } =
    useContext(GlobalContext);

  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    if (coinsToAddToStock.length === 0) {
      setDisplayValue('');
    }
  }, [coinsToAddToStock]);

  return (
    <CoinContainer>
      <CoinStockInput
        disabled
        name={'stock' + mode + value + unity}
        id={'stock' + mode + value + unity}
        value={coinsInStock.find((coin) => coin.name === name)?.quantity || 0}
      />

      <CoinStyles unity={unity}>
        <label htmlFor={mode + value + unity}>
          <div className="value-container">
            <strong>{value === 100 ? 1 : value}</strong>
            <small>{unity}</small>
          </div>
        </label>
      </CoinStyles>
      <StyledInput
        disabled={disabled}
        name={mode + value + unity}
        id={mode + value + unity}
        value={compositionQuantity || displayValue}
        onChange={(e) => {
          setCoinsToAddToStock([
            ...coinsToAddToStock.filter((coin) => coin.name !== name),
            {
              name: name,
              value: value,
              quantity:
                mode === 'remove'
                  ? -Math.abs(Number(e.target.value))
                  : Number(e.target.value),
            },
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
