import React, { useState, useContext, useEffect } from 'react';
import { Alert, Button, Card, Col, Row, Statistic, Typography } from 'antd';
import styled from 'styled-components';
import CoinList from '../components/CoinList';
import { currencyFormatter } from '../utils/currencyFormater';
import { GlobalContext } from '../contexts/GlobalContext';
import { mergeArray } from '../utils/mergeArray';
const { Title } = Typography;

const RemoveCoinsView = () => {
  const {
    coinsToAddToStock,
    setCoinsToAddToStock,
    coinsInStock,
    setCoinsInStock,
    stockTotalValue,
    setstockTotalValue,
  } = useContext(GlobalContext);
  const [insertedCoinsTotalValue, setInsertedCoinsTotalValue] = useState('');

  useEffect(() => {
    if (coinsToAddToStock.length > 0) {
      const totalPrice = coinsToAddToStock.reduce((accumulator, coin) => {
        return accumulator + coin.value * coin.quantity;
      }, 0);
      setInsertedCoinsTotalValue(totalPrice / 100);
    }
  }, [coinsToAddToStock]);

  const handleRemoveCoins = () => {
    setstockTotalValue(
      (stockTotalValue) => stockTotalValue + insertedCoinsTotalValue
    );
    setCoinsInStock(mergeArray(coinsInStock, coinsToAddToStock));
    setCoinsToAddToStock([]);
    setInsertedCoinsTotalValue('');
  };

  return (
    <>
      <StyledTitle level={2}>Retirar moedas do caixa</StyledTitle>
      <StyledTitle level={4}>Quantidade em caixa</StyledTitle>

      <CoinList mode={'remove'} />

      <StyledAlert
        message="Insira as quantidades nos campos acima"
        type="info"
        showIcon
      />
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Valor atual em caixa"
              value={currencyFormatter(stockTotalValue)}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Valor retirada"
              value={currencyFormatter(insertedCoinsTotalValue)}
              valueStyle={{ color: '#d31a14' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Valor caixa futuro"
              value={currencyFormatter(
                stockTotalValue + insertedCoinsTotalValue
              )}
              valueStyle={{ color: '#003686' }}
            />
          </Card>
        </Col>
      </Row>

      <ButtonContainer>
        <StyledButton
          disabled={insertedCoinsTotalValue + stockTotalValue < 0}
          size="large"
          onClick={() => handleRemoveCoins()}
        >
          Retirar moedas
        </StyledButton>
      </ButtonContainer>
    </>
  );
};

const StyledTitle = styled(Title)`
  text-align: center;
`;

const StyledAlert = styled(Alert)`
  margin: 15px 0;
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

export default RemoveCoinsView;
