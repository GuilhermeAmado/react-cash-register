import React from 'react';
import styled from 'styled-components';
import Coin from './Coin';

const CoinList = ({ disabled }) => {
  return (
    <CoinListContainer>
      <Coin value={1} unity={'Real'} disabled={disabled} />
      <Coin value={50} unity={'Centavos'} disabled={disabled} />
      <Coin value={25} unity={'Centavos'} disabled={disabled} />
      <Coin value={10} unity={'Centavos'} disabled={disabled} />
      <Coin value={5} unity={'Centavos'} disabled={disabled} />
      <Coin value={1} unity={'Centavo'} disabled={disabled} />
    </CoinListContainer>
  );
};

const CoinListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default CoinList;
