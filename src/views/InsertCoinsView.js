import React, { useState, useContext, useEffect } from 'react';
import { Alert, Button, Card, Col, Row, Statistic, Typography } from 'antd';
import styled from 'styled-components';
import CoinList from '../components/CoinList';
import { currencyFormatter } from '../utils/currencyFormater';
import { GlobalContext } from '../contexts/GlobalContext';
const { Title } = Typography;

const InsertCoinsView = () => {
  const { stockCoins } = useContext(GlobalContext);
  const [insertedCoinsTotalValue, setInsertedCoinsTotalValue] = useState('');

  useEffect(() => {
    if (stockCoins.length > 0) {
      const totalPrice = stockCoins.reduce((accumulator, coin) => {
        return accumulator + coin.value * coin.quantity;
      }, 0);
      setInsertedCoinsTotalValue(totalPrice / 100);
    }
  }, [stockCoins]);

  return (
    <>
      <StyledTitle level={2}>Abastecer caixa com moedas</StyledTitle>
      <StyledTitle level={4}>Quantidade em caixa</StyledTitle>

      <CoinList />

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
              value={currencyFormatter(11.28)}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Valor abastecimento"
              value={currencyFormatter(insertedCoinsTotalValue)}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Valor caixa futuro"
              value={currencyFormatter(22.56)}
              valueStyle={{ color: '#003686' }}
            />
          </Card>
        </Col>
      </Row>

      <ButtonContainer>
        <StyledButton size="large" onClick={() => console.log('')}>
          Abastecer
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

export default InsertCoinsView;
