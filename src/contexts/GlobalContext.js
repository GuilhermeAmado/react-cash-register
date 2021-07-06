import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [coinsToAddToStock, setCoinsToAddToStock] = useState([]);
  const [coinsInStock, setCoinsInStock] = useState([]);
  const [stockTotalValue, setstockTotalValue] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        coinsToAddToStock,
        setCoinsToAddToStock,
        stockTotalValue,
        setstockTotalValue,
        coinsInStock,
        setCoinsInStock,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
