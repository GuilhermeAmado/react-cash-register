import React, { useState, createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  const [stockCoins, setStockCoins] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        stockCoins,
        setStockCoins,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
