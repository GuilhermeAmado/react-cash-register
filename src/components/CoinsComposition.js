import React, { useContext } from 'react';
import CoinList from './CoinList';
import { GenerateChangeContext } from '../contexts/GenerateChangeContext';

const CoinsComposition = () => {
  const { coinsQuantityComposition } = useContext(GenerateChangeContext);

  return (
    <CoinList disabled coinsQuantityComposition={coinsQuantityComposition} />
  );
};

export default CoinsComposition;
