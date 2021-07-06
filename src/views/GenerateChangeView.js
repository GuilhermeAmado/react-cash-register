import React from 'react';
import { Typography, Input, Button } from 'antd';
import CoinList from '../components/CoinList';
import styled from 'styled-components';
import { currencyFormatter } from '../utils/currencyFormater';

const { Title } = Typography;

const GenerateChangeView = () => {
  return (
    <div>
      <StyledTitle level={2}>Gerar troco em moedas</StyledTitle>
      <ValuesDisplay>
        <DisplayInputContainer>
          <label htmlFor="due-value">
            <strong>Valor a pagar</strong>
          </label>
          <StyledInput size="large" name="due-value" id="due-value" />
        </DisplayInputContainer>
        <DisplayInputContainer>
          <label htmlFor="paid-value">
            <strong>Valor pago</strong>
          </label>
          <StyledInput size="large" name="paid-value" id="paid-value" />
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
          />
        </DisplayInputContainer>
      </ValuesDisplay>
      <ButtonContainer>
        <StyledButton size="large">Gerar Troco</StyledButton>
      </ButtonContainer>
      <CoinList />
    </div>
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
  /* color: #1dfd8c; */
`;

const StyledInput = styled(Input)`
  background-color: #121144;
  width: fit-content;
  color: inherit;
  border-color: #121144;

  :disabled {
    background-color: inherit;
    border-color: #121144;

    :hover {
      border-color: #121144;
    }
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const StyledButton = styled(Button)`
  font-weight: bold;
`;

export default GenerateChangeView;
