import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Typography, InputNumber, Button } from 'antd';
import styled from 'styled-components';
import ChangeCompositionModal from '../components/ChangeCompositionModal';
import { GenerateChangeContext } from '../contexts/GenerateChangeContext';
import { currencyFormatter } from '../utils/currencyFormater';
import { currencyParser } from '../utils/currencyParser';

const { Title } = Typography;

const GenerateChangeView = () => {
  const {
    priceToPay,
    setPriceToPay,
    pricePaid,
    setPricePaid,
    totalChangeValue,
    setTotalChangeValue,
    setCoinsQuantityComposition,
  } = useContext(GenerateChangeContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const composeChange = useCallback(() => {
    const totalChange = totalChangeValue * 100;
    const quantityUmRealCoin = Math.floor(totalChange / 100);
    let leftOver = Math.round(totalChange % 100);

    const quantityCinquentaCentavosCoin = Math.floor(leftOver / 50);
    leftOver = Math.round(leftOver % 50);

    const quantityVinteCincoCentavosCoin = Math.floor(leftOver / 25);
    leftOver = Math.round(leftOver % 25);

    const quantityDezCentavosCoin = Math.floor(leftOver / 10);
    leftOver = Math.round(leftOver % 10);

    const quantityCincoCentavosCoin = Math.floor(leftOver / 5);
    leftOver = Math.round(leftOver % 5);

    const quantityUmCentavoCoin = Math.floor(leftOver / 1);
    leftOver = Math.round(leftOver % 1);

    setCoinsQuantityComposition({
      umReal: quantityUmRealCoin,
      cinquentaCentavos: quantityCinquentaCentavosCoin,
      vinteCincoCentavos: quantityVinteCincoCentavosCoin,
      dezCentavos: quantityDezCentavosCoin,
      cincoCentavos: quantityCincoCentavosCoin,
      umCentavo: quantityUmCentavoCoin,
    });
  }, [totalChangeValue, setCoinsQuantityComposition]);

  const handleGenerateChange = () => {
    composeChange();
    setIsModalVisible(true);
  };

  useEffect(() => {
    if (pricePaid) {
      setTotalChangeValue(pricePaid - priceToPay);
    }
  }, [priceToPay, pricePaid, setTotalChangeValue]);

  return (
    <>
      <ChangeCompositionModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <StyledTitle level={2}>Gerar troco em moedas</StyledTitle>
      <ValuesDisplay>
        <DisplayInputContainer>
          <label htmlFor="price-to-pay">
            <strong>Valor a pagar</strong>
          </label>
          <StyledInput
            size="large"
            name="price-to-pay"
            id="price-to-pay"
            min={0}
            step={0.1}
            value={priceToPay}
            onChange={setPriceToPay}
            formatter={currencyFormatter}
            parser={currencyParser}
          />
        </DisplayInputContainer>
        <DisplayInputContainer>
          <label htmlFor="price-paid">
            <strong>Valor pago</strong>
          </label>
          <StyledInput
            size="large"
            name="price-paid"
            id="price-paid"
            min={0}
            step={0.01}
            value={pricePaid}
            onChange={setPricePaid}
            formatter={currencyFormatter}
            parser={currencyParser}
          />
        </DisplayInputContainer>
        <DisplayInputContainer>
          <label htmlFor="change-value">
            <strong>Troco</strong>
          </label>
          <StyledInput
            disabled
            size="large"
            name="change-value"
            id="change-value"
            min={0}
            formatter={currencyFormatter}
            parser={currencyParser}
            value={totalChangeValue}
            onChange={setTotalChangeValue}
          />
        </DisplayInputContainer>
      </ValuesDisplay>
      <ButtonContainer>
        <StyledButton
          disabled={!priceToPay || !pricePaid || pricePaid < priceToPay}
          size="large"
          onClick={() => handleGenerateChange()}
        >
          Gerar Troco
        </StyledButton>
      </ButtonContainer>
    </>
  );
};

const StyledTitle = styled(Title)`
  text-align: center;
`;

const ValuesDisplay = styled.div`
  height: 100px;
  background-color: #000;
  border-radius: 2px;
  padding: 6px 12px;
  margin-bottom: 15px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const DisplayInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const StyledInput = styled(InputNumber)`
  background-color: #121144;
  width: fit-content;
  color: inherit;
  border-color: #121144;

  [disabled] {
    background-color: inherit;
    border-color: #121144;
  }

  :hover {
    border-color: #121144;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyledButton = styled(Button)`
  font-weight: bold;
`;

export default GenerateChangeView;
