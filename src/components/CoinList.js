import React from 'react';
import styled from 'styled-components';
import Coin from './Coin';

const CoinList = () => {
  return (
    <CoinListContainer>
      <Coin value={1} unity={'Real'} />
      <Coin value={50} unity={'Centavos'} />
      <Coin value={25} unity={'Centavos'} />
      <Coin value={10} unity={'Centavos'} />
      <Coin value={5} unity={'Centavos'} />
      <Coin value={1} unity={'Centavo'} />
    </CoinListContainer>
  );
};

const CoinListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default CoinList;
