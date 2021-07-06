import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import coinBackground from '../assets/images/coin.png';

const Coin = ({ value, unity, disabled, quantity }) => {
  const [coinQuantity, setCoinQuantity] = useState(null);

  return (
    <CoinContainer>
      <CoinStyles unity={unity}>
        <label htmlFor={value + unity}>
          <div className="value-container">
            <strong>{value}</strong>
            <small>{unity}</small>
          </div>
        </label>
      </CoinStyles>
      <StyledInput
        disabled={disabled}
        name={value + unity}
        id={value + unity}
        value={quantity || coinQuantity}
        onChange={(e) => setCoinQuantity(e.target.value)}
      />
    </CoinContainer>
  );
};

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

  .value-container {
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
