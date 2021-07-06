import React from 'react';
import styled from 'styled-components';
import Coin from './Coin';

const CoinList = ({ mode, disabled, coinsQuantityComposition }) => {
  return (
    <CoinListContainer>
      <Coin
        disabled={disabled}
        mode={mode}
        value={100}
        unity={'Real'}
        compositionQuantity={coinsQuantityComposition?.umReal}
        name={'umReal'}
      />
      <Coin
        disabled={disabled}
        mode={mode}
        value={50}
        unity={'Centavos'}
        compositionQuantity={coinsQuantityComposition?.cinquentaCentavos}
        name={'cinquentaCentavos'}
      />
      <Coin
        disabled={disabled}
        mode={mode}
        value={25}
        unity={'Centavos'}
        compositionQuantity={coinsQuantityComposition?.vinteCincoCentavos}
        name={'vinteCincoCentavos'}
      />
      <Coin
        disabled={disabled}
        mode={mode}
        value={10}
        unity={'Centavos'}
        compositionQuantity={coinsQuantityComposition?.dezCentavos}
        name={'dezCentavos'}
      />
      <Coin
        disabled={disabled}
        mode={mode}
        value={5}
        unity={'Centavos'}
        compositionQuantity={coinsQuantityComposition?.cincoCentavos}
        name={'cincoCentavos'}
      />
      <Coin
        disabled={disabled}
        mode={mode}
        value={1}
        unity={'Centavo'}
        compositionQuantity={coinsQuantityComposition?.umCentavo}
        name={'umCentavo'}
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
