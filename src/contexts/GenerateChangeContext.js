import React, { useState, createContext } from 'react';

export const GenerateChangeContext = createContext();

export const GenerateChangeContextProvider = (props) => {
  const [priceToPay, setPriceToPay] = useState(0);
  const [pricePaid, setPricePaid] = useState(0.0);
  const [totalChangeValue, setTotalChangeValue] = useState(0.0);
  const [coinsQuantityComposition, setCoinsQuantityComposition] = useState({});

  return (
    <GenerateChangeContext.Provider
      value={{
        priceToPay,
        setPriceToPay,
        pricePaid,
        setPricePaid,
        totalChangeValue,
        setTotalChangeValue,
        coinsQuantityComposition,
        setCoinsQuantityComposition,
      }}
    >
      {props.children}
    </GenerateChangeContext.Provider>
  );
};
