import React, { useContext } from 'react';
import styled from 'styled-components';
import Coin from './Coin';
import { GenerateChangeContext } from '../contexts/GenerateChangeContext';

const CoinList = ({ disabled, coinsQuantityComposition }) => {
  return (
    <CoinListContainer>
      <Coin
        value={1}
        unity={'Real'}
        disabled={disabled}
        quantity={coinsQuantityComposition?.umReal}
      />
      <Coin
        value={50}
        unity={'Centavos'}
        disabled={disabled}
        quantity={coinsQuantityComposition?.cinquentaCentavos}
      />
      <Coin
        value={25}
        unity={'Centavos'}
        disabled={disabled}
        quantity={coinsQuantityComposition?.vinteCincoCentavos}
      />
      <Coin
        value={10}
        unity={'Centavos'}
        disabled={disabled}
        quantity={coinsQuantityComposition?.dezCentavos}
      />
      <Coin
        value={5}
        unity={'Centavos'}
        disabled={disabled}
        quantity={coinsQuantityComposition?.cincoCentavos}
      />
      <Coin
        value={1}
        unity={'Centavo'}
        disabled={disabled}
        quantity={coinsQuantityComposition?.umCentavo}
      />
    </CoinListContainer>
  );
};

const CoinListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default CoinList;
